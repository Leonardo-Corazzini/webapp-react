import { BrowserRouter, Routes, Route } from "react-router";
import DefaultLayout from "./layouts/defaultlayout";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/Movie/MoviePage";
import About from "./pages/About";
import Contact from "./pages/ContaCT.JSX";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movies/:id' element={<MoviePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
