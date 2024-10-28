import React from 'react';
import TextTruncate from 'react-text-truncate';

type TruncatedTextProps = {
    text: string;
    maxWidth?: number
}

export default function TruncatedText({ text, maxWidth = 100 }: TruncatedTextProps) {
  const isURL = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  };

  let displayText = text;

  if (isURL(text)) {
    const parsedURL = new URL(text);
    displayText = parsedURL.hostname.replace('www.', ''); // pinterest.com
  }

  return (
    <div style={{ maxWidth }}>
      <TextTruncate
        line={1}
        truncateText="…"
        text={displayText}
        textTruncateChild={
          isURL(text) ? (
            <a href={text} target="_blank" rel="noopener noreferrer">
              {displayText}
            </a>
          ) : null
        }
      />
    </div>
  );
}
