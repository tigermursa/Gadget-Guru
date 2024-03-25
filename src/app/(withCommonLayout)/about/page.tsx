/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto mb-10 px-4 h-100vh">
      <h1 className="text-center text-4xl md:text-6xl font-semibold mt-5 mb-10">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center m-3 md:m-0">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about image"
            width={700}
            height={500}
          />
        </div>
        <div className=" flex gap-2 flex-col ">
          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664201889922-66bc3c778c1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about image"
              width={345}
              height={245}
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about image"
              width={345}
              height={245}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl md:text-2xl mb-4 font-semibold">
          Your Gadget Guru: Unlocking the Power of Connection
        </h2>
        <p className="text-lg md:text-xl mb-6">
          At GadgetGuru, we're more than just a phone store. We're passionate
          tech enthusiasts dedicated to empowering you with the perfect device
          to connect, create, and conquer your day. Whether you're a business
          professional seeking peak productivity, a budding photographer chasing
          stunning visuals, or a social butterfly craving seamless
          communication, we've got you covered.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Our expert team boasts a wealth of knowledge about the latest
          smartphones and mobile technology. They're not just salespeople –
          they're genuine gadget gurus who'll guide you through the features,
          compare options, and help you find the phone that perfectly aligns
          with your lifestyle and budget.
        </p>
        <p className="text-lg md:text-xl mb-6">
          We believe in genuine connections. That's why we go beyond simply
          selling phones. We offer comprehensive after-sales support, including
          setup assistance, data transfer, and ongoing troubleshooting. We're
          here to ensure you get the most out of your new device, making the
          transition smooth and worry-free.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Join the GadgetGuru community! Sign up for our newsletter to receive
          exclusive deals, expert tech tips, and insights into the ever-evolving
          mobile landscape. Stay connected with us for the latest and greatest
          in the world of phones.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
