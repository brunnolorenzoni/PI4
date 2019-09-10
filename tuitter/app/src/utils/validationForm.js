const validationForm = {

    checkGender: function(gender)
    {
        if(gender && gender !== ''){
            if(gender === 'M' || gender === "F"){ // tipo isso
                return true;
            }
            // pode trocar essas coisas por algo mais simples, tipo
            // return gender.match(/M|F/); // <-- com regex Massa! gostei
            //  ou
            // return gender === 'M' || gender === "F"; // <-- assim tb fica mais simples
        }

        return false;

    },

    confirmPassword(password, password2)
    {
        if(this.checkPassWord(password)) {

            if(password === password2){
                return true; 
            }
    
            return false;

        }

        return false;

    },

    checkPassWord(password)
    {

        if(password && password !== '')
        {
            return true; 
        }

        return false;

    },

    checkEmail(email)
    {

        if(email && email !== ''){
            
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let test = regex.test(email);
            return test;
            
        }
        
        return false;        

    },

    checkUsername(username)
    {

        if(username && username !== '')
        {
            return true;
        }
        return false;

    }

}

export default validationForm;

