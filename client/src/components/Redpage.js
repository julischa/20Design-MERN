import { useEffect, useState } from "react";
import axios from "axios";
function Redpage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const { data } = await axios.get("http://localhost:5002/api/posts/all");

      if (data) {
        setPosts(data.allPosts);
      }
    };

    //call the fn
    fetchAllPosts();
  }, []);

  return (
    <div className="redpage">
      {posts.length > 0
        ? posts.map((singlePost) => {
            return (
              <article key={singlePost._id}>
                <h2>{singlePost._id}</h2>
                <p>{singlePost.description}</p>
              </article>
            );
          })
        : ""}
    </div>
  );
}

export default Redpage;
