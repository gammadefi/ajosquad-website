import Image from "next/image"

const TeamCard = ({ name, role, image, description }: { name: string, role: string, image: string, description: string }) => {
  return (
    <div className="md:w-[400px] w-full h-full lg:w-[430px] bg-gradient-to-r drop-shadow-[14px_14px_4px_rgba(255,242,218,0.4)] from-[#23454F] via-[#0066FF] to-[#1EB7CF] rounded-xl p-0.5">
      <div className="bg-white h-full rounded-[calc(0.75rem-2px)] p-3 lg:p-5 space-y-4 2xl:space-y-6">
        <div className="flex items-center gap-2">
          <div className='h-14 w-14 rounded-full'>
            <Image src={image} alt={name} className='w-full h-full rounded-full' />
          </div>
          <div>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-sm 2xl:text-base'>{role}</p>
          </div>
        </div>
        <p className='text-sm'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard