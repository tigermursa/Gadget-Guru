"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menuItems = [
    { text: "Home", href: "/home" },
    { text: "Phones", href: "/dashboard/phone" },
    { text: "Products", href: "/dashboard/products" },
    { text: "Add-Phone", href: "/dashboard/add-phone" },
    { text: "Add-Product", href: "/dashboard/add-product" },
    { text: "Update-products", href: "/dashboard/update-products" },
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
            <div
              key={`${item}-${index}`}
              className={
                isActive(item.href)
                  ? "border  bg-gray-800 rounded-lg flex justify-center shadow-2xl p-2 cursor-pointer  hover:bg-gray-700"
                  : "border  bg-gray-300 rounded-lg flex justify-center  p-2  cursor-pointer hover:bg-gray-200"
              }
            >
              <div>
                <Link
                  className={
                    isActive(item.href)
                      ? "text-white font-bold "
                      : "text-gray-900 font-semibold "
                  }
                  href={item.href}
                >
                  {item.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
