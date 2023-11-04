export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USERAVATAR = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png";

export const API_OPTIONS = {
    method : "GET",
    headers : {
        accept : "application/json",
        Authorization : 
            "Bearer " + process.env.REACT_APP_TMDB_KEY
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL= "https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/2b0fca4f-c15c-4622-9efc-572c4a408c30/IN-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier : "en", name : "English"},
    { identifier : "hindi", name : "Hindi"},
    { identifier : "spanish", name : "Spanish"}
];

// for the security keys are added to .env file and this file in gitignore , 
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY