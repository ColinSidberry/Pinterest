"use client"
import React from 'react';
import Pin from "@/app/components/Main/PinGrid/Pin";
import PinGrid from "@/app/components/Main/PinGrid/PinGrid";

const pins = [
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
  {
    title:"Colin!",
    imageURL: 'https://images.unsplash.com/photo-1727175078650-7cb1a883280d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link:"",
  },
]

function Page() {
  return (
    <div
      style={{backgroundImage: `url(${pins[0].imageURL})`}}
      // className="w-full h-full bg-cover bg-center rounded-xl"
      className="w-full h-64 bg-cover bg-center rounded-xl"
      aria-label={pins[0].title}>
    </div>
  // <div>
  //   {/*<Pin imageURL={pin.imageURL} title={pin.title} link={pin.link} />*/}
  //   {/*<PinGrid pins={pins}/>*/}
  //   <PinGrid/>
  // </div>
)
  ;
}

export default Page;