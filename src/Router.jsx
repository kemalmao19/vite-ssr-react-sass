import { Routes, Route } from "react-router-dom";
import Home from "./app/Home";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<h1>contact</h1>} />
      <Route
        path="*"
        element={<div> Not Found or You do not have permission.</div>}
      />
    </Routes>
  );
};
