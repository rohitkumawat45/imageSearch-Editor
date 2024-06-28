import React from 'react'
import { NavLink } from 'react-router-dom';

const ImagePages = ({currentPage,setCurrentPage,totalLength}) => {
    const recordsPerPage =20;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
  
    const npage = Math.ceil(totalLength/ recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const perPage = () => {
        if (currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      };
      const changeCpage = (n) => {
        setCurrentPage(n);
      };
      const nextPage = () => {
        if (currentPage !== npage) {
          setCurrentPage(currentPage + 1);
        }
      };
  return (
    <>
         <nav>
            <ul className="pagination d-flex justify-content-end me-1 my-3 pagination-iteam">
              <li className="page-item">
                <NavLink
                  to=""
                  className={`page-link${currentPage === 1 ? "back" : ""}`}
                  onClick={perPage}
                >
                  {currentPage === 1 ? "" : <>PrevPage</>}{" "}
                </NavLink>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={i}
                >
                  <NavLink
                    to=""
                    className="page-link"
                    onClick={() => changeCpage(n)}
                  >
                    {n}
                  </NavLink>
                </li>
              ))}
              <li className="page-item">
                <NavLink
                  to=""
                  className={`page-link${
                    currentPage === numbers.length ? "next" : ""
                  }`}
                  onClick={nextPage}
                >
                  {currentPage === numbers.length ? "" : <>NextPage</>}
                </NavLink>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default ImagePages