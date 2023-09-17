import { BackpackIcon } from "@radix-ui/react-icons"
import { useSelector } from "react-redux"
import map from "lodash/map"


const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  const count = map(cart).reduce((acc, cur) => acc+cur)
  return (
    <div
      className="flex cursor-pointer select-none items-center gap-3 rounded-3xl bg-black
           px-4 py-2 h-[48px] text-sm text-slate-50 hover:opacity-80 text-[16px]"
    >
      <BackpackIcon className="h-4 w-4" />
       購物車 • {count}
    </div>
  );
};

export default Cart;
