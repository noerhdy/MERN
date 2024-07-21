const ClickTitle = (props) => {
  const { titleName, titleText, titleText2 } = props;
  return (
    <>
      <div className="flex w-full text-[12px] items-center">
        <h2 className="font-semibold text-zinc-800 ">{titleName}</h2>
      </div>
      <div className="flex justify-end space-x-2  text-[12px] items-center">
        <p className="px-4 py-1 bg-zinc-200 text-zinc-500 rounded-md">
          {titleText}
        </p>
        <p className="px-4 py-1 bg-zinc-200 text-zinc-500 rounded-md">
          {titleText2}
        </p>
      </div>
    </>
  );
};

export default ClickTitle;