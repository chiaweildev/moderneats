 import { useDispatch, useSelector } from "react-redux"
 import { add, remove } from "@/data/slice/cartSlice"
import AddButton from "@/components/AddButton"


const Item = ({data}) => {
  const count = useSelector((state)=>state.cart?.[data.id])
  const dispatch = useDispatch()

  const handleCardOnClick = (e) => {
		console.log("card clicked");
	};

  const handleOnAdd = (e) => {
    e.stopPropagation()
    dispatch(add({id: data.id}))
  }
  const handleOnRemove = (e) => {
    e.stopPropagation()
    dispatch(remove({id: data.id}))
  }

  const cartCount = count || 0

  if (data.img) {
    return (
      <li className="group ml-0 flex-shrink-0  flex-grow-0 cursor-pointer bg-white px-2  py-2 transition-shadow duration-300 hover:shadow-md" onClick={handleCardOnClick}>
        <div className="relative">
          <AddButton
            count={cartCount}
            onAdd={handleOnAdd}
            onRemove={handleOnRemove}
          />
          <img src={data.img} alt={data.title} className="h-[188px]" />
          <div className="transition-[opacity shadow] absolute bottom-2 left-[50%] -translate-x-[50%] cursor-pointer select-none rounded-full border bg-white px-3 py-2 text-slate-800 opacity-0 shadow transition-opacity duration-300 hover:bg-gray-100 group-hover:opacity-100">
            快速檢視
          </div>
        </div>
        <div className="text-[16px]">{data.title}</div>
        <div className="text-[14px] leading-[14px]">{data.price}</div>
      </li>
    )
  }
  return (
    <li className="group relative col-span-2 ml-0 flex-shrink-0 flex-grow-0  cursor-pointer bg-white px-2 py-2 pb-12 transition-shadow hover:shadow-md">
      <AddButton
        count={cartCount}
        onAdd={handleOnAdd}
        onRemove={handleOnRemove}
      />
      <div className="text-[16px]">{data.title}</div>
      <div className="text-[14px] leading-[14px]">{data.price}</div>
      <div className="transition-[opacity shadow]  absolute right-4 top-[50%] -translate-y-[50%] cursor-pointer select-none rounded-full border bg-white px-3 py-2 text-slate-800 opacity-0 shadow duration-300 hover:bg-gray-100 group-hover:opacity-100">
        快速檢視
      </div>
    </li>
  )
}

export default Item
