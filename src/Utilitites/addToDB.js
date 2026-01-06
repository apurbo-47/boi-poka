const getStoredBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This id already exists");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredBook };
