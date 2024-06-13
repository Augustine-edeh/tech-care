import Image from "next/image";
import Navbar from "./Navbar";
import User from "./User";

Image;
const Header = () => {
  return (
    <header className="flex items-center justify-between px-[33px] h-[72px] bg-unnamed-color-ffffff rounded-[70px]">
      <Image src="/TestLogo.svg" alt="" width={211} height={48} />
      <Navbar />
      <User />
    </header>
  );
};

export default Header;
