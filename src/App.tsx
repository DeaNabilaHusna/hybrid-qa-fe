import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}
