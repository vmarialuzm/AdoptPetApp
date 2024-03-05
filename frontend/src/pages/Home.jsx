import { PetCard } from "../components/PetCard"
import { useEffect, useState } from "react"
import { getAllPets } from "../api/pets.api"

export const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function loadPets() {
      const res = await getAllPets();
      setPets(res.data.results);
    }
    loadPets();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto px-24">

      <div className="col-span-1 text-white">
        <h1 className="text-2xl font-semibold py-4">Filtrar por</h1>
        <hr />

        <div className="flex justify-between cursor-pointer">
          <span className="pt-4">Edad </span>
          <span className="pt-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>
        </div>
        
        <ul className="py-4">
          <li className="cursor-pointer"><input type="checkbox" /> 1-3 años</li>
          <li className="cursor-pointer"><input type="checkbox" /> 4-7 años</li>
          <li className="cursor-pointer"><input type="checkbox" /> 7 + años</li>
        </ul>
        <hr />

        <div className="flex justify-between cursor-pointer">
          <span className="pt-4">Tamaño</span>
          <span className="pt-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>
        </div>

        <ul className="py-4">
          <li className="cursor-pointer"><input type="checkbox" /> Pequeño</li>
          <li className="cursor-pointer"><input type="checkbox" /> Mediano</li>
          <li className="cursor-pointer"><input type="checkbox" /> Grande</li>
        </ul>
        <hr />

        <div className="flex justify-between cursor-pointer">
          <span className="pt-4">Sexo</span>
          <span className="pt-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>
        </div>       

        <ul className="py-4">
          <li className="cursor-pointer"><input type="checkbox" /> Hembra</li>
          <li className="cursor-pointer"><input type="checkbox" /> Macho</li>
        </ul>
        <hr />
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-3 ">
          {pets.map(pet => (
            <PetCard key={pet.id} pet={pet}/>
          ))}
        </div>
      </div>

    </div>

  );
}
