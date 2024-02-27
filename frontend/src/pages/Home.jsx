import { PetCard } from "../components/PetCard"
import { useEffect, useState } from "react"
import { getAllPets } from "../api/pets.api"

export const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function loadPets() {
      const res = await getAllPets();
      console.log(res.data.results)
      setPets(res.data.results);
    }
    loadPets();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="bg-white col-span-1">
        <h1>Filtrar por</h1>
        <hr />
        <h2>Edad</h2>
        <h2>Tamaño</h2>
        <h2>Sexo</h2>
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-3 bg-white">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet}/>
          ))}
        </div>
      </div>

    </div>

  );
}
