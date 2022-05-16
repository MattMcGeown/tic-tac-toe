// React Imports
import { useState } from 'react';

// Package Imports
import { motion } from 'framer-motion';

// Component Imports
import Tile from '../Tile/Tile';

// Sass Imports
import './grid.scss';

const Grid = () => {
	const [tiles, setTiles] = useState(Array(9).fill(null));
	const [temp, setTemp] = useState(Array(9).fill(null));
	const [isX, setIsX] = useState(true);

	const renderTile = (i) => {
		return (
			<Tile
				value={tiles[i] ? tiles[i] : temp[i]}
				onMouseEnter={() => handleMouseEnter(i)}
				onMouseLeave={() => handleMouseLeave(i)}
				onClick={() => handleClick(i)}
				className={`tile ${
					tiles[i] === 'X' ? 'tile-x' : tiles[i] === 'O' ? 'tile-o' : ''
				}`}
			/>
		);
	};

	const handleMouseEnter = (i) => {
		if (checkWinner(tiles) || tiles[i]) {
			return;
		}

		if (temp[i] === null) {
			const newTemp = [...temp];
			newTemp[i] = isX ? 'X' : 'O';
			setTemp(newTemp);
		}
	};

	const handleMouseLeave = (i) => {
		temp[i] = null;
		setTemp(Array(9).fill(null));
	};

	const handleClick = (i) => {
		if (checkWinner(tiles) || tiles[i]) {
			return;
		}

		if (tiles[i] === null) {
			tiles[i] = isX ? 'X' : 'O';
			setTiles(tiles);
			setIsX(!isX);
		}
	};

	const checkWinner = (tiles) => {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < winningPatterns.length; i++) {
			const [a, b, c] = winningPatterns[i];

			if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
				return tiles[a];
			}
		}
		return null;
	};

	const handleRestart = () => {
		setTiles(Array(9).fill(null));
		setTemp(Array(9).fill(null));
		setIsX(true);
	};

	const winner = checkWinner(tiles);

	return (
		<motion.div
			initial={{ y: '-100vh' }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', delay: 0.5 }}
			className='grid_wrap'>
			<div className='winner'>
				{winner && winner === 'X' ? 'X Wins!' : winner === 'O' ? 'O Wins!' : ''}
			</div>
			<motion.div
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
				transition={{ type: 'spring', delay: 1.0 }}
				className='grid'>
				{renderTile(0)}
				{renderTile(1)}
				{renderTile(2)}
				{renderTile(3)}
				{renderTile(4)}
				{renderTile(5)}
				{renderTile(6)}
				{renderTile(7)}
				{renderTile(8)}
			</motion.div>
			<motion.button
				whileHover={{ scale: 1.1 }}
				className='restart_btn'
				onClick={handleRestart}>
				Restart
			</motion.button>
		</motion.div>
	);
};

export default Grid;
