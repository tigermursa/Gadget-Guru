import Image from "next/image";
import loader from "../../public/loader.svg";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={loader} alt="" />
    </div>
  );
};

export default loading;
