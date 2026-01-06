import React from "react";
import bookimage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero  h-[450px] mt-12 mb-20 bg-gray-100 text-[black] ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={bookimage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h3 className="text-4xl font-bold mb-10">
            Books to freshen up <br /> your bookshelf
          </h3>

          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
