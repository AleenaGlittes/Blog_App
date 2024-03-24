import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/blog/");
                setBlogs(res.data.blogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    console.log("kkk", blogs);

    return (
        <div>
            {blogs && blogs.map((blog, index) => (
                <Blog 
                    key={index} 
                    title={blog.title} 
                    description={blog.description} 
                    imageURL={blog.imageURL} 
                    userName={blog.user.name} 
                />
            ))}
        </div>
    );
}

export default Blogs;
