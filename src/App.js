import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AccountInfo from "./Pages/AccountInfo";
import NomineeInfo from "./Pages/NomineeInfo";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/accountInfo" element={<AccountInfo />} />
            <Route path="/nominee" element={<NomineeInfo />} />
            <Route
              path="*"
              element={
                <h1 className="text-red-700 text-4xl text-center mt-[25%]">
                  Page not found
                </h1>
              }
            />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
