import './Comment.css'
import back from '../../icons/back.png'
import foward from '../../icons/next.png'
import {useEffect, useState} from "react";
let commentID = 1;

const Comment = ()=>{

    const [comment, setComment] = useState([]);

    useEffect(() => {
        try {
            fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
                .then(response => response.json())
                .then(data => setComment(data))
        } catch (msg) {
            console.log(msg)
        }
    }, [])


    const [term, setTerm] = useState()
    const nextComment = (e) => {
        e.preventDefault()
        setTerm(commentID)
        if(commentID <= 48){
            commentID++;
        }
    }
    const backComment = (e) => {
        e.preventDefault()
        setTerm(commentID)
        if(commentID > 1){
            commentID--;
        }
    }

    return(
        <div className="comment">
            <button onClick={backComment}><img src={back} className="button back"/></button>
            {term?<div className="CommentStyle">
                <h4> {comment[commentID].quote}</h4>
                <h5>{comment[commentID].author}</h5>
            </div>: <div className="CommentStyle start"><h4 className="center">Click on the right side to start reading comments</h4></div>}

            <button onClick={nextComment}><img src={foward} className="button foward"/></button>
        </div>
    )
}
export default Comment
