import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';

const Recipe = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/all-items`);
        setItems(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10  font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        All recipes
      </h1>
      <CategoryWrapper />
      <ul className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map(item => (
          <Card key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
