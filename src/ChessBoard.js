import React from 'react'
import './App.css';

const ChessBoard = ({ size }) => {

    const renderBoard = () => {
        const rows = [];
        for (let i = 0; i < size; i++) {
            const cells = [];
            for (let j = 0; j < size; j++) {
                const cellColour = (i + j) % 2 === 0 ? 'light' : 'dark';
                cells.push(<div key={j} className={`cell ${cellColour}`}> </div>)
            }
            rows.push(<> {" "}< div key={i} className='row' > {cells}</div ></>)
        }
        return rows;
    }

    return (
        <>
            <div className='chess-board'> {renderBoard()}</div>
        </>
    )
}

export default ChessBoard