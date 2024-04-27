import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [val, setVal] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState({});
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();
  const getRecipe = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${val}`
      );
      const data = await res.json();

      if (data && data?.data?.recipes && data?.data?.recipes.length > 0) {
        setRecipes(data?.data?.recipes);
        setLoading(false);
        setVal("");
        navigate("/");
      }
    } catch (err) {
      // console.log(err);
      setLoading(false);
      return <h3>Oops! Error occured. Please try again.</h3>;
    }
  };
  const addToFav = (favitem) => {
    let newFavorites = [...favorites];
    let index = newFavorites.indexOf(favitem);
    console.log(index);
    if (index === -1) {
      newFavorites.push(favitem);
    } else {
      newFavorites = newFavorites.filter((item) => {
        return item.id !== favitem.id;
      });
    }
    console.log(favitem);
    setFavorites(newFavorites);
  };
  console.log("fav: ", favorites);
  //https://forkify-api.herokuapp.com/api/v2/recipes
  return (
    <GlobalContext.Provider
      value={{
        val,
        setVal,
        getRecipe,
        recipes,
        loading,
        setLoading,
        recipeDetail,
        setRecipeDetail,
        favorites,
        addToFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
