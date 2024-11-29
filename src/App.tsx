import { Navigation } from './routes/Navigation';
import { routes } from './routes/routes';

function App() {
	return (
		<>
			<Navigation routes={routes} />
		</>
	);
}

export default App;
