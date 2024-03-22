import axios from "axios";
import { Car } from "../types";

const API_URL = process.env.DATA_PROVIDER_URL || "http://localhost:8000";

export async function getCarsData() {
  try {
    const response = await axios.get(`${API_URL}/cars`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car data:", error);
    return [];
  }
}

export function getDistinctCarTypes(carsData: Car[]) {
  const carTypes = new Set();

  carsData.forEach((car) => {
    carTypes.add(car.vehicleType);
  });

  const carTypesList = Array.from(carTypes);

  return carTypesList;
}
