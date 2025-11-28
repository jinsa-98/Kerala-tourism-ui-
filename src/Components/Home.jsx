import React, { useRef, useState } from "react";
import image1 from "../assets/Images/pic3.jpg";
import Slider from "react-slick";
import { categoryImages } from "../data/categoryImages";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const carouselRef = useRef(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);

    setTimeout(() => {
      carouselRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full relative">

      {/* Hero Background */}
      <div className="h-screen w-full relative">
        <img
          src={image1}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Kerala Nature"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
            GOD'S OWN COUNTRY
          </h2>

          <h1 className="text-6xl md:text-8xl font-extrabold mt-2">
            KERALA AWAITS
          </h1>

          <button
            className="
              mt-6 px-8 py-3
              bg-gradient-to-r from-[#FFF5D6] to-[#F3E7C9]
              text-green-800 font-semibold text-lg
              rounded-full
              shadow-[0_6px_18px_rgba(255,245,214,0.5)]
              hover:shadow-[0_8px_22px_rgba(255,245,214,0.7)]
              hover:translate-y-[-2px]
              active:scale-95
              transition-all duration-300
            "
          >
            Explore Kerala
          </button>
        </div>
      </div>

      {/* Scroll Down Section */}
      <div className="w-full bg-white pt-24 pb-16 rounded-t-[40px] -mt-20 relative z-20">
        <h2 className="text-center text-4xl font-bold text-gray-800">
          Places to Visit
        </h2>

        {/* Category Buttons */}
        <div className="flex gap-4 flex-wrap justify-center mt-8">
          {[
            "Beaches",
            "Hill Stations",
            "Backwaters",
            "Wildlife",
            "Culture",
            "City Tourism",
            "Waterfalls",
            "Adventure",
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleCategoryClick(item)}
              className={`px-6 py-2 rounded-full text-gray-700 transition
                ${
                  selectedCategory === item
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 hover:bg-green-600 hover:text-white"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CATEGORY CAROUSEL */}
        {selectedCategory && (
          <div ref={carouselRef} className="mt-16 px-10">
            {/* <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {selectedCategory}
            </h3> */}

            <Slider {...sliderSettings}>
              {categoryImages[selectedCategory]?.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="rounded-3xl overflow-hidden shadow-lg relative group">

                  <img
                    src={item.img}
                    className="w-full h-[320px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
                    alt={item.title}
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 text-white p-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
