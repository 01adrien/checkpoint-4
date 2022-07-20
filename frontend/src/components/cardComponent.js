import React from "react";

export default function CardComponent({ children, style }) {
  return <div className={style}>{children}</div>;
}
