import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import { ListGroup, ListGroupItem } from "reactstrap";

import Loading from "../../components/Loading";

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quote?author=${name}`)
      .then((res) => res.data)
      .then((data) => setChar(data))
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <>
          <ListGroup style={{ marginTop: 25 }}>
            {char.map((item) => (
              <ListGroupItem key={item.quote_id}>
                {item.quote} <strong>{item.author}</strong>
              </ListGroupItem>
            ))}
          </ListGroup>
          <br />
        </>
      )}
      {char && char.length === 0 && (
        <ListGroup style={{ marginTop: -25 }}>
          <ListGroupItem>
            <strong>Character has no quotes to list.</strong>
          </ListGroupItem>
        </ListGroup>
      )}
    </div>
  );
}

export default Detail;
