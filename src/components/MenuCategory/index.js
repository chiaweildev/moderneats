const MenuCategory = ({ data: categoryItems }) => {
  return (
    <ul className="space-y-5">
      {categoryItems.map(({ id, categoryName }) => {
        return (
          <li key={categoryName}>
            <a
              href={`#category-${id}`}
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
