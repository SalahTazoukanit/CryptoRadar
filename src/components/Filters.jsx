const Filters = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between w-2/3 md:w-full bg-[#1E2329] p-3 rounded-xl">
        <div className="">
          <input
            className="hidden "
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
          />
          <label
            className="hover:opacity-50 hover:cursor-pointer"
            htmlFor="stableCoin"
          >
            Avec stable coin
          </label>
        </div>
        <div className="hover:opacity-50 hover:cursor-pointer">
          <p>Aucune liste</p>
        </div>
        <div className="flex bg-[#1E2329] hover:opacity-50 hover:cursor-pointer">
          <p>Liste des favoris</p>
          {/* <img src="" alt="star icon" /> */}
        </div>
      </div>
    </>
  );
};
export default Filters;
