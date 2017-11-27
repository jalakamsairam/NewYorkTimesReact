import axios from "axios";

export default {
  getArticles: function(data) {

  const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  const apiKey = "e7981d62d517436da9cf7106391a18c8";

   return axios.get(url, {
      params: {
        'q': data.query,
        'begin_date': `${data.startDate}0101`,
        'end_date': `${data.endDate}1231`,
        'api-key': apiKey,
      }
    })
    .then(function (response) {
     return (response);
    })
    .catch(function (error) {
      console.log(error);
    });
    },

    getSaved: function(){
        return axios.get("/api/article/")
        .then(function(res){
            return res;
        })
    },
    postArticle :function(obj){
        axios.post("/api/article/saved", {
         headline:obj.headline,
          date:obj.date,
          url:obj.url
        })
        .then(function(res){
          console.log(res);
        })
    }
};
