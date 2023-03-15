import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homecomponent from "../../Screen/Homecomponent";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homecomponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
