import Image from "next/image";
import Marquee from "react-fast-marquee";

const brandLogos = {
  apple: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png",
  samsung: "https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png",
  xiaomi:
    "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-logos-marcas-8.png",
  redmi:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Realme_logo.svg/2560px-Realme_logo.svg.png",
  symphony:
    "https://vectorseek.com/wp-content/uploads/2023/08/Symphony-Logo-Vector.svg-.png",
  itel: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Itel_Mobile_logo.png/1280px-Itel_Mobile_logo.png",
  onepluse:
    "https://logos-world.net/wp-content/uploads/2023/03/OnePlus-Logo.png",
  nothing:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nothing_Phone_1_wordmark.svg/2560px-Nothing_Phone_1_wordmark.svg.png",
  walton:
    "https://seeklogo.com/images/W/walton-logo-8655B6D7F3-seeklogo.com.png",
  // Add more logos as needed
};

const BrandsMarquee = () => {
  return (
    <Marquee
      direction="left"
      gradientWidth="200"
      pauseOnHover={false} // Optional: Pause marquee on hover
      className="mt-40 mb-40 cursor-pointer"
    >
      {Object.entries(brandLogos).map(([brandName, logoUrl], index) => (
        <Image
          key={index}
          src={logoUrl}
          alt={brandName + " Logo"}
          width={100}
          height={100}
          className="brand-logo  me-20 "
        />
      ))}
    </Marquee>
  );
};

export default BrandsMarquee;
