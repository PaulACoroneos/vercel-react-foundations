'use client';
import * as React from "react";

export function LikeButton() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes => likes + 1);
  }

  return <button onClick={handleClick}>Like({likes})</button>

}