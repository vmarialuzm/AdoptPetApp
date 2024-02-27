export const PetCard = ({ pet }) => {
  return (
    <>
        <div className="flex flex-row">
          <div className="basis-1/3">
            <img src={pet.image} alt={pet.name} />
            <h1>{pet.name}</h1>
            <button className="bg-sky-500 hover:bg-sky-700 rounded px-6 py-2">Adoptar</button>
          </div>
        </div>
    </>

  )
}
