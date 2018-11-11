import axios from 'axios';

class Vote {
  constructor() {
    this.vote = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
    });
  }

  createVote(body, postData) {
    return this.vote.put(`/vote/${postData}`, body)
      .then(({ data }) => data);
  }
}

const vote = new Vote();

export default vote;
