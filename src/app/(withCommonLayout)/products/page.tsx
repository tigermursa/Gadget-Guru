import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ProductPage = async () => {
  const res = await fetch("https://gadget-guru-server-rho.vercel.app/api/v1/phone/get", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="container mx-auto  mt-10 mb-20">
      <div className="flex justify-center cursor-pointer  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data?.data?.map((phone: any, index: number) => (
            <div key={index} className="relative">
              <Link href={`/details/${phone._id}`}>
                <Card className="py-3 max-w-[350px] rounded-md">
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
                    <h4 className="font-bold text-large"> {phone.name}</h4>
                    <p className="text-small uppercase font-bold text-red-600">
                      &#2547; {19 + "," + phone.priceV1} / {phone.ramV1}
                    </p>
                    <p className="text-small uppercase font-bold text-red-600">
                      &#2547; {phone.priceV2} / {phone.ramV1}
                    </p>
                  </CardHeader>
                </Card>
              </Link>
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

export default ProductPage;
