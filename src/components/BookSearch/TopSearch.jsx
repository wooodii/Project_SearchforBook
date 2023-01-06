import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import Loading from "../Loading";
import TopSearchPrint from "./TopSearchPrint";

const TopSearch = () => {
  const searchApi =
    "http://apis.data.go.kr/6260000/BookSearchWordBestService/getBookSearchWordBest?serviceKey=iK9GwIOwIm6gP%2BhKgBtRb%2BHZBQi6RL3r5v2AbRJCoep8wt6Hvw4KaukJGKu0ThtdEpAegkCUjCyiQvy%2FS%2B1%2FMQ%3D%3D&pageNo=1&resultType=json";
  const [search, setSearch] = useState();

  const getSearch = async () => {
    const response = await fetch(searchApi).then((response) => response.json());
    //console.log(response);
    //console.log("get",response.getBookSearchWordBest.body.items.item);
    if (search) {
      return false;
    }
    setSearch(response.getBookSearchWordBest.body.items.item);
    console.log("get", search);
  };

  useEffect(() => {
    getSearch();
    console.log("set", search);
  }, [search]);

  return (
    <div>
    <Row>
    {search ? (
      search
      .filter((s, index) => index >= 5 && index < 10)
      .map((s, index) => (
        <TopSearchPrint
              key={index}
              rank={s.rank}
              search_word={s.search_word}
              />
              ))
              .reverse()
              ) : (
                <Loading />
                )}
    </Row>
    <Row>
        {search ? (
          search
          .filter((s, index) => index >= 0 && index < 5)
          .map((s, index) => (
            <TopSearchPrint
            key={index}
            rank={s.rank}
            search_word={s.search_word}
            />
            ))
            .reverse()
            ) : (
              <Loading />
              )}
    </Row>      
    </div>
  );
};

export default TopSearch;
