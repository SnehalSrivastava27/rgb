import React from 'react';

interface ColorPreviewProps {
  color: string;
  label: string;
}

export function ColorPreview({ color, label }: ColorPreviewProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-40 h-40 rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      ></div>
      <code className="bg-gray-900 px-4 py-2 rounded">
        {label}
      </code>
    </div>
  );
}