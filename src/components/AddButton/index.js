import { TrashIcon, PlusIcon } from "@radix-ui/react-icons"
import cx from "classnames"

const AddButton = ({count, onAdd, onRemove}) => {
  const isAdd = count > 0;
  console.log(count)
  return (
      <div className={cx(
        "absolute right-4 top-4 flex h-6 w-6  bg-slate-900 text-white hover:scale-110",
        "items-center justify-center rounded-full transition-all",
        {"w-auto justify-between px-2": isAdd})}
          >
        {isAdd && (
          <>
            <TrashIcon onClick={onRemove}/>
            <span className="text-md px-2">
              {count}
            </span>
          </>
        )}
        <PlusIcon onClick={onAdd}/>
    </div>
  )
}

export default AddButton
