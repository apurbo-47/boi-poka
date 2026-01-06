import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);

  return (
    <div>
      <h1 className="text-4xl text-center text-[#50B1C9] font-bold p-6 mt-24 mb-12">
        Books
      </h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
