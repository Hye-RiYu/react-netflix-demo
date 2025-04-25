import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchGenreMovies = ({ genreId, page }) => {
  return api.get(`/discover/movie`, {
    params: {
      with_genres: genreId,
      page,
      sort_by: "popularity.desc", // 기본 정렬
    },
  });
};

export const useGenreMovieQuery = ({ genreId, page }) => {
  return useQuery({
    queryKey: ["genre-movies", genreId, page],
    queryFn: () => fetchGenreMovies({ genreId, page }),
    enabled: !!genreId, // genreId 없으면 호출 안 함
    select: (result) => result.data,
  });
};
