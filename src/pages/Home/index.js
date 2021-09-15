import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { Row, Button } from "reactstrap";

import "antd/dist/antd.css";

import { Card } from "antd";

import {
  fetchCharacters,
  charactersSelector,
  nextPageSelector,
  hasNextPageSelector,
  statusSelector,
} from "../../redux/charactersSlice";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const { Meta } = Card;

function Home() {
  const dispatch = useDispatch();

  const characters = useSelector(charactersSelector);
  const nextPage = useSelector(nextPageSelector);
  const hasNextPage = useSelector(hasNextPageSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error status={status} />;
  }

  return (
    <>
      <Row>
        {characters.map((character) => (
          <Link to={`/char/${character.name}`}>
            <Card
              key={character.char_id}
              hoverable
              style={{ width: 250, margin: 17, cursor: "default" }}
              cover={
                <img
                  alt="example"
                  src={character.img}
                  style={{ height: "300px" }}
                />
              }
            >
              <Meta title={character.name} description={character.nickname} />
            </Card>
          </Link>
        ))}
      </Row>
      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <Button
            color="primary"
            outline
            onClick={() => dispatch(fetchCharacters(nextPage))}
          >
            Load More
          </Button>
        )}
        {!hasNextPage && <div>There is nothing to be show.</div>}
      </div>
    </>
  );
}

export default Home;
