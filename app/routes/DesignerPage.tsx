import { Link } from '@remix-run/react';
import { useState, useRef } from 'react';

export default function DesignerPage() {
  const frameRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - frameRef.current.offsetLeft,
      y: event.clientY - frameRef.current.offsetTop,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    frameRef.current.style.left = `${event.clientX - offset.x}px`;
    frameRef.current.style.top = `${event.clientY - offset.y}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
      <div
        ref={frameRef}
        className="bg-white p-8 rounded cursor-grab active:cursor-grabbing absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
        }}
        onMouseDown={handleMouseDown}>
        <h2 className="text-xl font-bold mb-3">
          <span className="bg-gray-700 text-gray-100 py-2 px-2 rounded text-sm">
            Projects
          </span>
        </h2>
        <div className="bg-gray-200 p-8 rounded">
          <div className="grid grid-cols-2 gap-8">
            <Link to="/poster1">
              <div className="relative rounded cursor-pointer group">
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2596be] transition duration-300"></div>
                <img
                  src="/poster1.png"
                  alt="Poster 1"
                  className="w-full h-auto"
                />
                <div className="absolute -top-6 -left-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-transparent text-[#2596be] text-xs py-1 px-2 rounded">
                    Poster 1 - made by me
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/poster2">
              <div className="relative rounded cursor-pointer group">
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#2596be] transition duration-300"></div>
                <img
                  src="/poster2.png"
                  alt="Poster 2"
                  className="w-full h-auto"
                />
                <div className="absolute -top-6 -left-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-transparent text-[#2596be] text-xs py-2 px-4 rounded">
                    Poster 2 - also me;)
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
