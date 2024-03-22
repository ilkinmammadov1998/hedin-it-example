import React from 'react'
import { Car } from '../../../types'
import Link from 'next/link'

interface CarCardProps {
    car: Car
}

const CarCard = ({ car }: CarCardProps) => {
    return (
        <div className="bg-white p-2 cursor-pointer hover:-translate-y-2 transition-all relative">

            <div className="w-11/12 h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <img src="/images/carimage.jpg" alt="Product 3" className="h-full w-full object-contain" />
            </div>
            <div>
                <h3 className="text-lg font-bold">{car?.brand}</h3>
                <p className="text-md mt-2 mb-5">{car?.title}</p>

                <div className='flex items-center justify-between'>
                    <p className="text-sm mr-2">Car Type: {car?.vehicleType}</p>

                    <Link className='px-3 py-2 rounded text-sm border-2 border-[#FF5958] text-[#FF5958]'
                        href={`${car?.link?.href}?title=${encodeURIComponent(car?.link?.title)}`}>{car?.link?.title}
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default CarCard