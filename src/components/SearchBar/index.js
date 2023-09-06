import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchBar = () => {
  return (
    <div className="relative mr-4 flex w-[360px] max-w-[720px] flex-1 items-center">
      <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 font-extrabold text-slate-800 stroke-slate-900" />
      <input
        className=" placeholder:text-md w-full rounded-full bg-gray-100 py-3.5 pl-10 pr-8
        text-md text-slate-800 outline-none max-h-[48px]
        placeholder:text-slate-500 focus:outline-none
        active:outline-none"
        placeholder="搜尋麻子辣蒙古麻辣燙 南大店"
      />
    </div>
  );
};

export default SearchBar;
