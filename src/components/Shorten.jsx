import LinkCard from "./LinkCard";
import { useState } from "react";

const Shorten = () => {
  const [inputValue, setInputValue] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setError("Error: Please enter a URL.");
      return;
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(inputValue)) {
      setError("Error: Please enter a valid URL.");
      return;
    }

    setError("");
    alert("success");
  };
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          id="link-form"
          onSubmit={(e) => handleSubmit(e)}
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            id="link-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none "
            placeholder="Put Link here"
          />
          <button
            type="submit"
            className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten It
          </button>
          {/*Eror Message */}
          {error && (
            <div className="absolute left-7 bottom-3 text-red text-sm italic">
              {error}
            </div>
          )}
        </form>
        {/*Item */}
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </section>
  );
};
export default Shorten;
