"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menuItems = [
    { text: "Home", href: "/home" },
    { text: "Phones", href: "/dashboard/phones" },
    { text: "Products", href: "/dashboard/products" },
    { text: "Add-Phone", href: "/dashboard/add-phone" },
    { text: "Add-Product", href: "/dashboard/add-product" },
  ];

  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <aside className="bg-cyan-900 lg:p-5 col-span-2 h-[100vh] sticky top-0 left-0 overflow-auto">
      <div>
        <div className=" flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`}>
              <Link
                href={item.href}
                className={
                  isActive(item.href)
                    ? "text-white font-bold "
                    : "text-gray-900 font-semibold "
                }
              >
                <div
                  className={
                    isActive(item.href)
                      ? "border  bg-gray-800 rounded-lg flex justify-center shadow-2xl p-2 cursor-pointer  hover:bg-gray-700"
                      : "border  bg-gray-300 rounded-lg flex justify-center  p-2  cursor-pointer hover:bg-gray-200"
                  }
                >
                  <div className="flex gap-2 items-center">{item.text}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
