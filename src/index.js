import React from 'react';
import ReactDOM from 'react-dom/client'; // Import đúng từ React 18
import App from './App'; // File App chính

// Lấy phần tử gốc từ HTML
const rootElement = document.getElementById('root');

// Tạo root và render App
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);