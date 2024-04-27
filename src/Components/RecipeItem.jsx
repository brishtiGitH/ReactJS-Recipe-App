import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center border-2  p-5 rounded-xl hover:border-gray-400 transition duration-300">
      <img
        className=" rounded-lg w-96 h-60 object-cover"
        src={item?.image_url}
        alt={item?.title}
      />
      <h1 className="text-lg font-semibold">{item?.title}</h1>
      <Link to={`/recipe-item/${item?.id}`}>
        <button className="bg-stone-800 text-white py-2 px-5 font-semibold rounded-lg text-sm">
          View Recipe
        </button>
      </Link>
    </div>
  );
};

export default RecipeItem;
