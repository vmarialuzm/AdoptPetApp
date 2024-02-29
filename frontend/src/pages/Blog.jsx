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
    <div className="grid grid-cols-3 gap-3 ">
      {blog.map(publicacion => (
        <BlogCard key={publicacion.id} publicacion={publicacion}/>
      ))}
    </div>
  )
}
