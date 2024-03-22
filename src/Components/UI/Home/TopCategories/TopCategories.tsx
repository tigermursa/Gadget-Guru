import { Button } from "@nextui-org/react";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-semibold text-2xl ">Top Categories</h1>
        <p className="font-semibold text-sm text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fugit
          <br />
          facere iusto quasi harum quia sint similique, voluptatem minima quas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 justify-center mt-10 mb-10  mx-auto items-center">
        <div className="bg-red-100 max-w-[350px] m-h-[400px] flex justify-center items-center rounded-md overflow-hidden cursor-pointer relative">
          <Image
            src={
              "https://d3fyizz0b46qgr.cloudfront.net/global/phones/8798624fe219327d7fc28a8de79a92c5.png"
            }
            alt=""
            width={500}
            height={500}
            className="transition-transform duration-300 hover:scale-105 p-5"
          />
          <div className=" flex items-center justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-lg text-white bg-black bg-opacity-20 ps-2 pe-2 rounded-lg">
              Flagship phone
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <div className="bg-red-100 w-[350px] h-[170px] flex justify-center items-center rounded-md overflow-hidden cursor-pointer relative">
            <Image
              src={
                "https://image01.realme.net/general/20220425/1650870921068.png.webp"
              }
              alt=""
              width={150}
              height={150}
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className=" flex items-center justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-lg text-white bg-black bg-opacity-20 ps-2 pe-2 rounded-lg">
                Accessories
              </p>
            </div>
          </div>
          <div className="bg-red-100 w-[350px] h-[170px] flex justify-center items-center rounded-md overflow-hidden cursor-pointer relative">
            <Image
              src={
                "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova/2.png"
              }
              alt=""
              width={150}
              height={150}
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className=" flex items-center justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-lg text-white bg-black bg-opacity-20 ps-2 pe-2 rounded-lg">
                Budget Phones
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-100 max-w-[350px] m-h-[400px] flex justify-center items-center rounded-md overflow-hidden cursor-pointer relative">
          <Image
            src={
              "https://d3fyizz0b46qgr.cloudfront.net/global/phones/pova4pro/black.png"
            }
            alt=""
            width={500}
            height={500}
            className="transition-transform duration-300 hover:scale-105 p-5"
          />
          <div className=" flex items-center justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-lg text-white bg-black bg-opacity-20 ps-2 pe-2 rounded-lg">
              Gaming Phones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
