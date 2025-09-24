import React, { useState } from "react";
import "./ComponentShowcase.css";

interface ComponentShowcaseProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
  showCode?: boolean;
  background?: "default" | "dark" | "light" | "transparent";
  align?: "left" | "center" | "right";
  spacing?: "tight" | "normal" | "loose";
}

export function ComponentShowcase({
  title,
  description,
  children,
  code,
  className = "",
  showCode = true,
  background = "default",
  align = "center",
  spacing = "normal",
}: ComponentShowcaseProps) {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy code:", err);
      }
    }
  };

  return (
    <div className={`component-showcase ${className} showcase--${background} showcase--${spacing}`}>
      {title && (
        <div className="showcase-header">
          <div className="showcase-info">
            <h4 className="showcase-title">{title}</h4>
            {description && <p className="showcase-description">{description}</p>}
          </div>
          {code && showCode && (
            <div className="showcase-actions">
              <button
                className="action-button"
                onClick={() => setIsCodeVisible(!isCodeVisible)}
                aria-expanded={isCodeVisible}
                aria-label={isCodeVisible ? "Hide code" : "Show code"}
              >
                {isCodeVisible ? "👁️‍🗨️" : "👁️"}
              </button>
              <button
                className="action-button"
                onClick={handleCopyCode}
                aria-label="Copy code"
                disabled={isCopied}
              >
                {isCopied ? "✅" : "📋"}
              </button>
            </div>
          )}
        </div>
      )}

      <div className="showcase-preview" data-align={align}>
        <div className="preview-container">{children}</div>
      </div>

      {code && showCode && isCodeVisible && (
        <div className="showcase-code">
          <div className="code-header">
            <span className="code-language">tsx</span>
            <button className="copy-button" onClick={handleCopyCode} aria-label="Copy code">
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

// Export a simpler version for basic usage
export function SimpleShowcase({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`component-showcase showcase--transparent showcase--tight ${className}`}>
      <div className="showcase-preview" data-align="center">
        <div className="preview-container">{children}</div>
      </div>
    </div>
  );
}
