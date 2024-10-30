"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
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
        <div className="w-full max-w-[450px]">
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
               viewBox="0 0 560 90" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero">
              <g fill="#e60023">
                <path d="m239.976 32.131h11.919v37.438h-11.919z"/>
                <path
                  d="m254.383 32.131h11.481v5.119h.219c2.778-4.022 6.361-6.216 11.553-6.216 8.19 0 13.016 5.85 13.016 14.186v24.349h-11.919v-21.936c0-3.949-1.974-6.655-5.85-6.655-3.948 0-6.581 3.291-6.581 7.898v20.693h-11.919z"/>
                <path
                  d="m253.084 22.115c0-3.949-3.201-7.15-7.149-7.15-3.949 0-7.15 3.201-7.15 7.15 0 3.948 3.201 7.149 7.15 7.149 3.948 0 7.149-3.201 7.149-7.149"/>
                <path
                  d="m374.479 31.59c-.34-.03-.73-.044-1.186-.044-4.534 0-7.605 1.974-10.237 6.435h-.22v-5.85h-11.407v37.438h11.919v-16.818c0-7.792 4.316-11.403 11.131-10.773z"/>
                <path
                  d="m432.969 45.951c-4.753-.878-8.994-1.243-8.994-3.875 0-2.341 2.267-3.437 5.192-3.437 3.29 0 5.557 1.023 5.996 4.387h10.969c-.586-7.385-6.289-11.992-16.891-11.992-8.849 0-16.161 4.095-16.161 11.992 0 8.774 6.947 10.529 13.455 11.626 4.972.878 9.506 1.244 9.506 4.607 0 2.413-2.267 3.729-5.85 3.729-3.595 0-5.972-1.521-6.701-4.606h-11.357c.835 7.696 7.591 12.357 18.131 12.357 9.798 0 17.037-4.241 17.037-12.43 0-9.58-7.751-11.261-14.332-12.358"/>
                <path
                  d="m392.968 39.516c3.876 0 6.654 2.852 7.093 7.313h-14.771c.805-4.461 3.145-7.313 7.678-7.313m.658 22.594c-4.899 0-7.678-3.143-8.409-8.189h26.909c.073-7.604-2.12-14.112-6.581-18.207-3.217-2.925-7.458-4.68-12.797-4.68-11.406 0-19.23 8.555-19.23 19.743 0 11.333 7.604 19.889 19.962 19.889 4.752 0 8.555-1.243 11.699-3.437 3.291-2.266 5.485-5.484 6.289-8.847h-11.627c-1.024 2.34-3.07 3.728-6.215 3.728"/>
                <path
                  d="m468.293 60.741c-.552.022-1.294.054-1.975.054-2.56 0-4.168-.732-4.168-3.656v-17.55h6.143v-7.458h-6.143v-11.846h-11.627v11.846h-3.658v7.458h3.658v20.109c0 8.044 4.973 10.31 11.919 10.31 2.651 0 4.654-.199 5.851-.432z"/>
                <path
                  d="m311.937 60.758c-.476.018-1.025.037-1.537.037-2.559 0-4.168-.732-4.168-3.656v-17.55h5.705v-7.458h-5.705v-11.846h-11.627v11.846h-3.876v7.458h3.876v20.109c0 8.044 4.973 10.31 11.919 10.31 2.351 0 4.191-.157 5.413-.355z"/>
                <path
                  d="m337.898 46.829c-.438-4.461-3.217-7.313-7.093-7.313-4.533 0-6.873 2.852-7.678 7.313zm-26.543 3.948c0-11.188 7.824-19.743 19.231-19.743 5.338 0 9.579 1.755 12.796 4.68 4.461 4.095 6.654 10.603 6.581 18.207h-26.908c.73 5.045 3.509 8.19 8.409 8.19 3.143 0 5.191-1.389 6.214-3.729h11.627c-.805 3.363-2.998 6.581-6.289 8.848-3.144 2.193-6.946 3.436-11.699 3.436-12.358 0-19.962-8.555-19.962-19.889"/>
                <path
                  d="m219.277 41.856c4.68 0 7.312-2.778 7.312-6.947 0-4.167-2.706-6.727-7.312-6.727h-9.141v13.674zm-21.208-24.569h20.698c6.361 0 11.041 1.755 14.258 4.826 3.364 3.144 5.265 7.605 5.265 12.87 0 10.017-6.946 17.11-17.695 17.11h-10.459v17.476h-12.067z"/>
              </g>
              <path
                d="m181.707 45c0 24.853-20.147 45-45 45-24.852 0-45-20.147-45-45s20.148-45 45-45c24.853 0 45 20.147 45 45"
                fill="#fff"/>
              <path
                d="m136.707 0c-24.852 0-45 20.147-45 45 0 19.064 11.861 35.362 28.601 41.918-.393-3.56-.749-9.036.156-12.923.818-3.512 5.277-22.367 5.277-22.367s-1.346-2.696-1.346-6.682c0-6.257 3.627-10.928 8.142-10.928 3.84 0 5.694 2.882 5.694 6.339 0 3.861-2.458 9.633-3.727 14.983-1.06 4.478 2.246 8.131 6.664 8.131 7.998 0 14.146-8.433 14.146-20.606 0-10.775-7.742-18.308-18.797-18.308-12.804 0-20.319 9.604-20.319 19.529 0 3.867 1.49 8.014 3.349 10.269.367.446.421.836.312 1.291-.342 1.421-1.101 4.478-1.25 5.103-.196.824-.652.999-1.505.602-5.62-2.616-9.134-10.833-9.134-17.433 0-14.195 10.314-27.232 29.733-27.232 15.611 0 27.742 11.124 27.742 25.99 0 15.509-9.779 27.99-23.351 27.99-4.56 0-8.847-2.369-10.314-5.167 0 0-2.257 8.592-2.804 10.697-1.016 3.909-3.758 8.808-5.593 11.797 4.211 1.304 8.685 2.007 13.324 2.007 24.853 0 45.001-20.147 45.001-45s-20.148-45-45.001-45"
                fill="#e60023"/>
            </g>
          </svg>
        </div>
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