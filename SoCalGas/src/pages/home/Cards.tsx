import { cards } from "../../constants/homePageConstants"

const Cards = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        {cards.map((card,index) => (
          <div key={index} className="h-50 md:h-90 md:w-2/5 rounded-lg overflow-hidden relative group cursor-pointer">
            <img
              src={card.image}
              alt="card-image"
              className=" w-full h-full object-cover group-hover:h-1/2"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out group-hover:h-1/2"></div>
            <div className="text-white absolute bottom-4 left-4 w-full pr-7 group-hover:static group-hover:my-5 group-hover:px-4">
              <p className="uppercase font-bold text-xs w-50 group-hover:text-black">
                {card.heading}
              </p>{" "}
              {/*Ask !!!!!!!! arrow right */}
              <div className="flex items-center justify-between">
                <p className="font-extrabold text-[20px] leading-[100%] py-2 w-[70%] md:w-[80%] group-hover:text-black group-hover:w-full">
                  {card.subHeading}
                </p>
                <img
                  className="w-4 h-4 "
                  src="/right-arrow.png"
                  alt="right-arrow"
                />
              </div>
              <p className="text-[#FFFFFFBF] text-xs font-medium pr-2 md:hidden w-[90%] group-hover:block group-hover:w-full group-hover:text-black">
                {card.content}
              </p>
              <button className="hidden font-bold group-hover:flex items-center justify-center gap-4 border-2 border-socal-light-blue text-socal-light-blue text-sm px-2 py-1 rounded-2xl my-2
              ">
                Learn More
                <img
                  className="w-4 h-4 ml-auto"
                  src="/right-arrow-blue.png"
                  alt="right-arrow"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Cards