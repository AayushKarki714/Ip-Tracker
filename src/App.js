import React, { useState } from "react";
import Details from "./components/Details";
import SearchInput from "./components/SearchInput";
import Map from "./components/Map";

function App() {
  const [data, setData] = useState({
    ip: "192.70.91.255",
    location: {
      country: "FR",
      region: "Île-de-France",
      city: "Rocquencourt",
      lat: 48.83783,
      lng: 2.10228,
      postalCode: "78150",
      timezone: "+02:00",
      geonameId: 2983174,
    },
    as: {
      asn: 2200,
      name: "FR-RENATER",
      route: "192.70.0.0/17",
      domain: "renater.fr",
      type: "Educational/Research",
    },
    isp: "Renater",
  });

  return (
    <div className="font-Rubik min-h-screen flex flex-col">
      <div className="flex flex-col items-center h-[250px] relative bg-[url('../../public/img/pattern-bg.png')] bg-cover bg-center  text-white">
        <h1 className="text-2xl mt-9 mb-5">IP Address Tracker</h1>
        <SearchInput setData={(val) => setData(val)} />
        <Details data={data} />
      </div>
      <Map data={data} />
    </div>
  );
}

export default App;
