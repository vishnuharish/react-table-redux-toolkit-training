import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {store} from './store';
import { Provider } from 'react-redux';
import {App} from './features/App/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
