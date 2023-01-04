import React from "react";

const Post = ({posts, loading}) => {
    return (
        <div>
            {loading && <div>loading...</div>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Post;