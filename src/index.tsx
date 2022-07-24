import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {store} from './store';
import { Provider } from 'react-redux';
import {App} from './features/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
