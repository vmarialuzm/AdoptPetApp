export const Login = () => {
  return (
    <div className="max-w-xl mx-auto">
        <h1>Login</h1>
        <form action="">
            <input 
                type="text" 
                placeholder="email" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />

            <input 
                type="password" 
                placeholder="password" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            />
            
            <button 
                type="submit"
                className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                Iniciar Sesión
            </button>
        </form>
    </div>
  )
}
