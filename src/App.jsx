import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [query, setQuery] = useState(
    JSON.parse(localStorage.getItem("query")) || "Nature"
  );

  // Function to handle button clicks and update the query
  const handleButtonClick = (newQuery) => {
    setQuery(newQuery);
    localStorage.setItem("query", JSON.stringify(newQuery));
    navigate(`/${newQuery}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-6xl mt-20 text-blue-700 font-bold">SnapShot</h1>
      <Search />
      <div className="flex gap-2 mt-10">
        {/* Buttons to change the query */}
        <button
          value="Mountain"
          className="p-2 bg-blue-900 text-white"
          onClick={() => handleButtonClick("Mountain")}
        >
          Mountain
        </button>
        <button
          value="Beaches"
          className="p-2 bg-blue-900 text-white"
          onClick={() => handleButtonClick("Beaches")}
        >
          Beaches
        </button>
        <button
          value="Birds"
          className="p-2 bg-blue-900 text-white"
          onClick={() => handleButtonClick("Birds")}
        >
          Birds
        </button>
        <button
          value="Food"
          className="p-2 bg-blue-900 text-white"
          onClick={() => handleButtonClick("Food")}
        >
          Food
        </button>
      </div>
      <Routes>
        <Route
          path={`/${query}`}
          element={
            <div>
              <Link to="/">Back to Home</Link>
              <Gallery query={query} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
