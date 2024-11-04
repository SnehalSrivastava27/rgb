import React from 'react';

interface ColorSliderProps {
  color: string;
  value: number;
  onChange: (value: number) => void;
  textColor: string;
  standardValue: number;
}

export function ColorSlider({ color, value, onChange, textColor, standardValue }: ColorSliderProps) {
  const percentage = Math.round(value * 100);
  
  return (
    <label className="block">
      <div className="flex justify-between items-center mb-1">
        <span className={`${textColor} font-medium`}>{color}</span>
        <div className="text-sm space-x-2">
          <span className="text-gray-400">{standardValue}</span>
          <span className="text-gray-500">|</span>
          <span>{value.toFixed(2)}</span>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={(e) => onChange(Number(e.target.value) / 100)}
        className={`w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-${textColor.split('-')[1]}`}
      />
    </label>
  );
}