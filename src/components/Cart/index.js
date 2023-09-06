import { BackpackIcon } from "@radix-ui/react-icons";

const Cart = () => {
  return (
    <div
      className="flex cursor-pointer select-none items-center gap-3 rounded-3xl bg-black
           px-4 py-2 h-[48px] text-sm text-slate-50 hover:opacity-80 text-[16px]"
    >
      <BackpackIcon className="h-4 w-4" />
      0 台購物車
    </div>
  );
};

export default Cart;
