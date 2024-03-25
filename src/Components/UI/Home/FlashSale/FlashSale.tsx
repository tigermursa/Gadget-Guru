import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosFlash } from "react-icons/io";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/phone/get");
  const data = await res.json();
  return (
    <div className=" mb-20 mt-20">
      {/* TITLE */}
      <div className="flex justify-between ms-28 me-28 mb-10 ">
        <h1 className="font-semibold text-2xl flex">
          Flash Sale <IoIosFlash className="text-secondary" />
        </h1>
        <Link href={"/flash-sale"}>
          <Button variant="ghost" color="primary" className="">
            View All
          </Button>
        </Link>
      </div>
      {/* cards first row only */}
      <div className="flex justify-center cursor-pointer  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data?.data?.slice(0, 4).map((phone: any, index: number) => (
            <div key={index} className="relative">
              <Card className="py-3 max-w-[350px] rounded-sm">
                <CardBody className="overflow-visible py-0">
                  <Image
                    alt={phone.name}
                    className="object-cover rounded-sm transition-transform duration-300 hover:scale-105"
                    src={phone.image}
                    width={270}
                    height={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">{phone.name}</h4>
                  <p className="text-small uppercase font-bold text-red-600">
                    {phone.priceV1} / {phone.ramV1}
                  </p>
                  <p className="text-small uppercase font-bold text-red-600">
                    {phone.priceV2} / {phone.ramV2}
                  </p>
                </CardHeader>
              </Card>
              {/* Notification badge */}
              {phone.tag && (
                <div
                  className={`bg-${
                    phone.tag === "new" ? "primary" : "secondary"
                  } text-white w-30 h-6 p-2 flex items-center justify-center rounded-full absolute -top-2 -right-2 text-xs z-40`}
                >
                  {phone.tag} OFF
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* card 2nd row  */}
      <div className="flex justify-center  mt-10 cursor-pointer ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10">
          {data?.data?.slice(5, 7).map((phone: any, index: any) => (
            <div key={index} className="relative">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none min-w-[600px] min-h-[300px] flex justify-center items-center "
              >
                <div className=" flex justify-center items-center">
                  <div>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-2xl">{phone.name}</h4>
                      <p className="text-small uppercase font-bold text-red-600">
                        {phone.priceV1} / {phone.ramV1}
                      </p>
                      <p className="text-small uppercase font-bold text-red-600">
                        {phone.priceV2} / {phone.ramV2}
                      </p>
                    </CardHeader>
                  </div>
                  <div>
                    <Image
                      alt="Woman listing to music"
                      className="object-cover transition-transform duration-300 hover:scale-105 "
                      height={280}
                      src={phone.image}
                      width={280}
                    />
                  </div>
                </div>
              </Card>
              {/* Notification badge */}
              {phone.tag && (
                <div
                  className={`bg-${
                    phone.tag === "new" ? "primary" : "secondary"
                  } text-white w-30 h-6 p-2 flex items-center justify-center rounded-full absolute -top-2 -right-2 text-xs z-40`}
                >
                  {phone.tag} OFF
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
