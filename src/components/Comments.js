function Comments({ video }) {
  const listOfComments = video.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
      </div>
    );
  });
  return (
    <div>
      <h3>{video.comments.lenth} Comments</h3>
      {listOfComments}
    </div>
  );
}

export default Comments;
