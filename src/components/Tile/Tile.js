// Package Imports
import { motion } from 'framer-motion';

// Sass Imports
import './tile.scss';

const Tile = ({ value, onMouseEnter, onMouseLeave, onClick, className }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}>
			{value}
		</motion.div>
	);
};

export default Tile;
