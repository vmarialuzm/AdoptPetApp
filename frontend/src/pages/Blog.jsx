import { BlogCard } from "../components/BlogCard"
import { useEffect, useState } from "react"
import { getAllBlog } from "../api/blog.api"

export const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function loadBlog() {
      const res = await getAllBlog();
      setBlog(res.data.results);
    }
    loadBlog();
  }, []);

  return (
    <div className="container mx-auto px-24">
      <h1 className="text-white py-12 text-center font-bold text-2xl">Blog</h1>
      <div className="text-white py-6 flex flex-grow justify-between font-semibold text-xl">
        <h2>Todos</h2>
        <h2>Adopción</h2>
        <h2>Tenencia Responsable</h2>
        <h2>Lifestyle</h2>
        <h2>Más</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {blog.map(publicacion => (
          <BlogCard key={publicacion.id} publicacion={publicacion}/>
        ))}
      </div>
    </div>

  )
}
