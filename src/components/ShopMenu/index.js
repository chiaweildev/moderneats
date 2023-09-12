import { useState, useEffect } from "react"
import MenuCategory from "@/components/MenuCategory"
import CategoryContent from "@/components/CategoryContent"
import mockData from "@/data/mockData"

const ShopMenu = () => {
  const [productItems, setProductItems] = useState([])
  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {
    // get mock data
    const refineCategoryItems = mockData.map(({ id, categoryName }) => {
      return {
        id,
        categoryName,
      }
    })
    setCategoryItems(refineCategoryItems)
    setProductItems(mockData)
  }, [])

  return (
    <div className="max-x-[1920px] flex min-h-screen w-full px-10">
      <MenuCategory data={categoryItems} />
      <CategoryContent data={productItems} />
    </div>
  )
}

export default ShopMenu
