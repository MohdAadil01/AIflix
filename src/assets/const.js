export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";

export const FETCH_MOVIES_URL = {
  nowPlaying:
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
  },
};

export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w500";

export const LANG = [
  {
    language: "english",
    buttonText: "Search",
    placeholder: "What movie would you like to watch today? ",
  },
  {
    language: "hindi",
    buttonText: "खोजें",
    placeholder: "आज आप कौन सी फिल्म देखना चाहेंगे?",
  },
];
