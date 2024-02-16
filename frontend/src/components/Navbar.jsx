import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <header className="bg-amber-400">
            <div className="flex h-16 items-center justify-between">
                <button className="text-slate-500 hover:text-slate-900">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>

                <button>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-cat" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path 
                            stroke="none" 
                            d="M0 0h24v24H0z" 
                            fill="none"/>
                        <path 
                            d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" /><path d="M2 16h5l-4 4" /><path d="M22 16h-5l4 4" /><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M9 11v.01" /><path d="M15 11v.01" /></svg>
                </button>

                <Link to='/signin'>signin</Link>
                <Link to='/login'>login</Link>
                <div>
                    <button>theme</button>
                    <button>user</button>
                </div>
            </div>
        </header>
    </>
  )
}
