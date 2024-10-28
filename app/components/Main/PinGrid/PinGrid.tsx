import React, {useEffect} from 'react';
import Pin from "@/app/components/Main/PinGrid/Pin";
import {useLoadingDispatch, SET_PIN_GRID_READY} from '@/app/contexts/LoadingContext';

const images = [
    "/Black_Joy.jpg",
    "/Bulldog.jpg",
    "/Business_Suite.jpg",
    "/Car_Fall.jpg",
    "/Ceiling_Lights.jpg",
    "/Cocktail_After_Work.jpg",
    "/Dog_running.jpg",
    "/End_Table_Lamp.jpg",
    "/Fashion_Week.jpg",
    "/Gather_Table_Setting.jpg",
    "/Give_Thanks.jpg",
    "/Guasha.jpg",
    "/Horse.jpg",
    "/Island.jpg",
    "/Jungle.jpg",
    "/Kitchen_Dining.jpg",
    "/Kitchen_Living_Room.jpg",
    "/Kitchen.jpg",
    "/Lake.jpg",
    "/Laughter.jpg",
    "/Lions.jpg",
    "/Living_room_lamp.jpg",
    "/Moutain_Village.jpg",
    "/Night_Bridge.jpg",
    "/Nightstand_lamp.jpg",
    "/Overhead_lamp.jpg",
    "/Palm_Trees.jpg",
    "/Papaya_Tree.jpg",
    "/Pensive.jpg",
    "/Power_stance.jpg",
    "/Pumpkin_Patch.jpg",
    "/Pumpkin.jpg",
    "/Questioning.jpg",
    "/Stress.jpg",
    "/Tea.jpg",
    "/Tourist.jpg",
    "/Van_Life.jpg"
  ]
;

export function formatImageUrl(url: string): string {
  let formattedUrl = url.startsWith('/') ? url.slice(1) : url;

  formattedUrl = formattedUrl.endsWith('.jpg') ? formattedUrl.slice(0, -4) : formattedUrl;

  return formattedUrl.split('_').join(' ');
}

function PinGrid() {
  const dispatch = useLoadingDispatch();

  useEffect(() => {
    // Signal that PinGrid is ready when the component mounts
    dispatch({type: SET_PIN_GRID_READY});
  }, [dispatch]);

  return (
    <div
      style={{
        columnWidth: '250px', // Maximum column width
        columnGap: '1rem',    // Gap between columns
      }}
      className="py-1 ml-10 mr-10"
    >
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
          <Pin
            imageURL={image}
            title={formatImageUrl(image)}
            link='https://www.pinterest.com/homefeed/'
          />
        </div>
      ))}
    </div>
  );
}

export default PinGrid;