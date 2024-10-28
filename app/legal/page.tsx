import React from 'react';
import Link from 'next/link';

export default function Legal() {
  const legalContent = [
    {
      title: "Legal Disclaimer",
      content: `This project was developed independently for educational purposes and is not affiliated with, endorsed by, or connected to [Pinterest, Inc.] in any way. The use of any similar functionality, interface, or design elements is solely intended for learning and demonstration purposes.

This project is licensed under the MIT License. This means that you are free to use, modify, and distribute this code as long as the original author is credited, without implying any endorsement by Pinterest or other entities.`
    },
    {
      title: "Educational Purpose Only",
      content: `This project was developed independently and is solely for educational purposes. It is not affiliated with, endorsed by, or associated with [Pinterest, Inc.] in any way. The use of any similar functionality, interface, or design elements is intended for learning and demonstration only, and does not imply any endorsement by Pinterest or other entities.`
    },
    {
      title: "MIT License",
      content: `This project is licensed under the MIT License, allowing free use, modification, and distribution of the code, provided credit is given to the original author. This license is for the code itself and does not cover any third-party content, images, or trademarks used in this project.`
    },
    {
      title: "No Liability",
      content: `The author(s) of this project assume no responsibility or liability for any damages or legal issues arising from the use, distribution, or modification of this code. By accessing or using this project, you agree to hold the author(s) harmless from any claims or losses resulting from such use.`
    },
    {
      title: "Trademark Disclaimer",
      content: `All trademarks, logos, and brand names are the property of their respective owners. All company, product, and service names used in this project are for identification purposes only. Use of these names, trademarks, and brands does not imply endorsement.`
    },
    {
      title: "No Commercial Use",
      content: `This project is not intended for commercial use or distribution. Any attempt to monetize or use this project for profit may infringe on third-party rights.`
    }
  ];

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4">
        {paragraph.split('[Pinterest, Inc.]').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Pinterest, Inc.
              </a>
            )}
          </React.Fragment>
        ))}
      </p>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Legal Disclaimer</h1>

      <div className="space-y-6">
        {legalContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mt-6 mb-4">{section.title}</h2>
            {renderContent(section.content)}
          </div>
        ))}
      </div>

      <p className="mt-6">
        For reference, the official Pinterest website can be found at{' '}
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://www.pinterest.com
        </a>.
      </p>

      <Link
        href="/"
        className="inline-block mt-8 px-6 py-2 bg-[#E60023] text-white rounded-full hover:bg-[#AD081B] transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}