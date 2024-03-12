import React from "react";
import axios from "axios";
import BTN from "../../../components/Check_price_btn/BTN";

async function getdata() {
  let data = await axios
    .get("https://fakestoreapi.com/products?limit=5")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return data;
}

const page = async () => {
  const products = await getdata();
  // console.log(products)
  return (
    <>
      <h1>Server data</h1>
      {products.map((v, index) => {
        return (
          <>
            <div key={index}>
              <h2>{v?.title}</h2>
              <img width={100} height={100} src={v?.image} alt="" />
               <BTN price={v?.price} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default page;
