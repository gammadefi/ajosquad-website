import Image from "next/image"

const TeamCard = ({ name, role, image, description }: { name: string, role: string, image: string, description: string }) => {
  return (
    <div className="bg-gradient-to-r drop-shadow-[14px_14px_4px_rgba(255,242,218,0.4)] from-[#23454F] via-[#0066FF] to-[#1EB7CF] rounded-xl p-0.5">
      <div className="bg-white rounded-lg p-3 lg:p-6 space-y-4 lg:space-y-8">
        <div className="flex items-center gap-2">
          <div className='h-14 w-14 rounded-full'>
            <Image src={image} alt={name} className='w-full h-full rounded-full' />
          </div>
          <div>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-sm lg:text-base'>{role}</p>
          </div>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard