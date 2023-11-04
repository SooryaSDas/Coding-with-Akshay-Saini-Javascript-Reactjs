export const checkValidateData = (email, password)=>{

    // const isnameValid =  /^[a-zA-Z ]{2,30}$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isnameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;
}