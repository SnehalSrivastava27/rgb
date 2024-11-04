import React, { useState } from 'react';
import { PaintBucket, Droplets, Info } from 'lucide-react';
import { ColorSlider } from './components/ColorSlider';
import { ColorPreview } from './components/ColorPreview';
import { InfoSection } from './components/InfoSection';
import { ValueDisplay } from './components/ValueDisplay';

function App() {
  const [red, setRed] = useState(0.5);
  const [green, setGreen] = useState(0.5);
  const [blue, setBlue] = useState(0.5);

  // Convert normalized values (0-1) to RGB (0-255)
  const r = Math.round(red * 255);
  const g = Math.round(green * 255);
  const b = Math.round(blue * 255);

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  const cmyColor = `rgb(${255-r}, ${255-g}, ${255-b})`;
  
  // Normalized RGB representation
  const normalizedRGB = `(${red.toFixed(2)}, ${green.toFixed(2)}, ${blue.toFixed(2)})`;
  const standardRGB = `(${r}, ${g}, ${b})`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
            RGB Color Space by Code SP
          </h1>
          <p className="text-gray-300">Understanding RGB values in both normalized (0-1) and standard (0-255) formats by Code SP</p>
        </header>

        <InfoSection title="RGB Color Model" icon={<PaintBucket />} iconColor="text-blue-400">
          <p className="text-gray-300 mb-6">
            Colors in RGB can be represented in two ways: normalized values between 0-1, or standard values between 0-255.
            Both represent the same colors but are used in different contexts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <ColorSlider
                  color="Red"
                  value={red}
                  onChange={setRed}
                  textColor="text-red-400"
                  standardValue={r}
                />
                <ColorSlider
                  color="Green"
                  value={green}
                  onChange={setGreen}
                  textColor="text-green-400"
                  standardValue={g}
                />
                <ColorSlider
                  color="Blue"
                  value={blue}
                  onChange={setBlue}
                  textColor="text-blue-400"
                  standardValue={b}
                />
              </div>
            </div>
            <div className="space-y-6">
              <ColorPreview color={rgbColor} label={normalizedRGB} />
              <ValueDisplay 
                normalizedValues={[red, green, blue]}
                standardValues={[r, g, b]}
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-red-500 rounded-lg mb-2"></div>
              <div className="space-y-1">
                <code className="text-sm block">(1, 0, 0)</code>
                <code className="text-sm block text-gray-400">(255, 0, 0)</code>
              </div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-green-500 rounded-lg mb-2"></div>
              <div className="space-y-1">
                <code className="text-sm block">(0, 1, 0)</code>
                <code className="text-sm block text-gray-400">(0, 255, 0)</code>
              </div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-blue-500 rounded-lg mb-2"></div>
              <div className="space-y-1">
                <code className="text-sm block">(0, 0, 1)</code>
                <code className="text-sm block text-gray-400">(0, 0, 255)</code>
              </div>
            </div>
          </div>
        </InfoSection>

        <InfoSection title="CMY Color Model" icon={<Droplets />} iconColor="text-cyan-400">
          <p className="text-gray-300 mb-6">
            The CMY values are the complement of RGB values. When an RGB value is (1,0,0) or (255,0,0),
            the corresponding CMY value is (0,1,1) or (0,255,255).
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-400" />
                <p className="text-sm text-gray-300">
                  CMY = (1-R, 1-G, 1-B) or (255-R, 255-G, 255-B)
                </p>
              </div>
              <div className="space-y-2">
                <p>Cyan: {(1-red).toFixed(2)} ({255-r})</p>
                <p>Magenta: {(1-green).toFixed(2)} ({255-g})</p>
                <p>Yellow: {(1-blue).toFixed(2)} ({255-b})</p>
              </div>
            </div>
            <ColorPreview 
              color={cmyColor} 
              label={`(${(1-red).toFixed(2)}, ${(1-green).toFixed(2)}, ${(1-blue).toFixed(2)})`} 
            />
          </div>
        </InfoSection>

        <InfoSection title="Primary Colors" icon={<Info />} iconColor="text-purple-400">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-blue-400">RGB Primary Colors</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Red: (1,0,0) = (255,0,0)</li>
                <li>Green: (0,1,0) = (0,255,0)</li>
                <li>Blue: (0,0,1) = (0,0,255)</li>
                <li>Black: (0,0,0) = (0,0,0)</li>
                <li>White: (1,1,1) = (255,255,255)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-cyan-400">CMY Primary Colors</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Cyan: (0,1,1) = (0,255,255)</li>
                <li>Magenta: (1,0,1) = (255,0,255)</li>
                <li>Yellow: (1,1,0) = (255,255,0)</li>
                <li>Black: (1,1,1) = (255,255,255)</li>
                <li>White: (0,0,0) = (0,0,0)</li>
              </ul>
            </div>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}

export default App;