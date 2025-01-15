import { ToastWrapper } from "keep-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import EditorPage from "./components/EditorPage/EditorPage.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/editor/:roomId" index element={<EditorPage />} />
            <Route path="/about" index element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>

        <ToastWrapper
          richColors={true}
          toastOptions={{
            classNames: {
              title: "text-body-3 font-medium",
              toast: "rounded-xl shadow-large",
              description: "text-body-4 font-normal",
            },
          }}
        />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>
);
