
var api_key = 	"wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw";
var api_secret = "lwx5gv72gPcyD4rV8I-d0u017bcWntRK";
var baseURL = "https://api-us.faceplusplus.com/facepp/v3/compare";
var faceset_token = "b4332bb2d89824bb7587d0fb82dc0d7d"

var imgURLs = [imgURL1,imgURL2];
var confidnce = [];

var imgURL1 = "https://cdn.pixabay.com/photo/2013/04/11/19/17/girl-102829_1280.jpg";
var imgURL2 = "https://cdn.pixabay.com/photo/2015/07/28/19/21/person-864804_1280.jpg";
var base = "https://cdn.pixabay.com/photo/2013/04/11/19/17/girl-102829_1280.jpg";

//Faceset API create set
mkFaceset(){
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://api-us.faceplusplus.com/facepp/v3/faceset/create?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK",
          "method": "GET",
          "headers": {
            "cache-control": "no-cache",
            "postman-token": "5043b87e-3abc-8cbf-68e4-af23abf89658"
          }
        }

        $.ajax(settings).done(function (response) {
          console.log(response);
        }
    });
}

//Detect API get token, define ID and add to Faceset
detect(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg",
      "method": "POST",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "03c51fac-338d-c523-a2dd-d54ffa001410"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

//Compare image against Faceset access rest of code using Faceset ID
cmpFace_Set(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/search?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg&faceset_token=b4332bb2d89824bb7587d0fb82dc0d7d",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "dce29e1a-ccbc-bdc0-0f7f-f460aea7d8e7"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}


//COMPARE TWO IMAGES
function compare(){
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url1=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg&image_url2=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg",
    "method": "POST",
    "headers": {
        "my-sample-header": "Lorem ipsum dolor sit amet",
        "cache-control": "no-cache",
        "postman-token": "9975d29a-f3c3-44ab-8bf5-74a668369681"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response.confidence);
});
}