import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
// import {Toaster} from './Components/ui/toaster.jsx'

function App() {
  return (
    <>
      {/* <Toaster></Toaster> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
