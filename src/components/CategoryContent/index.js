import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import CategoryItem from "@/components/CategoryItem"

const CategoryContent = () => {
  const productItems = [
    {
      id: 0,
      categoryName: "精選商品",
      categoryItems: [
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/bf33e96953819906ae3823e085c1f6e7/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "牛肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/d031b09fa52fb5cbf929628313796e09/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華牛肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/a858c63651d53ac2835939dd278c28cc/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豬肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/28bc5b5030cb5275052a99950f260158/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "綜合豆腐鴨血",
          price: "$63.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/554b28fdf95db9a3a34d47c92d1f14b5/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "鮮魚套餐",
          price: "$200.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/f279600ef9dccd9c9b8d8f4f9d153a38/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "羊肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/c9f904fa5f90d2ca32c852a3a87c4a35/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "麻辣豆腐",
          price: "$48.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/68860355c9d0c53bfa27afd067491336/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "雞肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/1d085077fdc7961fbd167336184d7b0f/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華豬肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/02ad83b663e9c891d7b82c8c5ed47477/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "麻辣鴨血",
          price: "$48.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/7a881ea8816cf2ce96289814562b23f4/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華羊肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/10ee484d0dc93832995b9294e204eac8/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華鮮魚套餐",
          price: "$230.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/10ee484d0dc93832995b9294e204eac8/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華雞肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/404dbb46ec3625ede6685ea87314182c/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "老油條",
          price: "$45.00",
        },
        {
          img: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/beb05a8bec7f3b14.png",
          title: "麻辣皮蛋",
          price: "$45.00",
        },
        {
          img: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/beb05a8bec7f3b14.png",
          title: "寬冬粉",
          price: "$38.00",
        },
        {
          img: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/beb05a8bec7f3b14.png",
          title: "蒸煮麵",
          price: "$45.00",
        },
        {
          img: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/beb05a8bec7f3b14.png",
          title: "韓式Q拉麵",
          price: "$45.00",
        },
        {
          img: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/beb05a8bec7f3b14.png",
          title: "溏心蛋",
          price: "$40.00",
        },
      ],
    },
    {
      id: 1,
      categoryName: "再次訂購",
      categoryItems: [
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/f279600ef9dccd9c9b8d8f4f9d153a38/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "羊肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/a858c63651d53ac2835939dd278c28cc/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豬肉套餐",
          price: "$180.00",
        },
      ],
    },
    {
      id: 2,
      categoryName: "您專屬的推薦商品",
      categoryItems: [
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/f279600ef9dccd9c9b8d8f4f9d153a38/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "羊肉套餐",
          price: "$180.00",
        },
        {
          img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmYzM2U5Njk1MzgxOTkwNmFlMzgyM2UwODVjMWY2ZTcvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
          title: "豪華牛肉套餐",
          price: "＄210",
        },
        {
          img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmYzM2U5Njk1MzgxOTkwNmFlMzgyM2UwODVjMWY2ZTcvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
          title: "鮮魚套餐",
          price: "＄210",
        },
        {
          img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmYzM2U5Njk1MzgxOTkwNmFlMzgyM2UwODVjMWY2ZTcvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
          title: "綜合豆腐鴨血",
          price: "$63",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/7a881ea8816cf2ce96289814562b23f4/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華羊肉套餐",
          price: "$210.00",
        },
      ],
    },
    {
      id: 3,
      categoryName: "豪華套餐",
      categoryItems: [
        {
          img: "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYmYzM2U5Njk1MzgxOTkwNmFlMzgyM2UwODVjMWY2ZTcvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
          title: "豪華牛肉套餐",
          price: "＄210",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/1d085077fdc7961fbd167336184d7b0f/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華豬肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/7a881ea8816cf2ce96289814562b23f4/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華羊肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/7a881ea8816cf2ce96289814562b23f4/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華羊肉套餐",
          price: "$210.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/10ee484d0dc93832995b9294e204eac8/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華鮮魚套餐",
          price: "$230.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/10ee484d0dc93832995b9294e204eac8/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豪華雞肉套餐",
          price: "$210.00",
        },
      ],
    },
    {
      id: 4,
      categoryName: "超值套餐",
      categoryItems: [
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/bf33e96953819906ae3823e085c1f6e7/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "牛肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/a858c63651d53ac2835939dd278c28cc/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "豬肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/554b28fdf95db9a3a34d47c92d1f14b5/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "鮮魚套餐",
          price: "$200.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/f279600ef9dccd9c9b8d8f4f9d153a38/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "羊肉套餐",
          price: "$180.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/68860355c9d0c53bfa27afd067491336/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "雞肉套餐",
          price: "$180.00",
        },
      ],
    },
    {
      id: 5,
      categoryName: "單點",
      categoryItems: [
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/c9f904fa5f90d2ca32c852a3a87c4a35/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "麻辣豆腐",
          price: "$48.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/28bc5b5030cb5275052a99950f260158/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "綜合豆腐鴨血",
          price: "$63.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/02ad83b663e9c891d7b82c8c5ed47477/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "麻辣鴨血",
          price: "$48.00",
        },
        {
          img: "https://tb-static.uber.com/prod/image-proc/processed_images/404dbb46ec3625ede6685ea87314182c/859baff1d76042a45e319d1de80aec7a.jpeg",
          title: "老油條",
          price: "$45.00",
        },
        {
          img: "",
          title: "麻辣皮蛋",
          price: "$45",
        },
        {
          img: "",
          title: "溏心蛋",
          price: "$40",
        },
        {
          img: "",
          title: "豆角螺",
          price: "$37",
        },
        {
          img: "",
          title: "起司片",
          price: "$22",
        },
      ],
    },
    {
      id: 6,
      categoryName: "單點麵食",
      categoryItems: [
        {
          img: "",
          title: "白飯",
          price: "＄25",
        },
        {
          img: "",
          title: "王子麵",
          price: "$30",
        },
        {
          img: "",
          title: "寬冬粉",
          price: "$38",
        },
        {
          img: "",
          title: "蒸煮麵",
          price: "$45",
        },
        {
          img: "",
          title: "韓式Ｑ拉麵",
          price: "＄45",
        },
        {
          img: "",
          title: "原味泡飯",
          price: "＄38",
        },
        {
          img: "",
          title: "烏龍麵",
          price: "$45",
        },
        {
          img: "",
          title: "科學麵",
          price: "＄30",
        },
        {
          img: "",
          title: "關廟麵",
          price: "$45",
        },
        {
          img: "",
          title: "張君雅",
          price: "＄30",
        },
        {
          img: "",
          title: "細冬粉",
          price: "$38",
        },
        {
          img: "",
          title: "麻辣泡飯",
          price: "＄38",
        },
      ],
    },
  ]

  return (
    <>
      <ul className="list-none overflow-hidden">
        {productItems.map(({ id, categoryName, categoryItems }) => (
          <CategoryItem
            id={id}
            categoryName={categoryName}
            categoryItems={categoryItems}
          />
        ))}

        {/* {productItems.map(({ id, categoryName, categoryItems }) => {
          if (id === 0) {
            return (
              <li key={id}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="text-[24px] font-medium"
                    id={`category-${id}`}
                  >
                    {categoryName}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-[36px] w-[36px] cursor-not-allowed items-center justify-center rounded-full bg-gray-100">
                      <ArrowLeftIcon className=" h-4 w-4 stroke-slate-300" />
                    </div>
                    <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-gray-100">
                      <ArrowRightIcon className="h-4 w-4 stroke-slate-800" />
                    </div>
                  </div>
                </div>
                <ul className="no-scrollbar flex w-full snap-mandatory list-none space-x-4 overflow-x-auto pb-2">
                  {categoryItems.map(({ img, title, price }, index) => {
                    return (
                      <li
                        key={index}
                        className="flex-shrink-0 flex-grow-0 cursor-pointer snap-start bg-white px-2 py-2  transition-shadow hover:shadow-xl"
                      >
                        <div className="relative">
                          <img
                            src={img}
                            alt={title}
                            className=" aspect-[180/165] h-[165px]"
                          />
                        </div>
                        <div className="text-[16px]">{title}</div>
                        <div className="text-[14px] leading-[14px]">
                          {price}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          } else {
            return (
              <li key={id}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="text-[24px] font-medium"
                    id={`category-${id}`}
                  >
                    {categoryName}
                  </div>
                </div>
                <ul className="grid w-full list-none grid-cols-4 gap-5 pb-2">
                  {categoryItems.map(({ img, title, price }, index) => {
                    if (img) {
                      return (
                        <li
                          key={index}
                          className="ml-0 flex-shrink-0 flex-grow-0  cursor-pointer bg-white px-2 py-2  transition-shadow hover:shadow-xl"
                        >
                          <div className="relative">
                            <img src={img} alt={title} className="h-[188px]" />
                          </div>
                          <div className="text-[16px]">{title}</div>
                          <div className="text-[14px] leading-[14px]">
                            {price}
                          </div>
                        </li>
                      )
                    }
                    return (
                      <li
                        key={index}
                        className=" col-span-2 ml-0 flex-shrink-0 flex-grow-0  cursor-pointer bg-white px-2 py-2 pb-12 transition-shadow hover:shadow-lg"
                      >
                        <div className="text-[16px]">{title}</div>
                        <div className="text-[14px] leading-[14px]">
                          {price}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          }
        })} */}
      </ul>
    </>
  )
}

export default CategoryContent
