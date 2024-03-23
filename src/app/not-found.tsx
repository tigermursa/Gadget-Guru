import Image from "next/image";
import notFoundImage from "../../public/images/error-page-svgrepo-com.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center mb-10 m-2">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-lg mt-3 font-semibold text-gray-700">
          The page you requested could not be found. It may have been removed or
          the URL might be incorrect.
        </p>
      </div>
      <Image
        src={notFoundImage}
        alt="Page Not Found Illustration"
        width={400}
        height={400}
        className="m-2"
      />
      <Link href="/">
        <Button className="mt-10 font-bold" variant="bordered">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
