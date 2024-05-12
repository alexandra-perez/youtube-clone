import "./CommentForm.scss";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CommentForm({videoId}) {

    console.log(videoId)

    let BASE_URL='https://6637c889288fedf69381538c.mockapi.io/api/v1/notes'

    // const navigate = useNavigate()
    const [comment, setComment] = useState({
        id: videoId,
        comments: {
            commenter: "",
            comment: ""
        }
    })

    const [displayComment, setDisplayComment] = useState({})

    useEffect(() => {
        fetch("https://6637c889288fedf69381538c.mockapi.io/api/v1/notes" + "/" + videoId)
          .then((response) => response.json())
          .then((response) => {
            setDisplayComment(response.comments);
          });
      }, []);

    function handleTextChange (e) {
        setComment({...comment,
            id: videoId,
            comments: {
[e.target.id]: e.target.value}
    })
}

    function createNewComment(newComment) {
        const options = {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: { "Content-Type": "application/json" },
        };
        return fetch(`${BASE_URL}`, options).then((response) => {
          return response.json();
        }).catch(error=>console.error(error));
      }

    function addComments(e) {
        e.preventDefault()
        createNewComment(comment)
        setComment({ id: videoId,
                     comments:{
                        commenter: "", comment: ""
                     } })
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
             <p>{displayComment.id}</p>
             <p>{displayComment.commenter}</p>
             <p>{displayComment.comment}</p>       
        </div>
    )
}