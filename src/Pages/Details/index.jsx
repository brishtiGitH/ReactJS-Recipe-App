import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context";

const Details = () => {
  const [pending, setPending] = useState(false);
  const params = useParams();
  const { recipeDetail, setRecipeDetail, addToFav, favorites } =
    useContext(GlobalContext);
  // console.log(params); //{itemid:5625657176868fffasfe}

  async function getRecipeItem() {
    try {
      setPending(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.itemid}`
      );
      const data = await res.json();
      if (data) {
        setRecipeDetail(data?.data?.recipe);
        setPending(false);
      }
    } catch (err) {
      setPending(false);
      return <h2 className="text-lg font-bold">Oops! Error occured. </h2>;
    }
  }

  useEffect(function () {
    getRecipeItem();
  }, []);
  if (pending) {
    return <h2 className="text-lg font-bold text-center">Recipe Loading.. </h2>;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-center p-10 gap-10">
      <div className="img rounded-xl bg-cover w-96 border-2 overflow-hidden hover:bg-[length:200px_100px]">
        <img
          className="w-full h-full "
          src={recipeDetail?.image_url}
          alt={recipeDetail?.title}
        />
      </div>
      <div className="item">
        <h2 className="text-2xl font-bold">{recipeDetail?.title}</h2>
        <button
          onClick={() => addToFav(recipeDetail)}
          className="bg-stone-800 text-white py-2 px-5 font-semibold rounded-lg text-sm mt-3 mb-3"
        >
          {favorites.includes(recipeDetail)
            ? "Remove as Favorites"
            : " Add to Favorites"}
        </button>
        <p>
          <b className="text-lg">Serving- </b>
          {recipeDetail.servings}
        </p>
        <h2 className="text-lg font-semibold">Ingredients: </h2>
        {recipeDetail?.ingredients?.map((item) => {
          return (
            <div>
              <h2>
                {item.quantity} {item.unit} {item.description}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
