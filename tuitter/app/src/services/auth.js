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

    logout()
    {

      if(sessionStorage.getItem('token')){
        sessionStorage.removeItem('token')
        this.authenticated = false;
      }
      
      return !this.authenticated;

    }

  }
  
  export default new Auth();