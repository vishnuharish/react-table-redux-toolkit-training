import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
		<h1>REACT TABLE with redux and typescript</h1>
	</StrictMode>
)
