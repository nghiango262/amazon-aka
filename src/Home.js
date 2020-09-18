import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://rcp.scsstatic.ch/content/dam/swisscom/de/biz/wholesale/allgemein/amazonprime_banner.jpg.scsimg.1680x600.ts1581499418916.jpg/amazonprime_banner.jpg"
        alt=""
      />

      {/* product on Row  1*/}
      <div className="home__row">
        {/* Product id */}
        <Product
          id="idfjhiej83488"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          image="https://images-na.ssl-images-amazon.com/images/I/41+e3refnZL.jpg"
          price={2342.5}
          rating={5}
        />

        {/* Product id */}
        <Product
          id="idfjhiej83488"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={2342.5}
          rating={5}
        />
      </div>
      {/* product on Row  2*/}
      <div className="home__row">
        {/* Product id */}
        <Product
          id="idfjhiej83488"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={2342.5}
          rating={5}
        />

        {/* Product id */}
        <Product
          id="8845j300gkk00"
          title="Điện Thoại iPhone 11 128GB - Hàng Chính Hãng"
          image="https://cf.shopee.vn/file/2a9cffca679e7e264d551d8aa3cc2ada"
          price={28600000}
          rating={5}
        />

        {/* Product id */}
        <Product
          id="idfjhiej83488"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={2342.5}
          rating={5}
        />
      </div>

      {/* product on Row  3*/}
      <div className="home__row">
        {/* Product id */}
        <Product
          id="idfjhiej83488"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={2342.5}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
