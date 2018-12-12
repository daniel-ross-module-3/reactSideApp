import axios from 'axios';


class UserService {

  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }


  loggedin = () => {
    return this.service.get('/loggedin')
      .then(response => {
        console.log(response)
        return response.data
      })
  }
  signup = (username, password, companyName) => {
    return this.service.post('/signup', { username, password, companyName })
      .then(response => response.data)
  }
  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(response => response.data)
  }
  logout = () => {
    return this.service.post('/logout')
      .then(response => response.data)
  }
  //trying to make a user service to redirect to user-page after successful login
  // userRoutes = () => {
  //   return this.service.get('/userRoutes')
  //   .then(response => response.data)
  // }

}

export default UserService;