// "use client"
// import React from 'react';
// import Image from 'next/image';

// export const Loading: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full">
//       <Image
//         src={'/pinterest-logo2.png'}
//         alt="Loading..."
//         className="animate-pulse transform scale-90 hover:scale-100 transition duration-500 ease-in-out"
//         width={100}
//         height={100}
//       />
//     </div>
//   );
// };

"use client"
import React from 'react';
import Image from 'next/image';
import styles from './Loading.module.css';

export const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Image
        src={'/pinterest-logo2.png'}
        alt="Loading..."
        className={`${styles.heartbeat} transform scale-90 hover:scale-100 transition duration-500 ease-in-out`}
        // className="animate-pulse transform scale-90 hover:scale-100 transition duration-500 ease-in-out"
        width={100}
        height={100}
      />
    </div>
  );
};