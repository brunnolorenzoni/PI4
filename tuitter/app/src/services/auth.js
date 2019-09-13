class Auth {
    constructor() {
      this.authenticated = false;
    }

    isAuthenticated() {

        if(sessionStorage.getItem('token')){
            this.authenticated = true;
        }
        
      return this.authenticated;
    }
  }
  
  export default new Auth();