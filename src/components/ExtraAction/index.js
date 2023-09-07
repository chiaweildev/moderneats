import { CaretDownIcon } from "@radix-ui/react-icons"
import { PersonIcon } from "@radix-ui/react-icons"
import { CalendarIcon } from "@radix-ui/react-icons"

const ExtraAction = () => {
  return (
    <div className="my-5 flex w-full justify-between px-10">
      <div className="flex min-w-[400px] items-center space-x-2 text-slate-800">
        <button className="flex items-center justify-between  space-x-2 rounded-full bg-gray-100 px-4 py-2 text-[14px] font-bold">
          <span>查看類似商品</span>
          <CaretDownIcon className=" stroke-slate-800" />
        </button>
        <button className="flex items-center justify-between space-x-2 rounded-full bg-gray-100 px-4 py-2 text-[14px] font-bold">
          <PersonIcon className=" stroke-slate-800" />
          <span>團購訂單</span>
        </button>
        <button className="flex items-center justify-between space-x-2 rounded-full bg-gray-100 px-4 py-2 text-[14px] font-bold">
          <CalendarIcon className=" stroke-slate-800" />
          <span>安排時間</span>
        </button>
      </div>
      <div className="flex max-h-[48px] w-[438px] rounded-full bg-gray-100 p-1">
        <div className="flex min-w-[200px] cursor-pointer flex-col items-center justify-center rounded-full bg-white py-1 leading-4">
          <span className="text-[14px]">外送</span>
          <span className=" text-[12px] text-gray-500">15-30 分鐘</span>
        </div>
        <div className="flex min-w-[200px] cursor-pointer flex-col items-center justify-center rounded-full bg-transparent py-1 leading-4">
          <span className="text-[14px]">自取</span>
          <span className=" text-[12px] text-gray-500">
            5-15 分鐘 • 2.2公里
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExtraAction
