"use client"
import React, {useState, useEffect} from 'react';
import {HiSearch, HiMenu} from "react-icons/hi";
import {useSession, signIn, signOut} from "next-auth/react"
import {doc, getFirestore, setDoc} from "@firebase/firestore";
import {app} from './Shared/firebaseConfig'
import Link from 'next/link';
import {usePathname} from 'next/navigation';

function Header() {
  const {data: session, status} = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const db = getFirestore(app);
  const pathname = usePathname();

  const handleSignIn = async () => {
    try {
      await signIn("google", {callbackUrl: "/home"})
    } catch (e) {
      console.error("Error signing in", e);
    }
  }

  const handleSignOut = async () => {
    await signOut({callbackUrl: "/"});
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
      <svg
        width="50"
        height="50"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="min-w-[50px]"
        aria-label="Pinterest"
      >
        <g fillRule="nonzero">
          <path d="m90 45c0 24.853-20.147 45-45 45-24.852 0-45-20.147-45-45s20.148-45 45-45c24.853 0 45 20.147 45 45"
                fill="#e60023"/>
          <path
            d="m45 0c-24.852 0-45 20.147-45 45 0 19.064 11.861 35.362 28.601 41.918-.393-3.56-.749-9.036.156-12.923.818-3.512 5.277-22.367 5.277-22.367s-1.346-2.696-1.346-6.682c0-6.257 3.627-10.928 8.142-10.928 3.84 0 5.694 2.882 5.694 6.339 0 3.861-2.458 9.633-3.727 14.983-1.06 4.478 2.246 8.131 6.664 8.131 7.998 0 14.146-8.433 14.146-20.606 0-10.775-7.742-18.308-18.797-18.308-12.804 0-20.319 9.604-20.319 19.529 0 3.867 1.49 8.014 3.349 10.269.367.446.421.836.312 1.291-.342 1.421-1.101 4.478-1.25 5.103-.196.824-.652.999-1.505.602-5.62-2.616-9.134-10.833-9.134-17.433 0-14.195 10.314-27.232 29.733-27.232 15.611 0 27.742 11.124 27.742 25.99 0 15.509-9.779 27.99-23.351 27.99-4.56 0-8.847-2.369-10.314-5.167 0 0-2.257 8.592-2.804 10.697-1.016 3.909-3.758 8.808-5.593 11.797 4.211 1.304 8.685 2.007 13.324 2.007 24.853 0 45.001-20.147 45.001-45s-20.148-45-45.001-45"
            fill="#fff"/>
        </g>
      </svg>

      {status === "authenticated" ? (
        <>
          <Link href="/home" passHref>
            <button
              className={`font-semibold p-2 px-4 rounded-full ${pathname === '/home' ? 'bg-black text-white' : ''}`}>Home
            </button>
          </Link>
          <button className='font-semibold p-2 px-4 rounded-full'>Create</button>
          <button
            className='font-semibold p-2 px-4 rounded-full whitespace-nowrap'
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
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
          <button
            className={`font-semibold p-2 px-4 rounded-full ${pathname === '/legal' ? 'bg-black text-white' : ''}`}>
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