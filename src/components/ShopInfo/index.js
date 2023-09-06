const ShopInfo = () => {
  return (
    <div className="w-full px-10 pt-6 min-w-[500px]">
      <h1 className="text-[36px] font-bold">麻子辣蒙古麻辣燙 南大店</h1>
      <div className="flex h-[40px] items-center">
        <img src="https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/top_eats.png" 
        alt="award" className="w-[28px] h-[28px] mr-4"/>
        <div className="flex-col text-[14px]">
          <div className="flex items-center">
            <span className="w-4 h-4 mr-1 mb-1">★</span>
            <span> 4.9 (200+ 評分) • 台灣美食 • $ • </span>
            <img src="https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png"
            className=" w-[14px] h-[14px] mx-1"/> • 
            <span className=" cursor-pointer underline ml-1">詳細資訊</span>
          </div>
          <div className=" text-slate-500">打烊時間：10:50 PM</div>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo
