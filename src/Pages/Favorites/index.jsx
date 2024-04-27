import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mt-[30px] ">
      {favorites && favorites.length > 0 ? (
        favorites?.map(function (item) {
          return <RecipeItem key={item?.id} item={item} />;
        })
      ) : (
        <h1 className="text-2xl text-center font-bold">No Favorites!</h1>
      )}
    </div>
  );
};

export default Favorites;
