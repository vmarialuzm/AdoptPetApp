export const PetCard = ({ pet }) => {
  return (
    <div>
        <img src={pet.image} alt={pet.name} />
        <h1>{pet.name}</h1>
        <p>Raza: {pet.breed}</p>
        <p>Tamaño: {pet.size}</p>
        <p>Género: {pet.gender}</p>
        <p>Edad: {pet.age}</p>
    </div>
  )
}
