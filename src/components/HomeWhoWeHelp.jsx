import React, {useState, useEffect} from "react";
import data from "../data";
import Pagination from "./Pagination";
import decoration from "../assets/Decoration.svg";

export default function HomeWhoWeHelp() {
  const [posts, setPosts] = useState(data.fundations);
  const [postsItems, setPostsItems] = useState(posts.items);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const showFundations = () => {
    setPosts(data.fundations);
    setCurrentPage(1);
  };
  const showOrganizations = () => {
    setPosts(data.organizations);
    setCurrentPage(1);
  };
  const showLocalcollections = () => {
    setPosts(data.localcollections);
    setCurrentPage(1);
  };

  useEffect(() => {
    const showFundations = async () => {
      setPostsItems(posts.items);
    };
    showFundations();
  }, [posts]);

  const idxOfLastPost = currentPage * postsPerPage;
  const idxOfFirstPost = idxOfLastPost - postsPerPage;
  const currentPosts = postsItems.slice(idxOfFirstPost, idxOfLastPost);
  const totalPosts = postsItems.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="whodowehelp" className="whodowehelp">
      <h2 className="whodowehelp-header">Komu pomagamy?</h2>
      <img
        src={decoration}
        className="decoration-line"
        alt="linia dekoracyjna"
      ></img>
      <div className="whodowehelp-buttons">
        <button className="btn btn-whodowehelp" onClick={showFundations}>
          Fundacjom
        </button>
        <button className="btn btn-whodowehelp" onClick={showOrganizations}>
          Organizacjom
          <br />
          pozarządowym
        </button>
        <button className="btn btn-whodowehelp" onClick={showLocalcollections}>
          Lokalnym
          <br />
          zbiórkom
        </button>
      </div>
      <WhoDoWeHelp posts={posts} currentPosts={currentPosts} />
      {totalPosts > 3 && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      )}
    </section>
  );
}

function WhoDoWeHelp({posts, currentPosts}) {
  return (
    <>
      {posts && (
        <>
          <p className="posts-description">{posts.description}</p>
        </>
      )}

      {currentPosts && (
        <>
          {currentPosts.map((post, i) => (
            <div className={`posts-list post${i + 1}`} key={i}>
              <div className="post-headers">
                <h1 className="post-title">{post.title}</h1>
                <h2 className="post-subtitle">{post.subtitle}</h2>
              </div>
              <span className="post-things">{post.things}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}
