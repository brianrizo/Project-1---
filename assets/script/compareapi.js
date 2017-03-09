
var api_key = 	"wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw";
var api_secret = "wx5gv72gPcyD4rV8I-d0u017bcWntRK";
var baseURL = "https://api-us.faceplusplus.com/facepp/v3/compare";


var imgURL1 = "https://cdn.pixabay.com/photo/2013/04/11/19/17/girl-102829_1280.jpg";
var imgURL2 = "https://cdn.pixabay.com/photo/2015/07/28/19/21/person-864804_1280.jpg";
var queryURL = -Fapi_key=<wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw>-Fapi_secret=<wx5gv72gPcyD4rV8I-d0u017bcWntRK>


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url1="+ imgURL1+"&image_url2=" +imgURL2,
    "method": "POST",
    "headers": {
        "my-sample-header": "Lorem ipsum dolor sit amet",
        "cache-control": "no-cache",
        "postman-token": "38c0ab52-8155-a5b9-7fb4-db5920524df5"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
