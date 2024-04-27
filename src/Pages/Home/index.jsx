import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import RecipeItem from "../../Components/RecipeItem";

const Home = () => {
  const { recipes, loading } = useContext(GlobalContext);
  if (loading) {
    return (
      <h2 className="text-lg font-bold text-center">Recipes Loading.. </h2>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mt-[30px] ">
      {recipes && recipes.length > 0 ? (
        recipes?.map(function (item) {
          return <RecipeItem key={item?.id} item={item} />;
        })
      ) : (
        <h1 className="text-2xl text-center font-bold">
          Please search for any recipe
        </h1>
      )}
    </div>
  );
};

export default Home;
