import React, { useState } from "react";
import Comments from "../components/Comments";

function Details({ video }) {
  const [upVote, setUpVote] = useState(video.upvotes);
  const [downVote, setDownVote] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);
  const buttonText = showComments ? "Hide Comments" : "Show Comments";

  function handleClickUpVote() {
    setUpVote(upVote + 1);
  }

  function handleClickDownVote() {
    setDownVote(downVote + 1);
  }

  function handleComments() {
    setShowComments(!showComments);
  }

  function displayComments() {
    if (showComments === true) {
      return <Comments video={video} />;
    } else {
      return "";
    }
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <p>
        {video.views} | {video.createdAt}
      </p>
      <button onClick={handleClickUpVote}>{upVote}👍</button>
      <button onClick={handleClickDownVote}>{downVote}👎</button>
      <button onClick={handleComments}>{buttonText}</button>
      {displayComments()}
    </div>
  );
}

export default Details;
