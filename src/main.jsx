import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./Router/index.jsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
