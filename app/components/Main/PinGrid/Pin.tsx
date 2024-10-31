import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { ChevronDown, Download, MoveUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger } from "@/components/ui/popover"
import TruncatedText from "@/components/ui/TruncatedText";

export type PinProps = {
  id?: string;
  title: string;
  imageURL: string;
  link: string;
  userName?: string;
  userAvatar?: string;
};

const Pin = ({ id, title, link, imageURL }: PinProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBoardsOpen, setIsBoardsOpen] = useState(false);
  const router = useRouter();

  const handlePinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/pin/${id}`);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = `${title || 'pin'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExternalLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePinClick}
      >
        <img src={imageURL} alt={title} className="w-full object-cover rounded-xl" />

        {isHovered && (
          <div className="absolute inset-0 z-11 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-xl transition-opacity">
            <div className="flex justify-between">
              <Popover open={isBoardsOpen} onOpenChange={setIsBoardsOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`rounded-full px-3 py-1 text-white transition-colors font-bold ${
                      isBoardsOpen 
                        ? 'bg-gray-800' 
                        : 'bg-transparent hover:bg-white/20 hover:text-white'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Board <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                {/*TODO: Re-add one the popover content menu is cleaned up*/}
                {/*<PopoverContent className="w-80">*/}
                {/*  <div className="space-y-4">*/}
                {/*    <h3 className="font-semibold">Save to board</h3>*/}
                {/*    <input*/}
                {/*      type="text"*/}
                {/*      placeholder="Search"*/}
                {/*      className="w-full p-2 border rounded-full"*/}
                {/*    />*/}
                {/*    <div className="space-y-2">*/}
                {/*      <h4 className="text-sm font-medium">Top choices</h4>*/}
                {/*      <Button variant="ghost" className="w-full justify-start">*/}
                {/*        <img src="/placeholder.svg" alt="Board" className="w-8 h-8 rounded-md mr-2" />*/}
                {/*        150V*/}
                {/*      </Button>*/}
                {/*      <Button variant="ghost" className="w-full justify-start">*/}
                {/*        <img src="/placeholder.svg" alt="Board" className="w-8 h-8 rounded-md mr-2" />*/}
                {/*        2nd Site Mood Board*/}
                {/*      </Button>*/}
                {/*    </div>*/}
                {/*    <div className="space-y-2">*/}
                {/*      <h4 className="text-sm font-medium">All boards</h4>*/}
                {/*      <Button variant="ghost" className="w-full justify-start">*/}
                {/*        <img src="/placeholder.svg" alt="Board" className="w-8 h-8 rounded-md mr-2" />*/}
                {/*        #Life*/}
                {/*      </Button>*/}
                {/*      <Button variant="ghost" className="w-full justify-start">*/}
                {/*        <img src="/placeholder.svg" alt="Board" className="w-8 h-8 rounded-md mr-2" />*/}
                {/*        150V*/}
                {/*      </Button>*/}
                {/*      <Button variant="ghost" className="w-full justify-start">*/}
                {/*        + Create board*/}
                {/*      </Button>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</PopoverContent>*/}
              </Popover>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-3 py-1 font-bold"
                onClick={(e) => e.stopPropagation()}
              >
                Save
              </Button>
            </div>

            <div className="flex justify-between">
              <Button
                variant="ghost"
                className="bg-white hover:bg-white/90 text-black rounded-full px-3 py-1 flex items-center font-bold"
                onClick={handleExternalLinkClick}
                aria-label="Visit external link"
              >
                <MoveUpRight className="h-4 w-4 mr-2 flex-shrink-0" strokeWidth={3} absoluteStrokeWidth={true} />
                <TruncatedText text={link} maxWidth={100} />
              </Button>
              <div className="space-x-2">
                <Button 
                  variant="ghost" 
                  className="bg-white/70 hover:bg-white/90 text-black p-2 rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={handleDownload}
                  aria-label="Download image"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 font-bold">
        <TruncatedText text={title} maxWidth={236} />
      </div>
    </div>
  );
};

export default Pin;