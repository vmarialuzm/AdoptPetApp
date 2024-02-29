export const BlogCard = ({ publicacion }) => {
  return (
    <div>
        <img src={publicacion.image} alt="imagen" />
        <p>{publicacion.user_id}</p>
        <p>{publicacion.date}</p>
        <p>{publicacion.minutes}</p>
        <h1>{publicacion.title}</h1>
        <p>{publicacion.content}</p>
    </div>
  )
}
