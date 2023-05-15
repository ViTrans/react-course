import Cell from "./Cell";

// eslint-disable-next-line react/prop-types
const Board = ({ board, onCellClick }) => {
  return (
    <div className="grid w-full grid-cols-3 ">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;
