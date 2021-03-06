import axios from 'axios';

class Search {
  constructor() {
    this.search = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
    });
  }

  // La ruta tiene dos querys, tipo y búsqueda
  searchUser(type, param) {
    return this.search.get(`/search?type=${type}&class=${param}`)
      .then(({ data }) => data);
  }
}

const search = new Search();

export default search;
