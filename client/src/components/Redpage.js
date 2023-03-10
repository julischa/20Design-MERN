import { useContext, useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { AuthContext } from "../context/AuthContext";
import CreateContent from "../pages/CreateContent";

function Redpage() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllPosts = async () => {
      const { data } = await axios.get("http://localhost:5002/api/posts/all");

      if (data) {
        setPosts(data.allPosts);
      }
    };

    fetchAllPosts();
  }, []);

  useEffect(() => {
    const { search } = queryString.parse(window.location.search); // parse search query parameter from URL
    setSearchQuery(search);
  }, []);

  const filteredPosts = searchQuery
    ? posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  const reversedPosts = [...filteredPosts].reverse(); // make a copy of the filtered posts array and reverse it

  return (
    <>
      {user && (
        <h2 className="text-center my-5">Welcome back, {user.userName} ❤️‍🔥</h2>
      )}
      <div className="pin_container">
        {reversedPosts.length > 0 &&
          reversedPosts.map((singlePost, index) => {
            const cardHeight =
              index % 4 === 0
                ? "var(--card_large)"
                : index % 3 === 0
                ? "var(--card_med)"
                : "var(--card_small)";
            return (
              <article
                key={singlePost._id}
                className="card"
                style={{ height: cardHeight }}
              >
                <div className="redpost-image-wrap">
                  <img
                    className="redpost-image"
                    src={singlePost.picture}
                    alt={singlePost.title}
                  />
                  <div className="redpost-overlay">
                    <p className="text-center">{singlePost.title}</p>
                    <p className="text-center">{singlePost.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </>
  );
}

export default Redpage;
