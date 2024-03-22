'use client'

import { useSearchParams } from 'next/navigation'

const CarDetails = () => {

    const searchParams = useSearchParams()
    const title = searchParams.get('title')

    return (
        <div className="p-6 lg:max-w-6xl mx-auto min-h-screen">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2">
                <div className="w-full sm:flex gap-2">
                    <img src="/images/carimage.jpg" alt={"Product"} className="w-4/5 object-cover" />
                </div>
                <div>
                    <h2 className="text-lg font-extrabold">{title}</h2>

                    <div className="mt-3">
                        <h3 className="text-sm font-bold">Car description</h3>
                        <ul className="space-y-3 list-disc mt-4 text-sm">
                            Acceleration: Measure 0-60 mph (0-100 km/h) acceleration time.
                            Top Speed: Verify maximum achievable speed.
                            Handling: Evaluate agility, responsiveness, and stability through slalom and cornering tests.
                            Braking: Assess stopping distances from various speeds.
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CarDetails