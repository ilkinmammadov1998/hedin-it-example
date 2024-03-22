import CarsComponent from "./components/cars";
import { getCarsData, getDistinctCarTypes } from "../../utils";

export default async function Home() {
  const allCars = await getCarsData();
  const carTypes = await getDistinctCarTypes(allCars);
  return (
    <main className="bg-white">
      <CarsComponent allCars={allCars} carTypes={carTypes}></CarsComponent>
    </main>
  );
}
