import CategoryItem from "@/components/CategoryItem"

const CategoryContent = ({ data: productItems }) => {
  return (
    <>
      <ul className="list-none overflow-hidden">
        {productItems.map(({ id, categoryName, categoryItems }) => (
          <CategoryItem
            key={categoryName}
            id={id}
            categoryName={categoryName}
            categoryItems={categoryItems}
          />
        ))}
      </ul>
    </>
  )
}

export default CategoryContent
