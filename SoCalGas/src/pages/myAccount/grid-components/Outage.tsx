import Logo from '../../../components/common/Logo'

const Outage = () => {
  return (
    <div className="flex bg-white border border-[#E1E1E1] rounded items-center px-4 py-2 gap-2">
        <img className="h-8 w-8" src="/outage.png" alt="outage" />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col text-sm font-bold">
            <p className="text-[#EF7404]">Planned Outage Scheduled</p>
            <p className="text-black">Today 3:00 PM to 6:00 PM</p>
          </div>
          <Logo className="h-2 w-4" src="/down-arrow-black.png" alt="down-arrow"/>
        </div>
      </div>
  )
}

export default Outage