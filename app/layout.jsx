import React from "react";
import '@/assests/styles/global.css';
export const metadata = {
    title: 'Property Pulse | Find Your Dream Home',
    description: 'Find your perfect home with Property Pulse - your trusted real estate partner.',
    keywords: 'real estate, property listings, homes for sale, apartments for rent, real estate agent',
};

const Mainlayout = ({children}) => {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
};

export default Mainlayout;
