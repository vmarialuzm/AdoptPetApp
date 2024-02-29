export const BlogCard = ({ publicacion }) => {
  console.log(publicacion.user)
  return (
    <div className="border border-white">
        <div>
          <img className="h-64" src={publicacion.image} alt="imagen" />
        </div>

        <div className="p-6">
          <p className="text-white">{publicacion.user}</p>
          <span className="text-white">{publicacion.date}</span> <span className="text-white">{publicacion.minutes}</span>
          <h1 className="text-js uppercase text-xl font-semibold line-clamp-3">{publicacion.title}</h1>
          <p className="text-white line-clamp-3">{publicacion.content}</p>
        </div>

    </div>
  )
}
