import React from 'react';
import './ComponentShowcase.css';

interface ComponentShowcaseProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
  className?: string;
}

export function ComponentShowcase({
  title,
  description,
  children,
  code,
  className = ''
}: ComponentShowcaseProps) {
  return (
    <div className={`component-showcase ${className}`}>
      {title && (
        <div className="showcase-header">
          <h4 className="showcase-title">{title}</h4>
          {description && (
            <p className="showcase-description">{description}</p>
          )}
        </div>
      )}

      <div className="showcase-preview">
        <div className="preview-container">
          {children}
        </div>
      </div>

      {code && (
        <div className="showcase-code">
          <pre><code>{code}</code></pre>
        </div>
      )}
    </div>
  );
}