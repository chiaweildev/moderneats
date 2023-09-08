import React from "react"
import MenuCategory from "@/components/MenuCategory"
import CategoryContent from "@/components/CategoryContent"

const ShopMenu = () => {
  return (
    <div className="max-x-[1920px] flex min-h-screen w-full px-10">
      <MenuCategory />
      <CategoryContent />
    </div>
  )
}

export default ShopMenu
