import React from "react";
import ClockImg from "../assets/clock.svg"
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const categoryStyles = {
    Entrees: { backgroundColor: "#f0f5c4", color: "#59871f" },
    Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
    Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
    Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
    Sides: { backgroundColor: "#feefc9", color: "#d16400" },
    Drinks: { backgroundColor: "#ffeae3", color: "#f0493e" },
    // Add more categories and their styles here
    default: { backgroundColor: "#fff", color: "#000" },
  };

  const getCategoryStyle = (category) => {
    return categoryStyles[category] || categoryStyles.default;
  };

  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <div className="container flex justify-center md:justify-start">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img className="rounded-t-lg" src={item?.thumbnail_image} alt="" />
          <div className="py-6 px-5 rounded-lg bg-white">
            <Link to={`/items/${item._id}`}>
            <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">
              {item?.name}
            </h1>
            </Link>
            

            {/* category & reading time */}
            <div className="flex justify-between items-center flex-wrap">
              <button
                className="mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>
              <div className="flex items-center py-2 mt-6">
                <img
                  src={ClockImg}
                  loading="lazy"
                  alt=""
                  className="recipe-icon small"
                />
                <div className="ml-1">30 minutes</div>
              </div>
            </div>
          </div>
          <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
            <span className="text-md">{item?.more?.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
