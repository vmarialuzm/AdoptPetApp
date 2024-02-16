import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>

        <div className="flex py-3 items-center justify-between">
            <div>
                AdoptPetApp
            </div>
            <div className="space-x-4">
                <Link to='/signin'>signin</Link>
                <Link to='/login'>login</Link>
            </div>
        </div>

    </>
  )
}
