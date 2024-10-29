"use client"
import React, { useState, useEffect, useMemo } from 'react';
import TopicBanner from "@/app/components/Main/TopicBanner/TopicBanner";
import PinGrid from "@/app/components/Main/PinGrid/PinGrid";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentOpacity, setContentOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start fading in the content
      setTimeout(() => setContentOpacity(1), 50);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const MemoizedTopicBanner = useMemo(() => React.memo(TopicBanner), []);
  const MemoizedPinGrid = useMemo(() => React.memo(PinGrid), []);

  return (
    <div className="relative min-h-screen">
      {/*{isLoading && (*/}
      {/*  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">*/}
      {/*    <Loading />*/}
      {/*  </div>*/}
      {/*)}*/}
      <div
        className="relative z-10"
        style={{
          opacity: contentOpacity,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: isLoading ? 'none' : 'auto',
        }}
      >
        <MemoizedTopicBanner />
        <MemoizedPinGrid />
      </div>
    </div>
  );
}

export default Main;