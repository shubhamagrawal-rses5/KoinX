import React from "react";

function Pagination({ pageNo, setPageNo }) {
  const pageNumbers = [];

  for (let i = 1; i <= 8; i++) {
    pageNumbers.push(i);
  }

  function previous() {
    let newpageNo = pageNo - 1;
    setPageNo(newpageNo);
  }
  function next() {
    let newpageNo = pageNo + 1;
    setPageNo(newpageNo);
  }
  return (
    <footer className="footer-bg text-center text-lg-start fixed-bottom">
      <nav aria-label="Page navigation example navbar navbar-fixed-bottom">
        <ul className="pagination justify-content-end pagination-lg">
          <li className="page-item" disabled={pageNo <= 1}>
            <a className="page-link" href="!#" onClick={previous}>
              &laquo;
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => setPageNo(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
          <li className="page-item" disabled={pageNo >= 10}>
            <a className="page-link" href="!#" onClick={next}>
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Pagination;
