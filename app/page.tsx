"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {signIn} from "next-auth/react";

function PublicHome() {
  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/home" })
    } catch (e) {
      console.error("Error signing in", e);
    }
  }

  return (
    <main className="container mx-auto px-4 pt-12 pb-20 md:pt-24 md:pb-32 text-center max-w-3xl">
      <div className="flex flex-col items-center gap-10">
        <Image
          className="my-4"
          src="/pinterest-logo-large.png"
          alt="pinterest-logo"
          width={300}
          height={300}
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Search for an idea
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Think of something you&#39;re into and discover new ideas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
          <Button
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-lg py-6"
            onClick={handleSignIn}
          >
            Log In
          </Button>
        </div>
      </div>
    </main>
  );
}

export default PublicHome;