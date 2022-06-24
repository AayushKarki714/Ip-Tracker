import React, { useState } from "react";
import { IconArrow } from "./Icon";

function isValidIP(str) {
  const octet = "(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)";
  const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
  return regex.test(str);
}

function SearchInput({ setData }) {
  const [value, setValue] = useState("");

  async function fetchData() {
    const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_w7jGh2pHti0KDy2qK1eB0eYGDGUHG&ipAddress=${value}`;
    const res = await fetch(API_URL);
    const json = await res.json();
    setData(json);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const ipFlag = isValidIP(value.trim(""));
    if (!value || !ipFlag) {
      return alert("Please Enter a Valid Ip Address");
    }
    fetchData();
    setValue("");
  };

  return (
    <form className="flex justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-[500px] px-3 rounded-l-md focus:outline-none text-black"
        placeholder="Search for any IP address or domain"
      />
      <button
        type="submit"
        className=" bg-[#2b2b2b] p-3 rounded-r-md"
        onClick={formSubmitHandler}
      >
        <IconArrow />
      </button>
    </form>
  );
}

export default SearchInput;
