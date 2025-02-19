import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import ContextProvider from './provider/ContextProvider.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
      {/* Toast Container */}
      <ToastContainer></ToastContainer>
    </ContextProvider>
  </StrictMode>
);
