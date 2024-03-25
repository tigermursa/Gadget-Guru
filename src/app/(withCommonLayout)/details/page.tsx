import Image from "next/image";
import React from "react";

const ProductDetailsPage = () => {
  return (
    <div className="container border border-red-500 mx-auto">
      {/* firs part with images and titels */}
      <div className=" flex ">
        {/* image div */}

        <div className="flex justify-center items-center gap-3 border border-green-600 m-2 p-2">
          {/* 3 small images */}

          <div className="flex flex-col gap-10">
            <div className="border ">
              <Image
                src={
                  "https://image01.realme.net/general/20230402/1680441130452.png.webp"
                }
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="border ">
              <Image
                src={
                  "https://image01.realme.net/general/20230402/1680441130452.png.webp"
                }
                alt=""
                width={120}
                height={120}
              />
            </div>
            <div className="border ">
              <Image
                src={
                  "https://image01.realme.net/general/20230402/1680441130452.png.webp"
                }
                alt=""
                width={120}
                height={120}
              />
            </div>
          </div>
          {/* larger image */}
          <div className="border m-2">
            <div>
              <Image
                src={
                  "https://image01.realme.net/general/20230402/1680441130452.png.webp"
                }
                alt=""
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>

        {/* title div */}
        <div className="border">
          <h1>Phone name galaxy 453</h1>
        </div>
      </div>

      {/* description part */}
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe
          consequatur, facere, eum voluptates voluptas nisi eaque nam aspernatur
          minima ducimus repellat voluptate! Ab est excepturi autem ea, nemo
          labore. Nihil ducimus iure quaerat nesciunt! Qui modi ducimus atque
          mollitia?
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
