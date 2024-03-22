"use client";

import { Car } from "../../../types";
import CarCard from "./car_card";
import { useState } from "react";

const SELECT_TYPE = "Select type"

interface CarsComponentProps {
    allCars: Car[];
    carTypes: any;
}

export default function CarsComponent({ allCars, carTypes }: CarsComponentProps) {
    const [selectedType, setSelectedType] = useState(SELECT_TYPE);

    const filteredCars = selectedType === SELECT_TYPE ? allCars :
        allCars.filter((car: Car) => car.vehicleType === selectedType);

    const handleSelectChange = (event: any) => {
        setSelectedType(event.target.value);
    };

    const renderJumbotron = () => {
        return (
            <div className="mb-10 bg-gray-100 text-[#333] px-8 py-8 w-full">
                <h1 className="text-xl">Check Out McQueen's Cool Cars!</h1>
                <p className="mt-4 text-sm">Discover an awesome selection of cars from McQueen's collection.
                    Each one has its own style and story.
                    Whether you like classics or modern rides, there's something for everyone here.
                    Take a look and enjoy the ride!</p>
            </div>
        )
    }

    return (
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full min-h-screen">
            {renderJumbotron()}
            <div className="w-max">
                <span className="mr-2">Filter:</span>
                <select id="carSelect" className="p-3" onChange={handleSelectChange}>
                    <option value={SELECT_TYPE}>{SELECT_TYPE}</option>
                    {carTypes?.map((typ: any) => (
                        <option key={typ} value={typ}>{typ}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredCars.map((car: Car) => (
                    <CarCard key={car.id} car={car}></CarCard>
                ))}
            </div>
        </div>
    )

}
