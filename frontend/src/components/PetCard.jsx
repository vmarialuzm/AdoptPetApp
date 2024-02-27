export const PetCard = ({ pet }) => {
  return (
    <>

        <div className="bg-purple-500 flex flex-col items-center">

          <div>
            <img className="p-4 w-64 h-64" src={pet.image} alt={pet.name} />
          </div>

          <div>
            <h1 className="text-white font-bold text-2xl text-center">{pet.name}</h1>
            <button className="bg-js hover:bg-gray-300 rounded-full px-12 py-2 text-blue-900 font-bold">Adoptar</button>
          </div>
            
        </div>

    </>

  )
}
