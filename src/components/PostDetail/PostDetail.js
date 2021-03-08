import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comment/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])

    return (
        <div>
            <h1>This is Post Detail of {id}</h1>
            <p>User posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>post body: {post.body}</p>
            <h3>Number of Comments: {comments.length}</h3>
            {
                comments.map(comment => <Comments comment = {comment}></Comments>)
            }

        </div>
    );
};

export default PostDetail;