import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogGallery(){
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        const skip = 0
        const limit = 4
        fetch(`http://localhost:4000/post?skip=${skip}&limit=${limit}`)
          .then((response) => response.json())
          .then(({ posts, pagination }) => {
            setPosts(posts);
          });
      }, []);

      const currentPosts = posts.map((post) => (
        <BlogCard key={post._id} {...post} />
      ));

    return (

        <section id="blogGallery" className="main style2">
        <div className="content box">
            <header>
                <h2 id="blogHeading">Blog</h2>
            </header>
            
            <div className="cardContainer">
                {currentPosts}
            </div>
            <div>
                <Link to="/posts" className="button style2 link">See more</Link> 
            </div>
            
            
        </div>
    </section>
    )
}
