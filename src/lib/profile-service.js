import axios from 'axios';

class Profile {
  constructor() {
    this.profile = axios.create({
      // baseURL: process.env.REACT_APP_BASEURL,
      baseURL: 'http://localhost:5000',
      withCredentials: true,
    });
  }

  getProfile(userId) {
    return this.profile.get(`/profile/${userId}`)
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }

  getuserPost(userId) {
    return this.profile.get(`/profile/post/${userId}`)
      .then(( { data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }

  follow(userId) {
    return this.profile.post(`/profile/post/${userId}`)
      .then(( { data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }


  getfollowers(userId) {
    return this.profile.get(`/profile/getfollowers/${userId}`)
      .then(( { data }) => data)
      .catch((error) => {
        console.log(error);
      });
  }

  
}





const profileAjax = new Profile();

export default profileAjax;
