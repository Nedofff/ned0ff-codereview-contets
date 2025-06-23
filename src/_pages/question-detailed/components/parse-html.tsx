import React from "react";
import { Code, InlineCode } from "./code";
import * as cheerio from "cheerio";

interface ParseHtmlProps {
  html: string;
  className?: string;
}

export function ParseHtml({ html, className }: ParseHtmlProps) {
  const parseHtmlToElements = (htmlString: string): React.ReactNode[] => {
    const $ = cheerio.load(htmlString);
    const elements: React.ReactNode[] = [];

    // Функция для рекурсивной обработки элементов
    const processElement = (
      element: cheerio.Element,
      index: number
    ): React.ReactNode => {
      const $element = $(element);
      const tagName = $element.prop("tagName")?.toLowerCase();

      // Пропускаем структурные HTML элементы
      if (
        [
          "html",
          "head",
          "body",
          "meta",
          "title",
          "link",
          "script",
          "style",
        ].includes(tagName || "")
      ) {
        // Обрабатываем детей этих элементов вместо самих элементов
        const children: React.ReactNode[] = [];
        $element.contents().each((childIndex, child) => {
          if (child.type === "text") {
            const text = $(child).text();
            if (text.trim()) {
              children.push(text);
            }
          } else if (child.type === "tag") {
            const childElement = processElement(
              child as cheerio.Element,
              childIndex
            );
            if (childElement) {
              children.push(childElement);
            }
          }
        });
        return children.length === 1 ? (
          children[0]
        ) : (
          <React.Fragment key={index}>{children}</React.Fragment>
        );
      }

      // Обработка тега <pre>
      if (tagName === "pre") {
        const codeElement = $element.find("code").first();
        const codeContent =
          codeElement.length > 0 ? codeElement.text() : $element.text();

        const language =
          codeElement.attr("class")?.match(/language-(\w+)/)?.[1] ||
          codeContent.includes("public class") ||
          codeContent.includes("System.out")
            ? "java"
            : codeContent.includes("function")
            ? "javascript"
            : codeContent.includes("def ")
            ? "python"
            : "text";

        return (
          <Code key={index} language={language} showCopyButton={true}>
            {codeContent}
          </Code>
        );
      }

      // Обработка тега <code> (inline)
      if (tagName === "code") {
        // Проверяем, что этот code не внутри pre
        if ($element.closest("pre").length > 0) {
          return null; // Этот код уже обработан в pre
        }

        return <InlineCode key={index}>{$element.text()}</InlineCode>;
      }

      // Для других элементов создаем обычный React элемент
      const children: React.ReactNode[] = [];
      const childElements = $element.contents();

      childElements.each((childIndex, child) => {
        if (child.type === "text") {
          const text = $(child).text();
          if (text.trim()) {
            children.push(text);
          }
        } else if (child.type === "tag") {
          const childElement = processElement(
            child as cheerio.Element,
            childIndex
          );
          if (childElement) {
            children.push(childElement);
          }
        }
      });

      // Получаем атрибуты элемента
      const attributes = getElementAttributes($element);

      return React.createElement(
        tagName || "div",
        { key: index, ...attributes },
        children.length > 0 ? children : $element.text()
      );
    };

    // Получаем контент из body или из корня, если body нет
    const bodyContent = $("body");
    const contentToProcess = bodyContent.length > 0 ? bodyContent : $.root();

    // Обрабатываем все дочерние элементы
    contentToProcess.contents().each((index, element) => {
      if (element.type === "text") {
        const text = $(element).text();
        if (text.trim()) {
          elements.push(text);
        }
      } else if (element.type === "tag") {
        const reactElement = processElement(element as cheerio.Element, index);
        if (reactElement) {
          elements.push(reactElement);
        }
      }
    });

    return elements;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getElementAttributes = ($element: any): Record<string, string> => {
    const attrs: Record<string, string> = {};
    const attributes = $element.get(0)?.attribs || {};

    Object.entries(attributes).forEach(([name, value]) => {
      // Пропускаем потенциально опасные атрибуты
      if (name.startsWith("on") || name === "href" || name === "src") {
        return;
      }

      // Преобразуем class в className для React
      if (name === "class") {
        attrs.className = String(value);
      } else {
        attrs[name] = String(value);
      }
    });

    return attrs;
  };

  const elements = parseHtmlToElements(html);

  // Если элементов нет, возвращаем null
  if (elements.length === 0) {
    return null;
  }

  // Если элемент один и нет className, возвращаем его напрямую
  if (elements.length === 1 && !className) {
    return <>{elements[0]}</>;
  }

  // Иначе оборачиваем в div
  return <div className={className}>{elements}</div>;
}
