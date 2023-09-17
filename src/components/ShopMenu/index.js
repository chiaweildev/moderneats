import { useState, useEffect } from "react"
import MenuCategory from "@/components/MenuCategory"
import CategoryContent from "@/components/CategoryContent"
import mockData from "@/data/mockData"

const ShopMenu = () => {
  const [categoryNameItems, setCategoryNameItems] = useState([])
  const [productItems, setProductItems] = useState([])

  useEffect(() => {
    // get mock data
    const {categoryData, productData } = mockData
    const refineProductItems = categoryData.map((category, categoryIndex) => {
        const refineData =  productData.filter((obj)=>{
          return obj.tags.includes(category)
        }).map((obj, index)=>{
          return {
            ...obj,
            category,
            categoryIndex: index+1
          }
        }).sort((a, b) => {
          return (a.img.length > b.img.length)?-1:1
        })
        return {
          category,
          categoryIndex: categoryIndex+1,
          productItemsOfCategory: refineData
        }
    })

    setCategoryNameItems(mockData.categoryData)
    setProductItems(refineProductItems)
  }, [])

  return (
    <div className=" max-w-[1920px] flex min-h-screen w-full px-10">
      <div className="sticky left-0 top-0 max-h-screen min-w-[310px] pt-4">
        <MenuCategory data={categoryNameItems} />
      </div>
      <div className="pt-4 w-full overflow-hidden">
        <CategoryContent data={productItems} />
      </div>
    </div>
  )
}

export default ShopMenu
