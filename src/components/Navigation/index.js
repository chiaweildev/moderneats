import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "@/components/SearchBar";
import Cart from "@/components/Cart";
import Location from "@/components/Location";

const Navigation = () => {
  return (
    <div className="flex min-h-[96px] items-center px-10">
    <div className="flex items-center">
        <HamburgerMenuIcon className="mr-8 h-5 w-5 cursor-pointer"  />
        <a href="/" className="text-[28px]">
        <span className=" text-[34px] font-light">m</span>
        odern<b className="mx-2">Eats</b>
        </a>
    </div>
    <div className="ml-8 mr-12">
        <Location />
    </div>
    <div className="flex flex-1 items-center justify-between">
        <SearchBar />
        <Cart />
    </div>
    </div>
  );
};

export default Navigation;
