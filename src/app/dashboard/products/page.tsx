import Image from "next/image";
import React from "react";

const ProductPage = async () => {

  const data = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Nmu2upn4PdLGoeHB484dbLoha3avZwJq2A&usqp=CAU",
      name: "Wireless Charging Pad",
      price: "$29.99",
      quantity: 50,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzPdzjmErdhW4xHqJSij8S3pfqy1e0z1oZw&usqp=CAU",
      name: "Bluetooth Earbuds",
      price: "$49.99",
      quantity: 30,
    },
    {
      id: 3,
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1696986672-71Wj1BlpXRL.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
      name: "Phone Case",
      price: "$19.99",
      quantity: 100,
    },
    {
      id: 4,
      image: "https://www.techlandbd.com/image/catalog/Power%20Bank/Ugreen/ugreen-145w-25000mah-portable-charger-power-bank/ugreen-145w-25000mah-portable-charger-power-bank-1.jpg",
      name: "Portable Power Bank",
      price: "$39.99",
      quantity: 40,
    },
    {
      id: 5,
      image: "https://adminapi.applegadgetsbd.com/storage/media/large/Mi-Smart-Band-8-Pro-Black-6165.jpg",
      name: "Smartwatch Band",
      price: "$14.99",
      quantity: 80,
    },
    {
      id: 6,
      image: "https://images-cdn.ubuy.co.id/65e23cdf4b63894208028723-onn-glass-screen-protector-for-iphone.jpg",
      name: "Screen Protector",
      price: "$9.99",
      quantity: 60,
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/71+bCOgCaYL._AC_UF894,1000_QL80_.jpg",
      name: "Car Phone Mount",
      price: "$24.99",
      quantity: 35,
    },
    {
      id: 8,
      image: "https://static-01.daraz.com.bd/p/3ae1c9eef0c71835dda5c55812901c3f.jpg",
      name: "Wireless Headphone Stand",
      price: "$34.99",
      quantity: 20,
    },
    {
      id: 9,
      image: "https://static-01.daraz.com.bd/p/641f87bc8398f64e8dd9bb67499ea130.jpg_750x750.jpg_.webp",
      name: "USB-C Cable",
      price: "$12.99",
      quantity: 90,
    },
    {
      id: 10,
      image: "https://adminapi.applegadgetsbd.com/storage/media/large/Black---Belkin-Boost-Charge-Pro-2-in-1-Wireless-Charger-Stand-With-Magsafe-15W-(2)-6635.jpg",
      name: "Wireless Charging Stand",
      price: "$39.99",
      quantity: 25,
    },
  ];
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Phones</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">RAM</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((phone: any, index: any) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  className="rounded "
                  height={45}
                  width={45}
                />
              </td>
              <td className="border border-gray-300 p-2">{phone.name}</td>
              <td className="border border-gray-300 p-2">{phone.price}</td>
              <td className="border border-gray-300 p-2">{phone.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;
