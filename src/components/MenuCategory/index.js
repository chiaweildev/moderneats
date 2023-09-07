const MenuCategory = () => {
  const categoryItems = [
    "精選商品",
    "再次訂購",
    "您專屬的推薦商品",
    "豪華套餐",
    "超值套餐",
    "單點",
    "單點麵食",
  ]

  return (
    <ul class="max-h-screen min-w-[310px] space-y-5">
      {categoryItems.map((item, index) => {
        return (
          <li key={index}>
            <a
              href={`#category-${index}`}
              className=" text-[16px] font-medium text-slate-800 underline-offset-4 duration-300 ease-in hover:underline"
            >
              {item}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default MenuCategory
