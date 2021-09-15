import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { ListGroup, ListGroupItem } from "reactstrap";

import {
  fetchQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "../../redux/quotesSlice";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
  const dispatch = useDispatch();

  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error status={status} />;
  }

  return (
    <>
      <br />
      <ListGroup>
        {quotes.map((quote) => (
          <ListGroupItem action key={quote.quote_id}>
            {quote.quote} <strong> {quote.author} </strong>
          </ListGroupItem>
        ))}
      </ListGroup>
      <div style={{ marginTop: 10 }}>{status === "loading" && <Loading />}</div>
    </>
  );
}

export default Home;
