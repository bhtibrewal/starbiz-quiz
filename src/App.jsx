import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <body className="quiz-body">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </body>
  );
}

export default App;
