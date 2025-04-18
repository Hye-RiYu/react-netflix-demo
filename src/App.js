import { Route, Routes } from "react-router-dom";

import "./App.css";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// 홈페이지 /
// 영화 전체보여주는 페이지(서치) /movies
// 영화 디테일 페이지 /movies/:id

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    // 이런식으로도 가능하지만 /movies 겹치는 페이지가 많아지면 보통 회사에서는 위에 코드처럼 분리해준다.
    // <Routes>
    //   <Route path="/" element={<AppLayout />}>
    //     <Route index element={<Homepage />} />
    //     <Route path="/movies" element={<MoviesPage />} />
    //     <Route path="/movies/:id" element={<MovieDetailPage />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
