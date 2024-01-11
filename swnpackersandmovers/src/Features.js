import React from "react";
import { useState } from "react";

const Features = () => {
  const featuresImage = [
    {
      imageUrl: "onTimeDelivery.png",
      title: "On Time Delivery",
      quote:
        "Siwan Packers and Movers in Siwan packs your goods from your place and delivered to the destinations on time with full security.",
    },
    {
      imageUrl:
        "packing2.png",
      title: "Quality Packing Material",
      quote:
        "We always use good quality packing materials with the best fabric sheets and corrugated sheets, good quality sticky tapes, and cardboard boxes.",
    },
    {
      imageUrl:
        "affordable.png",
      title: "Affordable Pricing",
      quote:
        "We provide an affordable price. Our household shifting and packing services are most affordable and reliable that there is no hidden cost.",
    },
    {
      imageUrl:
        "support.png",
      title: "24/7 Support",
      quote:
        "Our process of ensuring customer satisfaction is way better than others. We are always ready to help you at any time, anywhere.",
    },
    // Add more slides with image URLs and quotes
  ];

  return (
    <div className="features-container">
      {featuresImage.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.imageUrl} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.quote}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
