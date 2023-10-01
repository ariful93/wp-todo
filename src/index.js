import { render } from '@wordpress/element';
import App from "./App";

/**
 * Import the stylesheet for the plugin.
 */
import './main.scss';

// Render the App component into the DOM
render(<App />, document.getElementById('wp-todo-board'));