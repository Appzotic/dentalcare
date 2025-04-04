"use client";
import React from "react";
import Image from "next/image";

const ServiceItems = ({item:{img,title,desc}}) => {
  return (
    <div className="text-center bg-white p-5 rounded">
      <Image src={img} className="mx-auto h-10" alt={title} />
      <h3 className="text-xl font-medium leading-10 text-black py-2">
        {title}
      </h3>
      <p className="leading-8 text-light-color">{desc}</p>
    </div>
  );
};

export default ServiceItems;
