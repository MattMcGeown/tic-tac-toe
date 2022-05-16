// Package Imports
import { motion } from 'framer-motion';

// Component Imports
import Grid from './components/Grid/Grid';

// Sass Imports
import './app.scss';

function App() {
	return (
		<motion.div className='app'>
			<Grid />
		</motion.div>
	);
}

export default App;
