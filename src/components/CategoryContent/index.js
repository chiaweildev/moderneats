import CategoryItem from "@/components/CategoryItem"

const CategoryContent = ({ data: productItems }) => {
  return (
    <>
      <ul className="list-none">
        {productItems.map(({ category, categoryIndex, productItemsOfCategory }) => (
          <CategoryItem
            key={category}
            categoryName={category}
            categoryIndex={categoryIndex}
            productItemsOfCategory={productItemsOfCategory}
          />
        ))}
      </ul>
    </>
  )
}

export default CategoryContent
