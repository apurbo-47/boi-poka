import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utilitites/addToDB";
import Book from "../Pages/Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storeBookData = getStoredBook();
    const convertedStoredBook = storeBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }

    if (type === "ratings") {
      const sortedByRatings = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <div className="text-center p-5 ">
        <details className="dropdown ">
          <summary className="btn m-1 bg-green-400 border-hidden">
            sort by : {sort ? sort : ""}
          </summary>
          <ul className="menu dropdown-content text-white bg-[#50B1C9] rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center p-5 font-bold text-xl">
            Book i read : {readList.length}{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-center p-5 font-bold text-xl">My Wish List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readList.map((d) => (
              <Book key={d.bookId} singleBook={d}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
