import React from "react";
import { useSelector } from "react-redux";
import { LANG } from "../../assets/const";

function Search() {
  const currentLanguage = useSelector((state) => state.language.language);
  const handleGptSearch = () => {};
  return (
    <div className="flex justify-center items-center py-4 ">
      <form
        className="flex items-center justify-between w-[32rem]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={
            LANG.find((el) => el.language === currentLanguage).placeholder
          }
          className="flex-grow bg-zinc-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={handleGptSearch}
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          {LANG.find((el) => el.language === currentLanguage).buttonText}
        </button>
      </form>
    </div>
  );
}

export default Search;
