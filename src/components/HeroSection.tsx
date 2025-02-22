"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/(app)/contexts/LanguageContext";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language, translations } = useLanguage();

  // Array of image objects with src and alt text
  const images = [
    {
      src: "/asthetic-photos/HighTEch.webp",
      alt: "Bangabandhu Hi-Tech Park",
    },
    {
      src: "/asthetic-photos/Kaliakoir_Pic1.webp",
      alt: "Wow! Kaliakoir",
    },
    {
      src: "/asthetic-photos/Kaliakoir_rail.webp",
      alt: "Kaliakoir Rail",
    },
    {
      src: "/asthetic-photos/Mokhosh_swamp2.webp",
      alt: "Mokhosh swamp",
    },
    {
      src: "/asthetic-photos/ShreefaltaliCourtOfEstate.webp",
      alt: "Shreefaltali Court Of Estate",
    },
  ];

  useEffect(() => {
    // Set a random image on initial load
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomIndex);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-8">
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default HeroSection;
