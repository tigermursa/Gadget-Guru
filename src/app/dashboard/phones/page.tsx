import Image from "next/image";
import React from "react";

const PhonesPage = async () => {
  const res = await fetch(
    "https://gadget-guru-server-rho.vercel.app/api/v1/phone/get",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
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
          {data?.data?.map((phone:any, index:any) => (
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
              <td className="border border-gray-300 p-2">{phone.ramV1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhonesPage;
