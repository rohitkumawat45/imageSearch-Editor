import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Pagnition from "./Pagnition";
const Home = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const [serachData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");
  const [total, setTotal] = useState("");
  // console.log("search",search)
//   useEffect(() => {
//     searchData();
//   }, [search, currentPage]);
  const searchData = () => {
    let apiUrl =
      "https://pixabay.com/api/?key=44575134-5341e3f59c4da493e0c1b23e4&q=" +
      search +
      "&image_type=photo&page=" +
      currentPage+"&per_page=100";
    axios
      .get(apiUrl)
      .then((response) => {
        setSearchData(response?.data?.hits);
        setTotal(response?.data?.totalHits);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-start">
          <h5>Name: </h5>
          <p className="mb-1 per-info">Kamlesh</p>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <h5>Email: </h5>
          <p className="mb-1 per-info">burikamlesh@gmail.com</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div  className="search-box" >
            <input
              className="from-control"
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch onClick={searchData} style={{cursor:"pointer"}}/>
          </div>
        </div>

        <div className="search-iteam">
          <div className="row">
            {serachData
              ? serachData?.map((item, i) => {
                  {
                    /* console.log("item",item) */
                  }
                  const { largeImageURL, previewURL } = item;
                  return (
                    <div className="col-3" key={i}>
                      <div className="card-iteam">
                        <img src={previewURL ? previewURL : ""} alt="card" />
                        <button
                          type="button"
                          className="btn btn-primary cart-buuton"
                          onClick={() =>
                            navigation("/add-caption", {
                              state: { imageurl: largeImageURL },
                            })
                          }
                        >
                          Add Caption
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        {/* <Pagnition
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalLength={total}
        /> */}
      </div>
    </>
  );
};

export default Home;
