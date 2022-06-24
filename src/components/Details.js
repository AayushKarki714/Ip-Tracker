function Details({ data }) {
  return (
    <div className=" w-2/3 p-6 flex  gap-8 justify-between absolute -bottom-10 bg-white rounded-xl drop-shadow-2xl z-[1000] ">
      {data.isp ? (
        <>
          <div>
            <h3 className="text-[#969696] font-semibold text-[10px] tracking-wider opacity-50 mb-2">
              IP ADDRESS
            </h3>
            <h2 className="text-[#2b2b2b] font-bold text-xl">{data.ip}</h2>
          </div>
          <div>
            <h3 className="text-[#969696] font-semibold text-[10px] tracking-wider opacity-50 mb-2">
              LOCATION
            </h3>
            <h2 className="text-[#2b2b2b] font-bold text-xl">
              {data.location.region},{data.location.country}
            </h2>
          </div>
          <div>
            <h3 className="text-[#969696] font-semibold text-[10px] tracking-wider opacity-50 mb-2">
              TIMZONE
            </h3>
            <h2 className="text-[#2b2b2b] font-bold text-xl">
              UTC{data.location.timezone}
            </h2>
          </div>
          <div>
            <h3 className="text-[#969696] font-semibold text-[10px] tracking-wider opacity-50 mb-2">
              ISP
            </h3>
            <h2 className="text-[#2b2b2b] font-bold text-xl">{data.isp}</h2>
          </div>
        </>
      ) : (
        <h1 className="text-black">Please Enter an IP Address</h1>
      )}
    </div>
  );
}

export default Details;
