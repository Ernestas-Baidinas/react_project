export const fetchBooks = async () => {
  try {
    const response = await fetch("/data/books.json");
    if (!response.ok) throw new Error("Failed to fetch books.");
    const data = await response.json();
    return data.map(book => ({ ...book, reserved: false }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateBookStatus = async (index, reserved) => {
  console.log(`Updated book index ${index} to reserved: ${reserved}`);
};

export const addBook = async (newBook) => {
  console.log("Added new book:", newBook);
};
