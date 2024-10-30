"use client"
import React, { useState, useEffect, useMemo } from 'react';
import FanPin, { Pin } from '@/app/home/components/Home/TopicBanner/TopicCard/FannedPins/FanPin/FanPin';

type FannedPinProps = {
  pins: Pin[];
  onColorsExtracted?: (colors: [number, number, number][]) => void;
};

const FannedPins: React.FC<FannedPinProps> = ({ pins, onColorsExtracted }) => {
  const totalPins = pins.length;
  const TOTAL_ANGLE = 60;
  const [colors, setColors] = useState<[number, number, number][]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const memoizedColors = useMemo(() => colors, [colors]);

  useEffect(() => {
    if (onColorsExtracted && memoizedColors.length === totalPins) {
      onColorsExtracted(memoizedColors);
    }
  }, [memoizedColors, onColorsExtracted, totalPins]);

  const handleColorExtracted = (color: [number, number, number]) => {
    setColors((prevColors) => {
      if (prevColors.length < totalPins) {
        return [...prevColors, color];
      }
      return prevColors;
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[150px]">
      {pins.map((pin, index) => {
        const increment = TOTAL_ANGLE / (totalPins - 1);
        const rotation = -TOTAL_ANGLE / 2 + increment * index;
        const translateX = (index - (totalPins - 1) / 2) * -50;

        return (
          <div
            key={pin.id}
            style={{
              transform: `translateX(${translateX}px) rotate(${rotation}deg)`,
              zIndex: hoveredIndex === index ? totalPins + 1 : totalPins - index,
              transition: 'transform 0.3s ease-out, z-index 0.3s',
            }}
            className="mx-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <FanPin
              imageURL={pin.imageURL}
              description={pin.description}
              rotation={rotation}
              onColorExtracted={handleColorExtracted}
              isHovered={hoveredIndex === index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FannedPins;