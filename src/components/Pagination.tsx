import { useState, useEffect } from "react";
export default function Pagination() {
    type Product = {
        id: number;
        title: string;
        thumbnail: string;
      };
  const [source, setSource] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currNumEnd, setCurrNumEnd] = useState<number>(3);
  const [currNumStart, setCurrNumStart] = useState<number>(1);
  async function fetchData() {
    const data1 = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data1.json();
    setSource(json.products);
  }
  const PAGE_SIZE = 4;
  const noOfPages = Math.ceil(source.length / PAGE_SIZE);
  const start = currentPage * 10;
  const end = start + PAGE_SIZE;

  function handleClick(key:number) {
    setCurrentPage(key);
  }

  function next() {
    if (currNumEnd <= noOfPages) {
      setCurrNumEnd(currNumEnd + 3);
      setCurrNumStart(currNumStart + 3);
    }
  }

  function prev() {
    if (currNumEnd > 3) {
      setCurrNumEnd(currNumEnd - 3);
      setCurrNumStart(currNumStart - 3);
    }
  }

  const pageNumbers = function pages() {
    const arr = [];
    for (
      let i = currNumStart;
      currNumEnd > 20 ? i <= noOfPages : i <= currNumEnd;
      i++
    ) {
      arr.push(
        <span
          key={i}
          className={`page ${currentPage === i - 1 ? "activePagination" : ""}`}
          onClick={() => handleClick(i - 1)}
        >
          {i}
        </span>
      );
    }
    return arr;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="PaginationMain">
      <h1>Pagination</h1>
      <div className="navigation">
        <span className="button" onClick={prev}>
          prev
        </span>
        {pageNumbers()}
        <span className="button" onClick={next}>
          next
        </span>
      </div>
      <div className="products-container">
        {source.slice(start, end).map((product) => (
          <div key={product.id} className="mini-container">
            <img
              className="image"
              src={product.thumbnail}
              alt={product.title}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
