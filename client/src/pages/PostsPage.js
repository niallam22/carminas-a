import { useEffect, useState } from "react";
import Post from "../Post";
import ReactPaginate from "react-paginate";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const postsPerPage = 5;

  useEffect(() => {
    const skip = currentPage * postsPerPage;
    const limit = postsPerPage;
    fetch(`/post?skip=${skip}&limit=${limit}`)
      .then((response) => response.json())
      .then(({ posts, pagination }) => {
        setPosts(posts);
        setPageCount(Math.ceil(pagination.totalPages ));
        console.log('pagination.totalPages: ',pagination.totalPages)
      });
  }, [currentPage]);
  

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * postsPerPage;

  // const currentPosts = posts.slice(offset, offset + postsPerPage).map((post) => (
  //   <Post key={post._id} {...post} />
  // ));
  const currentPosts = posts.map((post) => (
    <Post key={post._id} {...post} />
  ));
  

  return (
    <>
      <section id="" className="blogHero main style1 dark">
        <div className="blogHeader content">
          <header>
            <h2>Anne's Blog</h2>
          </header>
          <span>Anne: "Step into my world"</span>
        </div>
      </section>

      <div className="postsContainer">
      {posts.length > 0 ? currentPosts : ''}
    </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
        
