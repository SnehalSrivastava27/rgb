import React from 'react';

interface ValueDisplayProps {
  normalizedValues: number[];
  standardValues: number[];
}

export function ValueDisplay({ normalizedValues, standardValues }: ValueDisplayProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Normalized (0-1):</span>
        <code>({normalizedValues.map(v => v.toFixed(2)).join(', ')})</code>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">Standard (0-255):</span>
        <code>({standardValues.join(', ')})</code>
      </div>
    </div>
  );
}