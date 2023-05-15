import { useState } from "react";
import Board from "./Board";

const initialBoard = Array(9).fill("");
const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const hanldeCellClick = (index) => {
    if (board[index] === "" && !winner) {
      // kiểm tra xem ô được click có giá trị hay không
      console.log(board);
      const newBoard = [...board]; // sao chép board cũ sang board mới
      newBoard[index] = currentPlayer; // gán giá trị mới cho ô được click
      setBoard(newBoard); // cập nhật board mới
      if (checkWinner(newBoard, currentPlayer)) {
        // kiểm tra xem người chơi hiện tại đã thắng hay chưa
        setWinner(currentPlayer); // nếu thắng thì cập nhật winner
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X"); // nếu chưa thắng thì đổi người chơi
      }
    }
  };
  const checkWinner = (board, player) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningConditions) {
      const [a, b, c] = combination;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="w-[500px]">
      <h1>Tic Tac Toe</h1>
      {winner && <h2>{winner} is the winner</h2>}
      <Board board={board} onCellClick={hanldeCellClick}></Board>
      <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
        Restart Game
      </button>
    </div>
  );
};

export default Game;
