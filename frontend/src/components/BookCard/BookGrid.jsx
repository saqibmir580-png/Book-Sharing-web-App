import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./BookCard.css'
const BookGrid = ({ books }) => {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      {books.map(book => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} className="book-img" />
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p className="price">₹{book.price}</p>
          <div className="card-buttons">
            <button onClick={() => alert('Chat with owner')} className="chat-btn">Chat</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
