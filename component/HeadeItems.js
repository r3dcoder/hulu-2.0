function HeadeItem ({Icon, title}) {
    return (
        <div className=" flex flex-col group items-center cursor-pointer w-12 sm:w-20  transform transition duration-100 hover:scale-125 ">
            <Icon className=' w-8   mb-1   hover:animate-wiggle'/>
            
            <p className=' group-hover:opacity-100   opacity-0 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeadeItem
