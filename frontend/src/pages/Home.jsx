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
    <div>
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet}/>
      ))}
    </div>
  );
}
