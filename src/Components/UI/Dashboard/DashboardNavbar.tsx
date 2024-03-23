import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <div className="flex mx-auto justify-center items-center bg-cyan-900 py-3 m-0">
      <div className=" w-[95%] flex justify-between items-center ms-3 me-3  ">
        <div>
          <p className="font-bold text-inherit text-xl text-white">
            Gadget<span className="text-secondary">Guru </span> Dashboard
          </p>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div>
            <Link color="foreground" href="#">
              <Image
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt=""
                width={45}
                height={45}
                className="rounded-full border border-primary p-1"
              />
            </Link>
          </div>
          <div className="text-sm font-semibold text-white">
            <h4>Mursalin Hossain</h4>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
