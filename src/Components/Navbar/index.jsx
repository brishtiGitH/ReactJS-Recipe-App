import { useContext } from "react";
import { GlobalContext } from "../../Context";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { val, setVal, getRecipe } = useContext(GlobalContext);
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <h1 className="text-xl lg:text-4xl font-bold text-amber-950">
        Gourmet Node
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getRecipe();
        }}
      >
        <input
          className="border py-1 px-2 lg:border-2 lg:px-5 lg:py-3 border-stone-700 rounded-md"
          type="text"
          name="search"
          value={val}
          id="seach"
          onChange={(event) => setVal(event.target.value)}
          placeholder="search any recipe.."
        />
      </form>
      <div className="flex w-48 justify-between">
        <Link to="/" className="font-semibold lg:text-lg ">
          Home
        </Link>
        <Link to="/favorites" className="font-semibold lg:text-lg">
          Favorites
        </Link>
      </div>
    </div>
  );
}
