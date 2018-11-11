import axios from 'axios';

class Post {
  constructor() {
    this.post = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
    });
  }

  createPost(post) {
    return this.post.post('/post', { post })
      .then(({ data }) => data);
  }

  getPost() {
    return this.post('/post')
      .then(({ data }) => data);
  }
}

const post = new Post();

export default post;

