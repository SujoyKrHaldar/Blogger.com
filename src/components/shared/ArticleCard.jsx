/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "./Image";

function ArticleCard({ title, category }) {
  return (
    <div
      className="border border-black rounded-xl text-white overflow-hidden flex flex-col gap-0
      w-full h-[380px] hover:scale-95 duration-300 group shadow-xl hover:shadow-md"
    >
      <div className="w-full h-1/2 overflow-hidden group-hover:scale-110 duration-300 bg-white">
        {/* {photo_url && <img src={photo_url} alt={title} />} */}
        <Image src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9ja3VwfGVufDB8fDB8fHww" />
      </div>

      <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="p-6 w-full flex-1 flex flex-col justify-between text-black border-t bg-white border-black">
        <div className="space-y-2">
          <p className="text-sm">{category}</p>
          <p className="font-bold text-xl">{title}</p>
          <p className="text-sm">
            by <span className="font-regular italic">Sujoykrhaldar</span>
          </p>
        </div>

        <Link to="/blogs/blog" className="flex items-center justify-between">
          <p className="font-medium">Read Article</p>
          <div className="text-2xl">
            <IoIosArrowRoundForward />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
