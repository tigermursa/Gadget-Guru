/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="container mx-auto mb-10 px-4 h-100vh">
      <h1 className="text-center text-4xl md:text-6xl font-semibold mt-5 mb-10">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center m-3 md:m-0">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contact image"
            width={700}
            height={500}
          />
        </div>
        <div className="rounded-xl overflow-hidden">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contact image"
            width={700}
            height={500}
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-xl md:text-2xl mb-4 font-semibold">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-6">
          Have any questions or inquiries? Don't hesitate to reach out to us!
          Whether you need assistance with a product, have a suggestion, or just
          want to say hello, we're here for you.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Visit us at our location or give us a call. We're excited to hear from
          you!
        </p>
        <p className="text-lg md:text-xl mb-6">
          <strong>Location:</strong> 123 Gadget Street, Dhaka, Bangladesh
        </p>
        <p className="text-lg md:text-xl mb-6">
          <strong>Phone:</strong> +880 123 456 7890
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

export default ContactPage;
