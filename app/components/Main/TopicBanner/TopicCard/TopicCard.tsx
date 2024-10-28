"use client"
import React, { useMemo } from 'react';
import { useLoadingDispatch, INCREMENT_COLOR_EXTRACTION_COUNT } from '@/app/contexts/LoadingContext';
import FannedPins from '@/app/components/Main/TopicBanner/TopicCard/FannedPins/FannedPins';
import { Pin } from '@/app/components/Main/TopicBanner/TopicCard/FannedPins/FanPin/FanPin';

interface TopicCardProps {
  topic: string;
  pins: Pin[];
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, pins }) => {
  const dispatch = useLoadingDispatch();
  const [extractedColors, setExtractedColors] = React.useState<[number, number, number][]>([]);

  const backgroundColor = useMemo(() => {
    if (extractedColors.length === pins.length && extractedColors.length > 0) {
      const totalColor = extractedColors.reduce((acc, color) => {
        return [acc[0] + color[0], acc[1] + color[1], acc[2] + color[2]];
      }, [0, 0, 0]);

      const avgColor = totalColor.map((val) => Math.round(val / extractedColors.length));
      const [r, g, b] = avgColor;
      const BRIGHTNESS_THRESHOLD = 255;
      const brightness = r * 0.299 + g * 0.587 + b * 0.114;

      let adjustedColor = avgColor;
      if (brightness < BRIGHTNESS_THRESHOLD) {
        adjustedColor = avgColor.map((val) => Math.min(val + 60, 255));
      }

      return `rgb(${adjustedColor[0]}, ${adjustedColor[1]}, ${adjustedColor[2]})`;
    }
    return 'rgb(209, 213, 219)'; // bg-gray-300
  }, [extractedColors, pins.length]);

  const handleColorsExtracted = (colors: [number, number, number][]) => {
    setExtractedColors(colors);
  };

  // useEffect(() => {
  //   if (extractedColors.length === pins.length) {
  //     dispatch({ type: INCREMENT_COLOR_EXTRACTION_COUNT });
  //   }
  // }, [extractedColors, pins.length, dispatch]);

  return (
    <div
      className="flex items-center p-6 rounded-3xl shadow-lg w-[295px] h-[106px] overflow-hidden relative my-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="flex-shrink-0 w-[25%] h-auto relative z-10">
        <FannedPins pins={pins} onColorsExtracted={handleColorsExtracted} />
      </div>

      <div className="flex-grow pl-8 z-10">
        <p className="text-base text-gray-950">More ideas for</p>
        <p className="text-xl font-bold">{topic}</p>
      </div>
    </div>
  );
};

export default TopicCard;