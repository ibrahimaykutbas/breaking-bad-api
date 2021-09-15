import React from "react";

function Error({ message }) {
  return (
    <div style={{ padding: "20px 0 10px 0", textAlign: "center" }}>
      Error: {message}
    </div>
  );
}

export default Error;
