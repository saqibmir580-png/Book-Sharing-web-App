import React from 'react'
import Navabar from '../components/Navabar'
import BookGrid from '../components/BookCard/BookGrid';

const Home = () => {
   const books = [
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/81pvhf2kJcL._SL1500_.jpg",
        title: "Atomic Habits",
        description: "A proven way to build good habits and break bad ones.",
        price: 499,
        rating: "⭐⭐⭐⭐⭐",
        owner: "John Doe",
      },
      {
        id: 2,
        image: "https://m.media-amazon.com/images/I/71UwSHSZRnS._SL1500_.jpg",
        title: "The Subtle Art of Not Giving a F*ck",
        description: "Live a good life by caring less.",
        price: 399,
        rating: "⭐⭐⭐☆☆",
        owner: "Jane Smith",
      },
      {
        id: 3,
        image: "https://m.media-amazon.com/images/I/71g2ednj0JL._SL1500_.jpg",
        title: "Rich Dad Poor Dad",
        description: "Learn what the rich teach their kids about money.",
        price: 275,
        rating: "⭐⭐⭐⭐☆",
        owner: "Robert",
      },
      {
        id: 4,
        image: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._SL1000_.jpg",
        title: "Think Like a Monk",
        description: "Train your mind for peace and purpose.",
        price: 359,
        rating: "⭐⭐⭐⭐⭐",
        owner: "Jay Shetty",
      },
    ];
  
  return (
    <>
    <Navabar/>
    <BookGrid books={books} />
   

    </>
  )
}

export default Home