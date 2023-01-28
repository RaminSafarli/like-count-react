import React, { useState } from "react";
import LikeButton from "./LikeButton";

import "./Like.css";

export default function Like() {
  let oldValue = 0;

  const [counter, setCounter] = useState(oldValue);

  const clickHandler = (operation) => {
    switch (operation) {
      case "reset":
        setCounter(0);
        break;
      case "like":
        setCounter(counter + 1);
        break;
      case "dislike":
        let dislike = counter - 1;
        setCounter(dislike > 0 ? dislike : (dislike = 0));
        break;
      default:
        break;
    }
  };

  return (
    <div className="like-wrp">
      <span className="subhead">Like: {counter}</span>
      <div className="btn-wrp">
        <LikeButton operation="reset" clickHandler={clickHandler} />
        <LikeButton operation="like" clickHandler={clickHandler} />
        <LikeButton operation="dislike" clickHandler={clickHandler} />
      </div>
    </div>
  );
}
