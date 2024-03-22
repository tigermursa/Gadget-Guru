import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";

const dbData = [
  {
    image:
      "https://image01.realme.net/general/20240222/1708594082265294bfbb7c7db4a739201637fabcbea3b.webp.webp",
    name: "realme Note 50",
    priceOne: "10,999",
    specMicroOne: "4+64 GB",
    priceTwo: "11,999",
    specMicroTwo: "6-128-GB",
    tag: "11%",
    fullSpec: {
      operatingSystem: "Android 12 with realme UI 4.0",
      processor: "MediaTek Helio G80",
      display: "6.5-inch IPS LCD, Full HD+ (2400 x 1080 pixels)",
      cameras: {
        main: "48 MP, f/1.8",
        ultraWide: "8 MP, f/2.2",
        macro: "2 MP, f/2.4",
        depth: "2 MP, f/2.4",
      },
      battery: "5000 mAh",
      charging: "18W Fast Charging",
      dimensions: "162.5 x 76.8 x 8.9 mm",
      weight: "195 grams",
      colors: ["Aurora Blue", "Aurora Green", "Aurora White"],
    },
  },
  {
    image:
      "https://image01.realme.net/general/20240212/170771390326093432f8910ab493fb253eaa52ef0b057.png.webp",
    name: "realme Note 20",
    priceOne: "13,999",
    specMicroOne: "4+64 GB",
    priceTwo: "17,999",
    specMicroTwo: "8-128-GB",
    tag: "15%",
    fullSpec: {
      operatingSystem: "Android 13 with realme UI 4.0",
      processor: "MediaTek Helio G80",
      display: "6.5-inch IPS LCD, Full HD+ (2400 x 1080 pixels)",
      cameras: {
        main: "64 MP, f/1.8",
        ultraWide: "8 MP, f/2.2",
        macro: "2 MP, f/2.4",
        depth: "2 MP, f/2.4",
      },
      battery: "6000 mAh",
      charging: "22W Fast Charging",
      dimensions: "162.5 x 76.8 x 8.9 mm",
      weight: "185 grams",
      colors: ["Aurora Blue", "Aurora Green", "Aurora White"],
    },
  },
  {
    image: "https://image01.realme.net/general/20221017/1665997264645.png.webp",
    name: "realme C30",
    priceOne: "13,999",
    specMicroOne: "4+64 GB",
    priceTwo: "17,999",
    specMicroTwo: "8-128-GB",
    tag: "17%",
    fullSpec: {
      operatingSystem: "Android 13 with realme UI 4.0",
      processor: "MediaTek Helio G80",
      display: "6.5-inch IPS LCD, Full HD+ (2400 x 1080 pixels)",
      cameras: {
        main: "64 MP, f/1.8",
        ultraWide: "8 MP, f/2.2",
        macro: "2 MP, f/2.4",
        depth: "2 MP, f/2.4",
      },
      battery: "6000 mAh",
      charging: "22W Fast Charging",
      dimensions: "162.5 x 76.8 x 8.9 mm",
      weight: "185 grams",
      colors: ["Aurora Blue", "Aurora Green", "Aurora White"],
    },
  },
  {
    image:
      "https://image01.realme.net/general/20240212/170771390326093432f8910ab493fb253eaa52ef0b057.png.webp",
    name: "realme Note 20",
    priceOne: "13,999",
    specMicroOne: "4+64 GB",
    priceTwo: "17,999",
    specMicroTwo: "8-128-GB",
    tag: "15%",
    fullSpec: {
      operatingSystem: "Android 13 with realme UI 4.0",
      processor: "MediaTek Helio G80",
      display: "6.5-inch IPS LCD, Full HD+ (2400 x 1080 pixels)",
      cameras: {
        main: "64 MP, f/1.8",
        ultraWide: "8 MP, f/2.2",
        macro: "2 MP, f/2.4",
        depth: "2 MP, f/2.4",
      },
      battery: "6000 mAh",
      charging: "22W Fast Charging",
      dimensions: "162.5 x 76.8 x 8.9 mm",
      weight: "185 grams",
      colors: ["Aurora Blue", "Aurora Green", "Aurora White"],
    },
  },
];


const FlashSale = () => {
  return (
    <div className="">
      {/* TITLE */}
      <div className="flex justify-between ms-28 me-28 mb-10 ">
        <h1 className="font-semibold text-2xl">Flash Sale</h1>
        <Button variant="ghost" color="primary" className="">
          View All
        </Button>
      </div>
      {/* cards first row only */}
      <div className="flex justify-center   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {dbData.map((phone, index) => (
            <div key={index} className="relative">
              <Card className="py-3 max-w-[350px] rounded-sm">
                <CardBody className="overflow-visible py-0">
                  <Image
                    alt={phone.name}
                    className="object-cover rounded-sm"
                    src={phone.image}
                    width={270}
                    height={270}
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <h4 className="font-bold text-large">{phone.name}</h4>
                  <p className="text-small uppercase font-bold text-red-600">
                    {phone.priceOne} / {phone.specMicroOne}
                  </p>
                  <p className="text-small uppercase font-bold text-red-600">
                    {phone.priceTwo} / {phone.specMicroTwo}
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
      <div className="flex justify-center  mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10">
          {dbData.map((phone, index) => (
            <div key={index} className="relative">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none min-w-[600px] min-h-[300px] flex justify-center items-center "
              >
                <div className=" flex justify-center items-center">
                  <div>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                      <h4 className="font-bold text-large">{phone.name}</h4>
                      <p className="text-small uppercase font-bold text-red-600">
                        {phone.priceOne} / {phone.specMicroOne}
                      </p>
                      <p className="text-small uppercase font-bold text-red-600">
                        {phone.priceTwo} / {phone.specMicroTwo}
                      </p>
                    </CardHeader>
                  </div>
                  <div>
                    <Image
                      alt="Woman listing to music"
                      className="object-cover"
                      height={300}
                      src={phone.image}
                      width={300}
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
