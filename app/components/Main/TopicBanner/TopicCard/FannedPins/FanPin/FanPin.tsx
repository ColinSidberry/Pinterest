"use client"
import React, {useMemo} from 'react';
import {useColor} from "color-thief-react";

export interface Pin {
  id: number,
  imageURL: string;
  title: string;
  description: string;
  userId: string;
  boards: string[];
  topics: string[];
  repinnedFrom: string;
  link?: string;
}

type FanPinProps = {
  imageURL: string;
  description: string;
  rotation: number;
  onColorExtracted?: (color: [number, number, number]) => void;
  className?: string;
  isHovered: boolean;
};

const FanPin: React.FC<FanPinProps> = ({ imageURL, className = '', rotation, onColorExtracted, isHovered }) => {
  const HOVER_DISTANCE = 30;
  const radians = (rotation * Math.PI) / 180;
  const hoverTranslateX = Math.sin(radians) * HOVER_DISTANCE;
  const hoverTranslateY = -Math.cos(radians) * HOVER_DISTANCE;

  const { data: color } = useColor(imageURL, 'rgbArray', { crossOrigin: 'anonymous' });

  const memoizedColor = useMemo(() => {
    if (color && onColorExtracted) {
      onColorExtracted(color);
    }
    return color;
  }, [color, onColorExtracted]);

  return (
    <div
      className={`border border-white bg-white rounded-2xl w-[50px] h-[67px] shadow-md transition-transform ease-out duration-300 ${className}`}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: isHovered
          ? `translate(${hoverTranslateX}px, ${hoverTranslateY}px)`
          : '',
      }}
    />
  );
};

export default FanPin;