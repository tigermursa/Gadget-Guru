/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-center text-6xl font-semibold mt-5 mb-10">
        "About us"
      </h1>
      <div className="flex flex-col md:flex-row gap-3 justify-center m-3 md:m-0">
        <Image
          src={
            "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="about image"
          width={700}
          height={700}
          className="rounded-s-3xl"
        />
        <Image
          src={
            "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="about image"
          width={700}
          height={700}
          className="rounded-e-3xl"
        />
      </div>
    </div>
  );
};

export default AboutPage;
