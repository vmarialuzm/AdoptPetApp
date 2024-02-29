import { BlogCard } from "../components/BlogCard"

export const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
  )
}
