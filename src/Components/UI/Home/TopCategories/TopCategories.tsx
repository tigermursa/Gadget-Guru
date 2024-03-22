const TopCategories = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-semibold text-2xl ">Top Categories</h1>
        <p className="font-semibold text-sm text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fugit
          <br />
          facere iusto quasi harum quia sint similique, voluptatem minima quas.
        </p>
      </div>

      <div className="flex gap-2 justify-center mt-10 mb-10">
        <div className="bg-red-300 w-[250px] h-[350px]">
          <p>Hello world</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-red-300 w-[250px] h-[170px]">
            <p>Hello world</p>
          </div>
          <div className="bg-red-300 w-[250px] h-[170px]">
            <p>Hello world</p>
          </div>
        </div>

        <div className="bg-red-300 w-[250px] h-[350px]">
          <p>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
