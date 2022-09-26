import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Components
import CompanyList from "./components/Company/CompanyList";

// Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CompanyList />);

reportWebVitals();
