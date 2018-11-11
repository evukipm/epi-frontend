import axios from 'axios';

class Vote {
  constructor() {
    this.vote = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
    });
  }

  createVote(id, stepId, index) {
    debugger;
    return this.vote.put(`/vote/${id}`, { stepId, index })
      .then(({ data }) => data);
  }
}

const vote = new Vote();

export default vote;
