import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { addToStoredDB } from "../../Utilitites/addToDB";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });

    toast("Added to Read List");

    addToStoredDB(id);
  };

  return (
    <div className=" ">
      <div className="flex justify-around gap-20">
        <img className="w-80" src={image} alt="" />
        <div>
          <h5 className="text-4xl font-bold">{bookName}</h5>
          <ToastContainer />
          <p className="font-medium text-lg text-[#13131380] mt-4 mb-6">
            By : {author}
          </p>
          <div className="border-t-2 border-lime text-[#13131315] "></div>
          <div className="mt-4 mb-4 font-medium text-xl">{category}</div>
          <div className="border-t-2 border-line text-[#13131315] "></div>
          <p className="font-medium text-sm text-[#13131380] mt-6 mb-6">
            <span className="font-bold text-lg text-black">Review :</span>{" "}
            {review}
          </p>

          <div className="flex  gap-x-4 mb-6">
            <span className="text-base font-bold text-[#131313]"> Tag : </span>
            {tags.map((tag) => (
              <button className="text-[#23BE0A] font-medium text-base">
                # {tag}
              </button>
            ))}
          </div>
          <div className="border-t-2 border-line text-[#13131315] "></div>
          <div className="mt-6 mb-8 font-semibold text-base text-[#131313]">
            <p>
              <span className="text-md text-[#13131380]">
                Number of Pages :{" "}
              </span>
              {totalPages}
            </p>
            <p>
              <span className="text-md text-[#13131380]">Publisher : </span>{" "}
              {publisher}
            </p>
            <p>
              <span className="text-md text-[#13131380]">
                Year of Publishing :{" "}
              </span>
              {yearOfPublishing}
            </p>
            <p>
              <span className="text-md text-[#13131380]">Rating : </span>
              {rating}
            </p>
          </div>
          <div className="flex  gap-x-4 mt-6">
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn bg-white text-black"
            >
              Read
            </button>
            <button
              onClick={() => handleMarkAsRead(id)}
              className="btn bg-[#50B1C9] border-hidden"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
