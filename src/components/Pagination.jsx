import React from "react";

export default function Pagination({postsPerPage, totalPosts, paginate}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // if (totalPosts <= 3) {
  //   setPageNumbers([]);
  // }

  console.log(totalPosts);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num} className="page-item" onClick={() => paginate(num)}>
            {num}
          </li>
        ))}
      </ul>
    </nav>
  );
}
