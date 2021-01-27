import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/posts';
import './AddPostForm.css';

export interface Post {
  title: string;
  body: string;
  userId: number;
}

interface Props {
  newPost: Post;
  createPost: (createdPost: Post) => void;
}

const AddPostForm: React.FC<Props> = ({ createPost, newPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // TODO add input validation checks before submit
  return (
    <section>
      <h1>Ajouter un post</h1>
      <div className="form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="titre du post"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="contenu du post"
        />
        <button onClick={() => createPost({ title, body, userId: 1 })}>
          ajouter un post
        </button>
        {newPost && <p>Le post est bien enregistré !</p>}
      </div>
    </section>
  );
};

const mapStateToProps = (state: { postsReducer: { createdPost: Post } }) => ({
  newPost: state.postsReducer.createdPost,
});

const mapDispatchToProps = {
  createPost: (createdPost: Post) => createPost(createdPost),
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm);
