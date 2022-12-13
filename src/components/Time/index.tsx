import React from "react";

type TimeProps = {
  offset?: number;
  truncate?: number;
};

const formatDate = (d: Date): string => {
  return (
    String(d.getUTCFullYear()).padStart(4, "0") +
    "-" +
    String(d.getUTCMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getUTCDate()).padStart(2, "0") +
    "T" +
    String(d.getUTCHours()).padStart(2, "0") +
    ":" +
    String(d.getUTCMinutes()).padStart(2, "0") +
    ":" +
    String(d.getUTCSeconds()).padStart(2, "0") +
    "Z"
  );
};

const Time = ({ offset, truncate }: TimeProps): JSX.Element => {
  let t = new Date().getTime();
  if (offset !== undefined) {
    t += offset * 1000;
  }
  if (truncate !== undefined) {
    t = Math.floor(t / (truncate * 1000)) * truncate * 1000;
  }
  const formatted = formatDate(new Date(t));
  return <>{formatted}</>;
};

export default Time;
