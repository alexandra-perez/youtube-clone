import "./CommentForm.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommentForm({ videoId }) {
  const navigate = useNavigate();

  //page mounts
  //fetch mock api
  //get promise
  //if true, setComment to be true
  //else do nothing "Not Found"
  //if setComment is true
  //display comment under form
  //form on submit,
  //if setComment is true
  //invoke update comments
  //else add new comments
  //setComments to be true after.

  console.log(videoId);

  let BASE_URL = "https://6637c889288fedf69381538c.mockapi.io/api/v1/notes";

  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
  });

  const [newComment, setNewComment] = useState({
    videoId: `${videoId}`,
    comments: [
      {
        commenter: "",
        comment: "",
      },
    ],
  });

  const [displayComment, setDisplayComment] = useState({});

  useEffect(() => {
    fetch("https://6637c889288fedf69381538c.mockapi.io/api/v1/notes")
      .then((response) => response.json())
      .then((response) => {
        const filtered = response.filter((ele) => ele.videoId === videoId);
        setDisplayComment(filtered);
      });
  }, []);

  function handleTextChange(e) {
    setNewComment({
      ...newComment,
      comments: [{ ...comment, [e.target.id]: e.target.value }],
    });
    setComment({ ...comment, [e.target.id]: e.target.value });
  }

  function createNewComment(newComment) {
    const options = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${BASE_URL}`, options)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        navigate(0);
      })
      .catch((error) => console.error(error));
  }

  function addComments(e) {
    e.preventDefault();
    createNewComment(newComment);
  }

  function deleteComment(id) {
    const options = { method: "DELETE" };
    return fetch(
      `https://6637c889288fedf69381538c.mockapi.io/api/v1/notes/${id}`,
      options
    ).then(() => navigate(0));
  }

  return (
    <div className="CommentForm">
      <p>Comment</p>
      <form onSubmit={addComments}>
        <label>
          Commenter Name
          <input
            onChange={handleTextChange}
            type="text"
            id="commenter"
            value={newComment.comments[0].commenter}
          />
        </label>
        <br />
        <label>
          Comment
          <input
            onChange={handleTextChange}
            type="text"
            id="comment"
            value={newComment.comments[0].comment}
          />
        </label>
        <br />
        <input type="submit" value="Add Comment" />
      </form>
      <ul>
        {displayComment[0] &&
          displayComment.map((ele) => (
            <li key={ele.comment}>
              {ele.comments[0].commenter} says, "{ele.comments[0].comment}"
              <button onClick={() => deleteComment(ele.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
