import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/core/utils";
import { CopyButton } from "./copy-button";

// Создаем собственную тему без фона
const customTheme = {
  ...oneLight,
  'pre[class*="language-"]': {
    ...oneLight['pre[class*="language-"]'],
    background: "transparent",
    margin: 0,
    padding: 0,
  },
  'code[class*="language-"]': {
    ...oneLight['code[class*="language-"]'],
    background: "transparent",
  },
};

interface CodeProps {
  children: string;
  language?: string;
  className?: string;
  showCopyButton?: boolean;
}

export function Code({
  children,
  language = "javascript",
  className,
  showCopyButton = true,
}: CodeProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden mt-3 border border-gray-200 ",
        className
      )}
      style={{ backgroundColor: "#F0F1F1" }}
    >
      <div className="flex items-center justify-between px-4 py-2 ">
        <span className="text-sm text-neutral-600 font-medium">{language}</span>
        {showCopyButton && <CopyButton text={children} />}
      </div>

      <SyntaxHighlighter
        language={language}
        style={customTheme}
        customStyle={{
          background: "transparent",
          padding: "1rem",
          margin: 0,
          borderRadius: 0,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export function InlineCode({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "px-1.5 py-0.5 rounded text-sm font-space-mono",
        "bg-gray-100 text-gray-800",
        className
      )}
    >
      {children}
    </code>
  );
}
