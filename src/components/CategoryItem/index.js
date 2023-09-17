import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Item from "@/components/Item"

const CategoryItem = ({ categoryName, categoryIndex,  productItemsOfCategory}) => {
  return (
    <li className="mb-5">
      <div className="mb-2 flex items-center justify-between px-2">
        <div className="text-[24px] font-medium" id={`category-${categoryIndex}`}>
          {categoryName}
        </div>
        {categoryIndex === 1 && (
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
      {categoryIndex === 1 && (
        <ul className="no-scrollbar flex w-full snap-mandatory list-none space-x-4 overflow-x-auto pb-2">
          {productItemsOfCategory.map(({ id, img, title, price }) => (
            <Item key={id} img={img} title={title} price={price} />
          ))}
        </ul>
      )}
      {categoryIndex > 1 && (
        <ul className=" grid  w-full list-none grid-cols-[repeat(auto-fill,minmax(235px,1fr))] gap-5 pb-2">
          {productItemsOfCategory.map(({id, img, title, price }) => (
            <Item key={id} img={img} title={title} price={price} />
          ))}
        </ul>
      )}
    </li>
  )
}
export default CategoryItem
