import React from 'react';
import Card from '../components/Card';
import Car1 from "../assets/images/car1.jpeg"
import Car2 from "../assets/images/car2.jpeg"
import Car3 from "../assets/images/car3.jpeg"
const Home = () => {
  const products = [
    {
      id: 1,
      image: Car1,
      name: 'Lamborghini',
      price: '$550,000',
      description: 'Description for Lamborghini',
    },
    {
      id: 2,
      image: Car2,
      name: 'Ford Mustang',
      price: '$31,740',
      description: 'Description for Ford Mustang',
    },
    {
        id: 3,
        image: Car3,
        name: 'Tesla',
        price: '$135,700',
        description: 'Description for Tesla',
      },
  ];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
