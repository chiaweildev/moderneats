import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Item from "@/components/Item"

const CategoryItem = ({ id, categoryName, categoryItems }) => {
  return (
    <li key={id} className="mb-5">
      <div className="mb-2 flex items-center justify-between px-2">
        <div className="text-[24px] font-medium" id={`category-${id}`}>
          {categoryName}
        </div>
        {id === 0 && (
          <div className="flex items-center space-x-2">
            <div className="flex h-[36px] w-[36px] cursor-not-allowed items-center justify-center rounded-full bg-gray-100">
              <ArrowLeftIcon className=" h-4 w-4 stroke-slate-300" />
            </div>
            <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gray-100">
              <ArrowRightIcon className="h-4 w-4 stroke-slate-800" />
            </div>
          </div>
        )}
      </div>
      {id === 0 && (
        <ul className="no-scrollbar flex w-full snap-mandatory list-none space-x-4 overflow-x-auto pb-2">
          {categoryItems.map(({ img, title, price }, index) => (
            <Item key={index} img={img} title={title} price={price} />
          ))}
        </ul>
      )}
      {id > 0 && (
        <ul className="grid w-full list-none grid-cols-4 gap-5 pb-2">
          {categoryItems.map(({ img, title, price }, index) => (
            <Item key={index} img={img} title={title} price={price} />
          ))}
        </ul>
      )}
    </li>
  )
}

{
  /* <>
      <ul className="list-none">
        {productItems.map(({ id, categoryName, categoryItems }) => {
          if (id === 0) {
            return (
              <li key={id}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="text-[24px] font-medium"
                    id={`category-${id}`}
                  >
                    {categoryName}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-[36px] w-[36px] cursor-not-allowed items-center justify-center rounded-full bg-gray-100">
                      <ArrowLeftIcon className=" h-4 w-4 stroke-slate-300" />
                    </div>
                    <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gray-100">
                      <ArrowRightIcon className="h-4 w-4 stroke-slate-800" />
                    </div>
                  </div>
                </div>
                <ul className="no-scrollbar flex w-full snap-mandatory list-none space-x-4 overflow-x-auto pb-2">
                  {categoryItems.map(({ img, title, price }, index) => {
                    return (
                      <li
                        key={index}
                        className="flex-shrink-0 flex-grow-0 cursor-pointer snap-start bg-white px-2 py-2  transition-shadow hover:shadow-xl"
                      >
                        <div className="relative">
                          <img
                            src={img}
                            alt={title}
                            className=" aspect-[180/165] h-[165px]"
                          />
                        </div>
                        <div className="text-[16px]">{title}</div>
                        <div className="text-[14px] leading-[14px]">
                          {price}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          } else {
            return (
              <li key={id}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="text-[24px] font-medium"
                    id={`category-${id}`}
                  >
                    {categoryName}
                  </div>
                </div>
                <ul className="grid w-full list-none grid-cols-4 gap-5 pb-2">
                  {categoryItems.map(({ img, title, price }, index) => {
                    if (img) {
                      return (
                        <li
                          key={index}
                          className="ml-0 flex-shrink-0 flex-grow-0  cursor-pointer bg-white px-2 py-2  transition-shadow hover:shadow-xl"
                        >
                          <div className="relative">
                            <img src={img} alt={title} className="h-[188px]" />
                          </div>
                          <div className="text-[16px]">{title}</div>
                          <div className="text-[14px] leading-[14px]">
                            {price}
                          </div>
                        </li>
                      )
                    }
                    return (
                      <li
                        key={index}
                        className=" col-span-2 ml-0 flex-shrink-0 flex-grow-0  cursor-pointer bg-white px-2 py-2 pb-12 transition-shadow hover:shadow-lg"
                      >
                        <div className="text-[16px]">{title}</div>
                        <div className="text-[14px] leading-[14px]">
                          {price}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          }
        })}
      </ul>
    </> */
}
//   )
// }

export default CategoryItem
