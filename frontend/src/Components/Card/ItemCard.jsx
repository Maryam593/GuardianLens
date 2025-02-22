import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center transition-transform duration-300">
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-gray-400">{item.desc}</p>
    </div>
  );
};

export default ItemCard;
