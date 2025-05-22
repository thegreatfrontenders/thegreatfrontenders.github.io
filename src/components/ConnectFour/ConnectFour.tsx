import React, { useState, useEffect } from 'react';
import CharacterSearchBar from '../UI/CharacterSearchBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


function Pos(props: { onClick: Function, row: number, col: number, play: number, bgImage?: string }) {
  const getStyle = () => {
    const baseStyle: React.CSSProperties = {
      width: "75px",
      height: "75px",
      borderRadius: "50%",
      border: "2px solid #1c61f2",
      display: "inline-block",
      margin: "4px",
      cursor: "pointer",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    if (props.play === 1 && props.bgImage) {
      return {
        ...baseStyle,
        backgroundImage: `url(${props.bgImage})`
      };
    }
    if (props.play === 1) baseStyle.backgroundColor = "#d9313d";
    if (props.play === 2) baseStyle.backgroundColor = "#fdc601";
    if (props.play === 0) baseStyle.backgroundColor = "white";
    return baseStyle;
  };

  return (
    <div
      id={`${props.row},${props.col}`}
      onClick={() => props.onClick(props.col)}
      style={getStyle()}
    />
  );
}
function ConnectFour() {
  const [message, setMessage] = useState("Let's Play!");
  const [validMoves, setValidMoves] = useState(0);
  const [canPlay, setCanPlay] = useState(true);

  const array2D = Array(6).fill(null).map(() => Array(7).fill(0));
  const [places, setPlaces] = useState([5, 5, 5, 5, 5, 5, 5]);
  const [board, setBoard] = useState(array2D);
  const [player, setPlayer] = useState(true); // true = 1; false = 2

  const selectedCharacter = useSelector((state: RootState) => state.characters.selected);

  function playToken(col: number) {
    if (!canPlay) return;

    let x = places[col];
    let p = player ? 1 : 2;

    if (x < 0) {
      setMessage("Please use another column!");
      return;
    }

    const newBoard = board.map(row => [...row]);
    const newPlaces = [...places];
    newBoard[x][col] = p;
    newPlaces[col] -= 1;

    setBoard(newBoard);
    setPlaces(newPlaces);
    setValidMoves(validMoves + 1);

    if (validMoves > 7 && checkWin(x, col, p, newBoard)) {
      setMessage(`Player ${p} wins!!!`);
      setCanPlay(false);
      return;
    }

    if (p === 1) {
      setCanPlay(false);
      setTimeout(() => {
        const smartCol = getSmartMove(newBoard, newPlaces);
        playToken(smartCol);
        setCanPlay(true);
      }, 1000);
    }

    setPlayer(!player);
  }

  function countInDirection(row: number, col: number, rowDir: number, colDir: number, playerNum: number, b: number[][]) {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;

    while (r >= 0 && r < 6 && c >= 0 && c < 7 && b[r][c] === playerNum) {
      count++;
      r += rowDir;
      c += colDir;
    }
    return count;
  }

  function checkWin(row: number, col: number, playerNum: number, b: number[][]) {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    return directions.some(([dx, dy]) => {
      const forward = countInDirection(row, col, dx, dy, playerNum, b);
      const backward = countInDirection(row, col, -dx, -dy, playerNum, b);
      return 1 + forward + backward >= 4;
    });
  }

  function getSmartMove(b: number[][], p: number[]) {
    const legalCols = b[0].map((_, col) => col).filter(col => b[0][col] === 0);

    for (const col of legalCols) {
      const tempBoard = b.map(row => [...row]);
      const row = p[col];
      tempBoard[row][col] = 2;
      if (checkWin(row, col, 2, tempBoard)) return col;
    }

    for (const col of legalCols) {
      const tempBoard = b.map(row => [...row]);
      const row = p[col];
      tempBoard[row][col] = 1;
      if (checkWin(row, col, 1, tempBoard)) return col;
    }
    setPlayer(!player)
    return legalCols[Math.floor(Math.random() * legalCols.length)];
  }

  return (
    <div>
      <CharacterSearchBar />
      <p>{message}</p>
      <div style={{ backgroundColor: "#1c61f2", padding: "20px" }}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((_cell, colIndex) => (
              <Pos
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                play={board[rowIndex][colIndex]}
                onClick={playToken}
                bgImage={selectedCharacter?.avatarSrc}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectFour;

/**import React, { useState } from 'react';
import CharacterSearchBar from '../UI/CharacterSearchBar';


// Board pieces
function Pos(props: { onClick: Function, row: number, col: number, play: number }) {
  const getColor = () => {
    if (props.play === 1) return "#d9313d"; // red
    if (props.play === 2) return "#fdc601"; // yellow
    return "white";
  };

  return (
    <div
      id={`${props.row},${props.col}`}
      onClick={() => props.onClick(props.col)}
      style={{
        width: "75px",
        height: "75px",
        borderRadius: "50%",
        backgroundColor: getColor(),
        border: "2px solid #1c61f2",
        display: "inline-block",
        margin: "4px",
        cursor: "pointer",
      }}
    />
  );
}

// game play
function ConnectFour() {

  const [message, setMessage] = useState("Let's Play!");
  const [validMoves, setValidMoves] = useState(0);

  const array2D = Array(6)
    .fill(null)
    .map(() => Array(7).fill(0));
  const [places, setPlaces] = useState([5, 5, 5, 5, 5, 5, 5]);
  const [board, setBoard] = useState(array2D);
  const [player, setPlayer] = useState(true); // true = 1; false = 2

  function playToken(col: number) {
    let x = places[col];
    let p = player ? 1 : 2;
    if (x < 0) {
      setMessage("Please use another column!");
    } else {
      board[x][col] = p;
      setBoard(board);
      if (validMoves > 7) {
        if (checkWin(x, col, p)) {
          setMessage(`Player ${p} wins!!!`);
          return;
        }
      }
      places[col] = places[col] - 1;
      setPlayer(!player);
      setValidMoves(1 + validMoves);
    }
    if (!player) {
      setMessage('Player 2 Playing...');
      // Delay computer move
      setTimeout(() => {
        getSmartMove();
      }, 1000);
    }
  }

  function countInDirection(row: number, col: number, rowDir: number, colDir: number, playerNum: number) {
    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;

    while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === playerNum) {
      count++;
      r += rowDir;
      c += colDir;
    }

    return count;
  }

  function checkWin(row: any, col: any, playerNum: number) {
    const directions = [
      [0, 1], // Horizontal →
      [1, 0], // Vertical ↓
      [1, 1], // Diagonal ↘
      [1, -1], // Diagonal ↙
    ];

    for (const [rowDir, colDir] of directions) {
      const countForward = countInDirection(
        row,
        col,
        rowDir,
        colDir,
        playerNum,
      );
      const countBackward = countInDirection(
        row,
        col,
        -rowDir,
        -colDir,
        playerNum,
      );
      const total = 1 + countForward + countBackward;

      if (total >= 4) {
        return true;
      }
    }

    return false;
  }

  function getSmartMove() {
    const legalCols = board[0].map((_, col) => col).filter(col => board[0][col] === 0);

    for (const col of legalCols) {
      const tempBoard = board.map(innerArr => [...innerArr]);
      const row = places[col];
      const PLAY = 2;
      tempBoard[row][col] = PLAY;
      if (checkWin(row, col, PLAY)) {
        return col; // Winning move
      }
    }

    // Try blocking opponent
    const opponent = 1;
    for (const col of legalCols) {
      const tempBoard = board.map(innerArr => [...innerArr]);
      const row = places[col];
      tempBoard[row][col] = opponent;
      if (checkWin(row, col, opponent)) {
        return col; // Block their win
      }
    }
    setPlayer(!player)
    return legalCols[Math.floor(Math.random() * legalCols.length)];
  }

  return (
    <div>
      <CharacterSearchBar />
      {message}
      <div style={{ backgroundColor: "#1c61f2", padding: "20px" }}>
        {board.map((row: number[], rowIndex: number) => (
          <div key={rowIndex}>
            {row.map((_cell: any, colIndex: number) => (
              <Pos
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                play={board[rowIndex][colIndex]}
                onClick={playToken}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );




};

export default ConnectFour;
*/