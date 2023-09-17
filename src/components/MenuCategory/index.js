const MenuCategory = ({data:categoryNameItems}) => {
  return (
    <ul className="space-y-5">
      {categoryNameItems.map((categoryName, index) => {
        return (
          <li key={categoryName}>
            <a
              href={`#category-${index+1}`}
              className=" text-[16px] font-medium text-slate-800 underline-offset-4 duration-300 ease-in hover:underline"
            >
              {categoryName}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuCategory
