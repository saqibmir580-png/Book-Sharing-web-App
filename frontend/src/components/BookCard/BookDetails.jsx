import React from 'react';
import { useParams } from 'react-router-dom';
import'./BookCard.css'
const BookDetails = ({ books }) => {
  return (
    <div className="book-details-page">
      <img src={books.image} alt={books.title} className="details-img" />
      <div className="details-info">
        <h2>{books.title}</h2>
        <p>{books.description}</p>
        <p><strong>Price:</strong> ₹{books.price}</p>
        <p><strong>Owner:</strong> {books.owner}</p>
        <p><strong>Honesty Rating:</strong> {books.rating}</p>
        <div className="card-buttons">
          <button onClick={() => alert('Chat with owner')} className="chat-btn">Chat with Owner</button>
          <button onClick={() => alert('Redirect to Payment')} className="buy-btn">Pay Online</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
