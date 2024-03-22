const Footer = () => {
    return <footer className="bg-white py-5 sm:px-16 px-10">
        <div className="lg:flex lg:justify-between lg:items-cente max-lg:text-center">
            <p className="text-black">© 2024 Ilkin</p>
            <ul className="flex space-x-6 gap-y-2 max-lg:mt-4 max-lg:justify-center flex-wrap">
                <li><a href="#" className="text-black">Home</a></li>
                <li><a href="#" className="text-black">About</a></li>
                <li><a href="#" className="text-black">Contact</a></li>
            </ul>
        </div>
    </footer>
}

export default Footer