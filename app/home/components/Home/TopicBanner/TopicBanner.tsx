"use client"
import React, { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import TopicCard from '@/app/home/components/Home/TopicBanner/TopicCard/TopicCard';
import { Pin } from '@/app/home/components/Home/TopicBanner/TopicCard/FannedPins/FanPin/FanPin';

const topics = [
  'TV room', 'The Pierce', "Mommy's room",
  'Organization Ideas', 'Kitchen', 'Bathroom Ideas'
];

const pins: Pin[] = [
  {
    id: 1,
    imageURL: '/Black_Joy.jpg',
    title:"Black Joy",
    description: 'Beautiful minimalist desk setup with a MacBook and houseplants.',
    userId: 'user_123',
    boards: ['workspace_inspiration', 'minimalism'],
    topics: ['workspace', 'design', 'plants'],
    repinnedFrom: 'user_789',
  },
  {
    id: 2,
    imageURL: '/Dog_running.jpg',
    title:"Dog running",
    description: 'Delicious homemade chocolate chip cookies fresh from the oven.',
    userId: 'user_456',
    boards: ['baking', 'desserts'],
    topics: ['food', 'cookies', 'chocolate'],
    repinnedFrom: 'user_321',
  },
  {
    id: 3,
    imageURL: '/Lake.jpg',
    title:"Lake",
    description: 'Cozy living room with warm lighting and comfortable furniture.',
    userId: 'user_789',
    boards: ['interior_design', 'cozy_spaces'],
    topics: ['home', 'interior', 'lighting'],
    repinnedFrom: 'user_123',
  },
];

const TopicBanner = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);
  // const [topics, setTopics] = useState<{ topic: string; pins: Pin[] }[]>([]);
  // const dispatch = useLoadingDispatch();

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollContainerRef;

    if (current) {
      const { scrollWidth, clientWidth, scrollLeft } = current;
      let scrollAmount = direction === 'left' ? -295 : 295;
      const maxScrollLeft = scrollWidth - clientWidth;

      if (direction === 'right' && scrollLeft + scrollAmount > maxScrollLeft) {
        scrollAmount = maxScrollLeft - scrollLeft;
      }

      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    const { current } = scrollContainerRef;
    if (current) {
      const { scrollWidth, clientWidth, scrollLeft } = current;
      const maxScrollLeft = scrollWidth - clientWidth;
      const BUFFER = 5;

      const isLeftChevronVisible = scrollLeft > BUFFER;
      const isRightChevronVisible = scrollLeft < maxScrollLeft - BUFFER;

      setShowLeftChevron(isLeftChevronVisible);
      setShowRightChevron(isRightChevronVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      checkScrollPosition();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { current } = scrollContainerRef;
    if (current) {
      current.addEventListener('scroll', checkScrollPosition);
      return () => current.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  // useEffect(() => {
  //   // Simulating fetching topics and pins
  //   const fetchedTopics = [
  //     // Add your topic and pin data here
  //   ];
  //   setTopics(fetchedTopics);
  // }, []);
 
  // useEffect(() => {
  //   // Simulating fetching topics and pins
  //   const fetchedTopics = [
  //     // Add your topic and pin data here
  //   ];
  //   setTopics(fetchedTopics);
  //   dispatch({ type: SET_TOTAL_TOPICS, payload: fetchedTopics.length });
  // }, [dispatch]);

  // useEffect(() => {
  //   if (colorExtractionCount === topics.length && topics.length > 0) {
  //     dispatch({ type: 'SET_COLOR_EXTRACTION_READY' });
  //   }
  // }, [colorExtractionCount, topics.length, dispatch]);

  return (
    <div className="relative w-full py-4 bg-white">
      {showLeftChevron && (
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/60 to-transparent z-20">
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-30"
            onClick={() => scroll('left')}
          >
            <HiChevronLeft className="h-6 w-6 text-gray-500"/>
          </button>
        </div>
      )}

      <div
        ref={scrollContainerRef}
        className={`flex space-x-4 overflow-x-auto transition-all duration-300 ease-in-out ${
          `
            ${showLeftChevron ? 'pl-0' : 'pl-10'}
            ${'pr-10'}
          `
        }`}
        style={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {topics.map((topic, index) => (
          <div key={index} className="flex-shrink-0" style={{width: '295px'}}>
            <TopicCard topic={topic} pins={pins} />
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {showRightChevron && (
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/60 to-transparent z-20">
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-30"
            onClick={() => scroll('right')}
          >
            <HiChevronRight className="h-6 w-6 text-gray-500"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default TopicBanner;