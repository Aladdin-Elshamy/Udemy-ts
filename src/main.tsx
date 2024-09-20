import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
