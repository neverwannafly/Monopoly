import React from 'react';

{/* <td id="21" class="cell highlight"><div class="content row2"><div class="color" style="background-color:#${this.board[21].color}"></div><div class="info">${this.board[21].name}<div class="cost">${this.currency}${this.board[21].cost}</div></div></td> */}

const Square = ({Card}) => {
  if (isEmpty) {
    return (<td className="cell empty"></td>);
  }
  return (
    <td className="cell highlight">
      <div className="content row2">
        <div className="color" style="background-position:"></div>
      </div>
    </td>
  );
}

export default Square;