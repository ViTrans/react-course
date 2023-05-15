// eslint-disable-next-line react/prop-types
const Cell = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="w-[200px] h-[200px] border">
      {value}
    </div>
  );
};

export default Cell;
