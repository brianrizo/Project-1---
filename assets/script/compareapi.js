
var api_key = 	"wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw";
var api_secret = "lwx5gv72gPcyD4rV8I-d0u017bcWntRK";
var baseURL = "https://api-us.faceplusplus.com/facepp/v3/compare";
var faceset_token = "b4332bb2d89824bb7587d0fb82dc0d7d"

//api testing impages
var imgURL1 = "https://cdn.pixabay.com/photo/2013/04/11/19/17/girl-102829_1280.jpg";
var imgURL2 = "https://cdn.pixabay.com/photo/2015/07/28/19/21/person-864804_1280.jpg";
var base = "https://cdn.pixabay.com/photo/2013/04/11/19/17/girl-102829_1280.jpg";
var images=["http://www.famousbirthdays.com/headshots/mike-colter-2.jpg","http://media.gettyimages.com/photos/actor-charlie-cox-attends-the-premiere-of-stardust-at-the-savoy-on-picture-id77242402","https://s-media-cache-ak0.pinimg.com/736x/7e/df/63/7edf63c4f45cd7ec5d4c5d9cc8a4a564.jpg","http://www.workingauthor.com/wp-content/uploads/d23-expo-2011-chris-hemsworth-headshot1.jpg","http://vignette3.wikia.nocookie.net/gameofthrones/images/6/6d/600full-sophie-turner.jpg/revision/latest?cb=20141123171917&path-prefix=de","http://cdn3-www.superherohype.com/assets/uploads/2011/09/file_168508_0_ewavengersheadshots1.jpg","https://s-media-cache-ak0.pinimg.com/originals/e5/bd/f1/e5bdf1846c3d0ea31ea088f770061cc7.jpg","https://s-media-cache-ak0.pinimg.com/236x/dc/24/0e/dc240e2dff96e8127bc616c2ba565799.jpg","https://s-media-cache-ak0.pinimg.com/originals/75/c6/23/75c623389f80a303e818ce4ef42c6150.jpg","http://vipfanauctions.com/wp-content/uploads/Hugh-Jackman-Chappie.jpg","http://data1.ibtimes.co.in/en/full/571898/krysten-ritter-will-play-titular-jessica-jones-upcoming-netflix-series.jpg","http://www.famousbirthdays.com/headshots/andrew-garfield-1.jpg","https://pmcdeadline2.files.wordpress.com/2014/09/chadwick-boseman.jpg","http://speakerdata2.s3.amazonaws.com/photo/image/840303/benedictcumberbatch_bbs_012.jpg","http://www.thewallpapers.org/photo/58129/Zoe-Saldana-in-Santa-Monica-007.jpg","http://a2.res.cloudinary.com/allamerican/image/fetch/t_face_s270/http://speakerdata2.s3.amazonaws.com/photo/image/870406/2418128_et_0124_sundance_saturday_jlc_0205.jpg","https://s-media-cache-ak0.pinimg.com/736x/c9/78/91/c97891f3e410d5ab7da73fa60129c835.jpg","http://atlantablackstar.com/wp-content/uploads/2012/07/halle-berry1.jpg","https://s-media-cache-ak0.pinimg.com/originals/bc/26/80/bc26806334968588e24a67b79fccb5ad.jpg","https://i1.wp.com/www.workingauthor.com/wp-content/uploads/d23-expo-2011-robert-downey-jr-headshot.jpg"];




      // $("form").submit(function(evt){  
      // evt.preventDefault();
      // var formData = new FormData($(this)[0]);

for(i=0;i<1;i++){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key="+api_key+"&api_secret="+api_secret+"&image_url1="+images[i]+"&image_url2="+images[i],
  "method": "POST",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "c861470b-1bee-b84c-3457-40a353a6d371"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

}































// //Detect API get token, define ID and add to Faceset
// detect(){
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg",
//       "method": "POST",
//       "headers": {
//         "cache-control": "no-cache",
//         "postman-token": "03c51fac-338d-c523-a2dd-d54ffa001410"
//       }
//     }
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });
// }

// //Compare image against Faceset access rest of code using Faceset ID
// cmpFace_Set(){
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api-us.faceplusplus.com/facepp/v3/search?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg&faceset_token=b4332bb2d89824bb7587d0fb82dc0d7d",
//   "method": "POST",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "dce29e1a-ccbc-bdc0-0f7f-f460aea7d8e7"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
// }



// //COMPARE TWO IMAGES
// for(i=0;i<urlAry;i++){

//   compare(urlAry[i],image)
// }
// function compare(x,y){
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url1=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg&image_url2="imgURL2,
//     "method": "POST",
//     "headers": {
//         "my-sample-header": "Lorem ipsum dolor sit amet",
//         "cache-control": "no-cache",
//         "postman-token": "9975d29a-f3c3-44ab-8bf5-74a668369681"
//     }
// }

// $.ajax(settings).done(function (response) {
//     confidence.push(response.confidence);
// });
// }

// //Faceset API - create set - done already token assigned to variable
// mkFaceset(){
//         var settings = {
//           "async": true,
//           "crossDomain": true,
//           "url": "https://api-us.faceplusplus.com/facepp/v3/faceset/create?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK",
//           "method": "GET",
//           "headers": {
//             "cache-control": "no-cache",
//             "postman-token": "5043b87e-3abc-8cbf-68e4-af23abf89658"
//           }
//         }

//         $.ajax(settings).done(function (response) {
//           console.log(response);
//         }
//     });
// }