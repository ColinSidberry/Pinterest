"use client"
import React from 'react';
import {LoadingProvider} from '@/app/contexts/LoadingContext';
import Main from "@/app/components/Main/Main";

const Home: React.FC = () => {
  return (
    <LoadingProvider>
      <Main/>
    </LoadingProvider>
  );
};

export default Home;