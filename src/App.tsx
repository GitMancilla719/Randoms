import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/components/Footer";
import Nav from "./common/components/Nav";
import Bored from "./features/Bored/Bored";
import Cattos from "./features/Cattos/Cattos";
import Doggos from "./features/Doggos/Doggos";
import Joke from "./features/Jokes/Joke";
import LandingPage from "./features/Landing/LandingPage";
import Memer from "./features/Memer/Memer";

const App: FC = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/joke" element={<Joke />} />
          <Route path="/booored" element={<Bored />} />
          <Route path="/doggos" element={<Doggos />} />
          <Route path="/cattos" element={<Cattos />} />
          <Route path="/memers" element={<Memer />} />
          <Route path="*" element={null} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
