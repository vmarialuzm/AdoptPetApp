import axios from 'axios';

const blogApi = axios.create({
    baseURL: "http://127.0.0.1:8000/blogs/",
});

export const getAllBlog = () => blogApi.get("blog/");