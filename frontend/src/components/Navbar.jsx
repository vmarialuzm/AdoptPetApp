import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white py-6 relative">
        <div className="container mx-auto flex">
          <div className="flex flex-grow">
            <img src="" alt="AdoptPetApp" />
          </div>
          
          <div className="flex flex-grow justify-between">
            <div>
              <Link className="lg:mr-7">Adopta</Link>
              <Link className="lg:mr-7">Club</Link>
              <Link className="lg:mr-7">Consultas</Link>
              <Link className="lg:mr-7">Blog</Link>
              <Link className="lg:mr-7">Nosotros</Link>
              <Link>Perros Perdidos</Link>
            </div>

            <div className="">
              <Link to='/signin' className="bg-js py-2.5 px-5 rounded-full lg:mr-4">Registrate</Link>
              <Link to='/login' className="text-yellow-400">Iniciar sesión</Link>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
