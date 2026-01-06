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
      <div className="card shadow-sm p-6 ">
        <figure className="p-5 bg-gray-100 w-2/3 mx-auto  ">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>

          <h2 className="card-title justify-center ">
            {bookName}
            <div className="badge badge-secondary justify-end">
              {yearOfPublishing}
            </div>
          </h2>
          <p className="font-medium text-sm text-[#13131380] text-center">
            By : {author}
          </p>

          <div className="border-t-1 border-dashed "></div>

          <div className="card-actions justify-center">
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
