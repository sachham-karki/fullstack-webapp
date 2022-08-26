import React from "react";

const NotFoundPage = ({ dog }) => (
  <h1>
    404 Error:{" "}
    <span
      style={{
        color: "red",
        fontSize: "60px",
        fontStyle: "italic",
        borderBottom: "dotted",
      }}
    >
      {dog}
    </span>{" "}
    Page Not Found
  </h1>
);
export default NotFoundPage;
