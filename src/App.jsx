import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
        <div className="border-b-2 border-slate-500" />
      </div>
      <Outlet />
      <div className="fixed bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
