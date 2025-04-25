import React, { useEffect, useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { Alert, Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../common/MovieCard/MovieCard";
import "./MoviesPage.style.css";
import CustomPagination from "../../common/Pagination/CustomPagination";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useGenreMovieQuery } from "../../hooks/useGenreMovie";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get("q");

  const { data: genreList } = useMovieGenreQuery();

  // 어떤 모드인지 판단
  const isGenreMode = selectedGenre !== null && !keyword;

  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
    error: searchErrorMsg,
  } = useSearchMovieQuery({ keyword, page });

  const {
    data: genreData,
    isLoading: genreLoading,
    isError: genreError,
    error: genreErrorMsg,
  } = useGenreMovieQuery({ genreId: selectedGenre, page });

  const finalData = isGenreMode ? genreData : searchData;
  const isLoading = isGenreMode ? genreLoading : searchLoading;
  const isError = isGenreMode ? genreError : searchError;
  const error = isGenreMode ? genreErrorMsg : searchErrorMsg;

  useEffect(() => {
    setPage(1);
  }, [keyword, selectedGenre]);

  let movies = finalData?.results || [];

  movies.sort((a, b) =>
    sortOrder === "desc"
      ? b.popularity - a.popularity
      : a.popularity - b.popularity
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  const noResultsMessage = (
    <Alert variant="danger" className="text-center">
      검색 결과가 없습니다. 다른 키워드로 다시 검색해보세요.
    </Alert>
  );

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <h5>정렬</h5>
          <Dropdown onSelect={(eventKey) => setSortOrder(eventKey)}>
            <Dropdown.Toggle
              variant="danger"
              id="dropdown-basic"
              style={{ cursor: "pointer" }}
            >
              {sortOrder === "desc" ? "인기순 높은순" : "인기순 낮은순"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="desc">인기순 높은순</Dropdown.Item>
              <Dropdown.Item eventKey="asc">인기순 낮은순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h5 className="mt-4">장르</h5>
          <div className="d-flex flex-wrap gap-2 genre-filter-wrapper">
            <Button
              variant={selectedGenre === null ? "danger" : "outline-danger"}
              onClick={() => setSelectedGenre(null)}
            >
              전체
            </Button>

            {/* 데스크탑에서는 버튼으로 나열, 모바일에서는 드롭다운 */}
            <div className="d-none d-md-block">
              {genreList?.map((genre) => (
                <Button
                  key={genre.id}
                  variant={
                    selectedGenre === genre.id ? "danger" : "outline-danger"
                  }
                  onClick={() => setSelectedGenre(genre.id)}
                >
                  {genre.name}
                </Button>
              ))}
            </div>

            {/* 모바일에서 드롭다운으로 장르 선택 */}
            <div className="d-block d-md-none">
              <Dropdown
                onSelect={(eventKey) => setSelectedGenre(Number(eventKey))}
              >
                <Dropdown.Toggle
                  variant="danger"
                  id="dropdown-genre"
                  style={{ cursor: "pointer" }}
                >
                  {selectedGenre
                    ? genreList.find((genre) => genre.id === selectedGenre)
                        ?.name
                    : "장르 선택"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="null">전체</Dropdown.Item>
                  {genreList?.map((genre) => (
                    <Dropdown.Item key={genre.id} eventKey={genre.id}>
                      {genre.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Col>

        <Col lg={8} xs={12}>
          {movies.length === 0 && noResultsMessage}

          <Row className="g-4 mb-4">
            {movies.map((movie, index) => (
              <Col key={index} lg={4} xs={6}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>

          {!isLoading &&
            !isError &&
            movies.length > 0 &&
            finalData?.total_pages > 1 && (
              <CustomPagination
                page={page}
                setPage={setPage}
                totalPages={finalData?.total_pages}
              />
            )}
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
