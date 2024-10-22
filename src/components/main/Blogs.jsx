import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddedBM, handleReadTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div>
                {blogs.map(blog => <Blog
                    handleAddedBM={handleAddedBM}
                    handleReadTime={handleReadTime}
                    key={blog.id}
                    blog={blog}
                ></Blog>)}
            </div>
        </div>
    );
};
Blogs.proptypes = {
    handleAddedBM: PropTypes.func
}

export default Blogs;