"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaCartShopping, FaChevronDown, FaUserLarge } from "react-icons/fa6";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", href: "/home" },
    { text: "Categories", href: "/categories" },
    { text: "Products", href: "/products" },
    { text: "Flash Sale", href: "/flash-sale" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <div className="w-full container mx-auto">
      <Navbar onMenuOpenChange={setIsMenuOpen} className="flex justify-between">
        <NavbarContent>
          <NavbarBrand>
            <p className="font-bold text-inherit text-xl">
              Gadget<span className="text-primary">Guru</span>
            </p>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        {/* Nav items for larger device */}
        <NavbarContent className="hidden sm:flex gap-6 ms-52">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className={
                  isActive(item.href)
                    ? "text-blacks font-bold"
                    : "text-gray-500  "
                }
                href={item.href}
              >
                {item.text}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg text-gray-500"
                  radius="sm"
                  variant="solid"
                >
                  Shops
                  <FaChevronDown />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="A bustling commercial area in the heart of Gulshan-2, Dhaka, where ACME scales apps to meet user demand, automagically, based on load."
              >
                Dhaka Gulshan-2
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Located in the serene neighborhood of Banasree, Dhaka, our shop offers real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Dhaka Banasree
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="Situated in the iconic Dubai Tower, our shop runs on ACME technology, just like many others serving requests at web scale. Join us for unparalleled service."
              >
                Dubai Tower
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem className="relative">
            <Link color="foreground" href="#">
              <FaCartShopping />
            </Link>
            {/* Notification badge */}
            <div className="bg-secondary text-white w-4 h-4 flex items-center justify-center rounded-full absolute -top-2 -right-2 text-xs">
              5 {/* Your notification count */}
            </div>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              <FaUserLarge />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Nav items for small device */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={isActive(item.href) ? "primary" : "foreground"}
                className="w-full text-gray-900"
                href={item.href}
                size="lg"
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
