import { Checkbox } from "@nextui-org/react";
import React from "react";

const ProductSidebar = () => {
  return (
    <aside className="border lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <div>
        {/* Price Range  */}
        <div className="border flex flex-col justify-center items-center p-5 mb-5">
          <div className="">
            <h3 className="text-xl font-bold mb-5">Price Range</h3>
          </div>
          <div className=" flex flex-col gap-4 text-lg font-semibold">
            <div>
              <Checkbox>$-10,000 to $-15,000</Checkbox>
            </div>
            <div>
              <Checkbox>$-15,000 to $-20,000</Checkbox>
            </div>
            <div>
              <Checkbox>$-25,000 to $-30,000</Checkbox>
            </div>
            <div>
              <Checkbox>$-35,000 to $-40,000</Checkbox>
            </div>
          </div>
        </div>
        <div className="border flex flex-col justify-center items-center p-5 mb-5 mb-5">
          <div className="">
            <h3 className="text-xl font-bold mb-5">Brands</h3>
          </div>
          <div className=" flex flex-col gap-4 text-lg font-semibold">
            <div>
              <Checkbox>Apple</Checkbox>
            </div>
            <div>
              <Checkbox>Samsung</Checkbox>
            </div>
            <div>
              <Checkbox>Realme</Checkbox>
            </div>
            <div>
              <Checkbox>Infinix</Checkbox>
            </div>
          </div>
        </div>
        <div className="border flex flex-col justify-center items-center p-5 mb-5">
          <div className="">
            <h3 className="text-xl font-bold mb-5">Ratings</h3>
          </div>
          <div className=" flex flex-col gap-4 text-lg font-semibold">
            <div>
              <Checkbox>1-Star</Checkbox>
            </div>
            <div>
              <Checkbox>2-Star</Checkbox>
            </div>
            <div>
              <Checkbox>3-Star</Checkbox>
            </div>
            <div>
              <Checkbox>4-Star</Checkbox>
            </div>
            <div>
              <Checkbox>5-Star</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
