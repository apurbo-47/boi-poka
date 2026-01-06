import React from "react";
import { BsListNested } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    bookId,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card shadow-sm p-6  rounded-2xl ">
        <figure className="p-5 bg-[#F3F3F3] rounded-2xl w-2/3 mx-auto  ">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-center font-medium text-base bg-[#23BE0A05] text-[#23BE0A] gap-10">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>

          <h2 className="card-title justify-center text-[#131313] text-xl font-bold ">
            {bookName}
            <div className="badge badge-secondary justify-end">
              {yearOfPublishing}
            </div>
          </h2>

          <p className="font-medium text-base text-[#13131380] text-center">
            By : {author}
          </p>

          <div className="border-t-2 border-dashed text-[#13131315] "></div>

          <div className="card-actions text-[#13131380] text-base font-medium justify-center">
            <div className="">{category}</div>
            <div className="badge badge-sm">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
