const Header = () => {
    return (
        <header className='shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px]'>
            <div className='flex flex-wrap items-center gap-4'>
                <a href="/"><img src="logo.png" alt="logo" className='w-[15rem]' /></a>
                <div className='flex ml-auto lg:order-1'>
                    <button className='px-5 py-2 text-sm text-white border-2 border-[#FF5958] bg-[#FF5958] hover:bg-transparent hover:text-[#FF5958]'>Login</button>
                    <button className='px-5 py-2 text-sm text-white border-2 border-[#FF5958] bg-[#FF5958] hover:bg-transparent hover:text-[#FF5958] ml-4'>Sign up</button>
                </div>
                <ul className='flex lg:ml-12 lg:space-x-4 max-lg:space-y-2 max-lg:block max-lg:w-full'>
                    <li className='max-lg:bg-[#FF5958] max-lg:py-2 px-3'>
                        <a href='/'
                            className='lg:hover:text-[#FF5958] text-[#FF5958] max-lg:text-white block text-[15px]'>Home</a>
                    </li>
                    <li className='max-lg:py-2 px-3'><a href='#'
                        className='lg:hover:text-[#FF5958] text-black block text-[15px]'>Blog</a>
                    </li>
                    <li className='max-lg:py-2 px-3'><a href='#'
                        className='lg:hover:text-[#FF5958] text-black block text-[15px]'>About</a>
                    </li>
                    <li className='max-lg:py-2 px-3'><a href='#'
                        className='lg:hover:text-[#FF5958] text-black block text-[15px]'>Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Header