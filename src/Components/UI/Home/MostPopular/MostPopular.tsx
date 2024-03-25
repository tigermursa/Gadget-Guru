
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const MostPopular = async () => {
  const res = await fetch("http://localhost:5000/api/v1/phone/get");
  const data = await res.json();
  return (
    <div>
      <div className="flex justify-between ms-28 me-28 mb-10 ">
        <div>
          <h1 className="font-semibold text-2xl">Most Popular Products</h1>
          <p className="font-semibold text-sm text-gray-500 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            fugit
            <br />
            facere iusto quasi harum quia sint similique, voluptatem minima
            quas.
          </p>
        </div>
        <Link href={"/products"}>
          <Button variant="ghost" color="primary" className="">
            View All
          </Button>
        </Link>
      </div>
      {/* cards 2nd row only */}
      <div className="flex justify-center mt-10  ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-2 md:m-0">
          {data?.data?.slice(5, 10).map((phone: any, index: number) => (
            <div key={index} className="relative">
              <Card className="py-3 max-w-[200px] rounded-sm cursor-pointer">
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
      {/* cards first row only */}
      <div className="flex justify-center mt-10  ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-2 md:m-0">
          {data?.data?.slice(0, 5).map((phone: any, index: number) => (
            <div key={index} className="relative">
              <Card className="py-3 max-w-[200px] rounded-sm cursor-pointer">
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
    </div>
  );
};

export default MostPopular;
