import { HeartIcon } from "@radix-ui/react-icons";

const Advertisement = () => (
    <div className=" max-h-[160px] w-full relative">
        <figure className="max-h-[160px] flex justify-center flex-col overflow-hidden">
            <img src="https://tb-static.uber.com/prod/image-proc/processed_images/b39c6858386a8861219df02ba6040acc/c73ecc27d2a9eaa735b1ee95304ba588.jpeg"
                className="w-full h-full " alt="modern eats cover" />
        </figure>
        <div className="flex justify-between min-w-[104px] w-[104px] absolute mx-[40px] my-[24px] right-0 top-0">
            <button className="w-[48px] h-[48px] rounded-full bg-slate-100 flex justify-center items-center">
                <HeartIcon className=" w-5 h-5 stroke-slate-900 scale-x-110"/>
            </button>
            <button className="w-[48px] h-[48px]  rounded-full bg-slate-100 text-slate-900 font-extrabold">···</button>
        </div>
    </div>
)

export default Advertisement
