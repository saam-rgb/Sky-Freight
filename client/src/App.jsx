import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto md:bg-white bg-mobilebg font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
