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
    const processElement = (
      element: cheerio.Element,
      index: number
    ): React.ReactNode => {
      const $element = $(element);
      const tagName = $element.prop("tagName")?.toLowerCase();
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
      if (tagName === "code") {
        if ($element.closest("pre").length > 0) {
          return null;
        }
        return <InlineCode key={index}>{$element.text()}</InlineCode>;
      }
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
      const attributes = getElementAttributes($element);
      return React.createElement(
        tagName || "div",
        { key: index, ...attributes },
        children.length > 0 ? children : $element.text()
      );
    };
    const bodyContent = $("body");
    const contentToProcess = bodyContent.length > 0 ? bodyContent : $.root();
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
  const getElementAttributes = (
    $element: cheerio.Cheerio
  ): Record<string, string> => {
    const attrs: Record<string, string> = {};
    const attributes = $element.get(0)?.attribs || {};
    Object.entries(attributes).forEach(([name, value]) => {
      if (name.startsWith("on") || name === "href" || name === "src") {
        return;
      }
      if (name === "class") {
        attrs.className = String(value);
      } else {
        attrs[name] = String(value);
      }
    });
    return attrs;
  };
  const elements = parseHtmlToElements(html);
  if (elements.length === 0) {
    return null;
  }
  if (elements.length === 1 && !className) {
    return <>{elements[0]}</>;
  }
  return <div className={className}>{elements}</div>;
}
