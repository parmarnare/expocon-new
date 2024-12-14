const Banner = () => {
  return (
    <div className="md:mt-10 mt-0">
      {/* <div className="md:pt-14 pt-52  bg-banner bg-contain md:bg-cover bg-center  bg-no-repeat md:h-56 h-4 w-full"></div> */}

      <img
        className="mt-16 md:mt-24 w-full md:h-72 h-40"
        src={`${process.env.REACT_APP_API}/event/latest-banner`}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
