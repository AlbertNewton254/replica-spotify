import React from 'react';

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <a href="#" className="cards">
      <div className="cards">
        <img src={image} alt={title} />
        <span>{title}</span>
      </div>
    </a>
  );
};

export default Card;