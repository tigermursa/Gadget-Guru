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
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Categories", href: "#" },
    { text: "Products", href: "#" },
    { text: "Flash Sale", href: "#" },
    { text: "About Us", href: "/about" },
    { text: "Contact Us", href: "#" },
  ];

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

      <NavbarContent className="hidden sm:flex gap-6  ms-20">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Categories
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Flash Sale
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // ? for last item color
              //   color={
              //     index === 2
              //       ? "primary"
              //       : index === menuItems.length - 1
              //       ? "danger"
              //       : "foreground"
              //   }
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
