"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { HiSearch, HiMenu } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react"
import { doc, getFirestore, setDoc } from "@firebase/firestore";
import { app } from './../Shared/firebaseConfig'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const db = getFirestore(app);
  const pathname = usePathname();

  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" })
    } catch (e) {
      console.error("Error signing in", e);
    }
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  }

  const LINKEDIN = 'https://www.linkedin.com/in/colin-sidberry/';
  const MEDIUM = 'https://medium.com/@colinsidberry';
  const handleMenuClick = async (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const saveUserInfo = async () => {
      if (session?.user?.email) {
        try {
          await setDoc(doc(db, "users", session.user.email), {
            email: session.user.email,
          });
          console.log("User information saved successfully!");
        } catch (error) {
          console.error("Error saving user information:", error);
        }
      } else {
        console.log('User email is missing or session not available');
      }
    };

    saveUserInfo();
  }, [session, db]);

  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image src={'/pinterest-logo.png'} alt={'logo'} width={50} height={50}
             className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"/>
      <Link href="/" passHref>
        <button className={`font-semibold p-2 px-4 rounded-full ${pathname === '/' ? 'bg-black text-white' : ''}`}>Home</button>
      </Link>
      <button className='font-semibold p-2 px-4 rounded-full'>Create</button>

      {status === "authenticated" ? (
        <button
          className='font-semibold p-2 px-4 rounded-full whitespace-nowrap'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className='font-semibold p-2 px-4 rounded-full whitespace-nowrap'
          onClick={handleSignIn}
        >
          Sign In
        </button>
      )}

      <div className={'bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'}>
        <HiSearch className='text-[25px] text-gray-500'/>
        <input className='bg-transparent outline-none' type="text" placeholder='Search'/>
      </div>
      <HiSearch className='text-[25px] text-gray-500 md:hidden'/>

      <div className="relative md:hidden">
        <HiMenu
          className='text-[25px] text-gray-500 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
            <Link href="/legal" passHref>
              <button
                className={`block px-4 py-2 text-sm font-bold w-full text-left ${
                  pathname === '/legal' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Legal
              </button>
            </Link>
            <button
              className='block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 w-full text-left'
              onClick={() => handleMenuClick(LINKEDIN)}
            >
              About
            </button>
            <button
              className='block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 w-full text-left'
              onClick={() => handleMenuClick(MEDIUM)}
            >
              Blog
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:flex ml-2">
        <Link href="/legal" passHref>
          <button className={`font-semibold p-2 px-4 rounded-full ${pathname === '/legal' ? 'bg-black text-white' : ''}`}>
            Legal
          </button>
        </Link>
        <button
          className='font-semibold p-2 px-4 rounded-full'
          onClick={() => handleMenuClick(LINKEDIN)}
        >
          About
        </button>
        <button
          className='font-semibold p-2 px-4 rounded-full'
          onClick={() => handleMenuClick(MEDIUM)}
        >
          Blog
        </button>
      </div>
    </div>
  );
}

export default Header;