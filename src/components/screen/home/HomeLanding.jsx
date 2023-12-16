import Image from "../../shared/Image";
import CtaBtn from "../../shared/CtaBtn";

const demoUsers = [
  {
    url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    url: " https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  },
];

function HomeLanding() {
  return (
    <section className="flex items-center ">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-gray-500 overflow-hidden">
        <Image src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="container w-full">
        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.5rem]">Stay Curious</p>

            <h1>Where Developer blogs meet Community power!</h1>

            <p className="text-lg leading-[2rem] pt-2 max-w-[600px]">
              Discover stories, thinking, and expertise from writers on any
              topic. Create and grow your developer blog effortlessly with us.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <CtaBtn url="/login" className="text-white">
              Get started - <span className=" font-light italic">its free</span>
            </CtaBtn>

            <CtaBtn className="bg-white border-gray-800 text-black" url="/feed">
              Read Articles
            </CtaBtn>
          </div>
        </div>
      </div>

      <div className="bg-white w-full absolute bottom-0 border-t border-b border-gray-500 py-4">
        <div className="container flex items-center gap-2">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {demoUsers.map((img) => (
              <img
                key={img.url}
                className="w-10 h-10 border-4 shadow-md border-white rounded-full"
                src={img.url}
                alt="Demo users"
              />
            ))}
          </div>
          <p>are already here, still counting</p>
        </div>
      </div>
    </section>
  );
}

export default HomeLanding;
