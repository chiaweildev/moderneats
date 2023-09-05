import { SewingPinFilledIcon } from "@radix-ui/react-icons";

const Location = () => {
  return (
    <div
      className="flex min-w-max cursor-pointer items-center justify-center rounded-full bg-gray-100 
     px-4 py-3.5 max-h-[48px]"
    >
      <SewingPinFilledIcon className="h-[22px] w-[22px] pr-1" />
      <div className="text-sm">新竹・立刻</div>
    </div>
  );
};

export default Location;