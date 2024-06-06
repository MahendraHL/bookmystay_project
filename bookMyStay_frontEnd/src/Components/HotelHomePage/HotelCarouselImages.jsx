import React from 'react';
import HotelCarousel from './HotelCarousel';
import Image1 from '../Assets/images/mysorehotels/emerald/Image1.jpg'
import Image2 from '../Assets/images/mysorehotels/emerald/Image2.jpg'
import Image3 from '../Assets/images/mysorehotels/emerald/Image3.jpg'
import Image4 from '../Assets/images/mysorehotels/emerald/Image4.jpg'
import Image5 from '../Assets/images/mysorehotels/emerald/Image5.jpg'
import Image6 from '../Assets/images/mysorehotels/emerald/Image6.jpg'
import Image7 from '../Assets/images/mysorehotels/emerald/Image7.jpg'
import Image8 from '../Assets/images/mysorehotels/emerald/Image8.jpg'
import Image9 from '../Assets/images/mysorehotels/emerald/Image9.jpg'

function HotelCarouselImages() {
  const images = [
    [Image1, Image2, Image3],
    [Image4, Image5, Image6],
    [Image7, Image8, Image9]
  ];

  return (
    <div>
      <HotelCarousel images={images} />
    </div>
  );
}

export default HotelCarouselImages;
