import axios from 'axios';

class Vote {
  constructor() {
    this.vote = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
    });
  }

  // POSITIVE VOTE SERVICE
  createPositiveVote(id, stepId) {
    return this.vote.put(`/vote/${id}/increase`, { stepId })
      .then(({ data }) => data);
  }

  // NEGATIVE VOTE SERVICE
  createNegativeVote(id, stepId) {
    return this.vote.put(`/vote/${id}/decrease`, { stepId })
      .then(({ data }) => data);
  }
}

const vote = new Vote();

export default vote;
