import "./App.css"
import axios from "axios"
import HomePage from "./pages/Home.page"
import MoviePage from "./pages/Movie.page"
import PlayPage from "./pages/Play.page"
import {Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "3afc1d8f6f85fa0cb4c083529e5a18ae";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />}/>
      <Route path="/plays" element={<PlayPage />}/>
    </Routes>
  );
}

export default App;
