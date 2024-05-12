import "./CommentForm.scss";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CommentForm({videoId}) {
    // const navigate = useNavigate()
    const [comment, setComment] = useState({
        id: videoId,
        commenter: "",
        comment: ""
    })

    useEffect(() => {
        fetch("https://6637c889288fedf69381538c.mockapi.io/api/v1/notes" + "/" + videoId)
          .then((response) => response.json())
          .then((response) => {
            setComment(response);
          });
      }, []);

    function handleTextChange (e) {
        setComment({...comment, [e.target.id]: e.target.value})
    }

    function addComments(e) {
        e.preventDefault()
        const options = {
          method: "PUT",
          body: JSON.stringify(comment),
          headers: { "Content-Type": "application/json" },
        };
        return fetch(
          `https://6637c889288fedf69381538c.mockapi.io/api/v1/notes/${videoId}`,
          options
        )
        .then((response) => {
            return response.json();
          })
    }

    return (
        <div className="CommentForm">
            <p>Comment</p>
                    <form onSubmit={addComments}>
                        <label>Commenter Name<input onChange={handleTextChange} type="text" id="commenter" value={comment.commenter} />
                        </label>
                        <br />
                        <label>Comment<input onChange={handleTextChange} type="text" id="comment" value={comment.comment} />
                        </label>
                        <br />
                        <input type="submit" value="Add Comment" />
                    </form>
        </div>
    )
}