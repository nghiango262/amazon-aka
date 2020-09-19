import React from "react";
import "./ServiceSection.css";
import ServiceItem from "./ServiceItem";

const servicesList = [
  {
    id: 0,
    name: "Track your packet",
    desc: "Theo dõi cái packet của bạn",
    image: (
      <img
        alt="Shop in 8 different languages"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
        class="product-image"
        height="200px"
        width="200px"
        data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
      ></img>
    ),
  },
  {
    id: 1,
    name: "Sẻvice 2",
    desc: "Theo dõi cái packet của bạn",
    image: (
      <img
        alt="Shop in 8 different languages"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
        class="product-image"
        height="200px"
        width="200px"
        data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
      ></img>
    ),
  },
  {
    id: 2,
    name: "Hỗ trợ và chăm sóc khách hàng ",
    desc: "Theo dõi cái packet của bạn",
    image: (
      <img
        alt="Shop in 8 different languages"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
        class="product-image"
        height="200px"
        width="200px"
        data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
      ></img>
    ),
  },
  {
    id: 3,
    name: "Bảo hành ",
    desc: "Theo dõi cái packet của bạn",
    image: (
      <img
        alt="Shop in 8 different languages"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
        class="product-image"
        height="200px"
        width="200px"
        data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
      ></img>
    ),
  },
  {
    id: 4,
    name: "Giải trí",
    desc: "Theo dõi cái packet của bạn",
    image: (
      <img
        alt="Shop in 8 different languages"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
        class="product-image"
        height="200px"
        width="200px"
        data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_2x._CB445837684_.png"
      ></img>
    ),
  },
];

function ServiceSection() {
  return (
    <div className="serviceSection">
      <h2 className="serviceSection__title">Discover KAKA</h2>
      <div className="serviceSection__option">
        {servicesList.map((service, index) => (
          <ServiceItem key={index} name={service.name} Icon={service.image} />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
