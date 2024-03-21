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
} from "@nextui-org/react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { text: "Home", href: "/home" },
    { text: "Categories", href: "#" },
    { text: "Products", href: "#" },
    { text: "Flash Sale", href: "/flash-sale" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "#" },
  ];

  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl">
            Gadget<span className="text-green-500">Guru</span>
          </p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 ms-20">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color={isActive(item.href) ? "primary" : "foreground"}
              href={item.href}
            >
              {item.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

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
  );
};

export default NavigationBar;
