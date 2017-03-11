
var api_key = 	"wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw";
var api_secret = "lwx5gv72gPcyD4rV8I-d0u017bcWntRK";
var baseURL = "https://api-us.faceplusplus.com/facepp/v3/compare";
var faceset_token = "b4332bb2d89824bb7587d0fb82dc0d7d";
var winner = {character: 0,certainty: 0};
var testImage = "https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F04%2F11%2F19%2F17%2Fgirl-102829_1280.jpg";
var q = 0;
var i = 0;
var pics= [

"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzU5ODQ5OF5BMl5BanBnXkFtZTYwODIwODk1._V1_UY317_CR4,0,214,317_AL_.jpg",
"http://media.gettyimages.com/photos/actor-charlie-cox-attends-the-premiere-of-stardust-at-the-savoy-on-picture-id77242402",
"https://s-media-cache-ak0.pinimg.com/736x/7e/df/63/7edf63c4f45cd7ec5d4c5d9cc8a4a564.jpg",
"http://www.workingauthor.com/wp-content/uploads/d23-expo-2011-chris-hemsworth-headshot1.jpg",
"http://vignette3.wikia.nocookie.net/gameofthrones/images/6/6d/600full-sophie-turner.jpg/revision/latest?cb=20141123171917&path-prefix=de",
"http://cdn3-www.superherohype.com/assets/uploads/2011/09/file_168508_0_ewavengersheadshots1.jpg",
"http://greginhollywood.com/wordpress/wp-content/uploads/Shawn-Ashmore-AES-084089.jpg",
"https://s-media-cache-ak0.pinimg.com/236x/dc/24/0e/dc240e2dff96e8127bc616c2ba565799.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/75/c6/23/75c623389f80a303e818ce4ef42c6150.jpg",
"http://vipfanauctions.com/wp-content/uploads/Hugh-Jackman-Chappie.jpg",
"https://i.ytimg.com/vi/ttaLyTSmytE/maxresdefault.jpg",
"http://www.famousbirthdays.com/headshots/andrew-garfield-1.jpg",
"https://pmcdeadline2.files.wordpress.com/2014/09/chadwick-boseman.jpg",
"http://speakerdata2.s3.amazonaws.com/photo/image/840303/benedictcumberbatch_bbs_012.jpg",
"https://s-media-cache-ak0.pinimg.com/564x/36/57/ea/3657eaa26f106dad095442ca52f1c7ba.jpg",
"https://s-media-cache-ak0.pinimg.com/736x/53/1a/ec/531aecb6a8acbad3c11efb544bf17486.jpg",
"http://cdn02.cdn.justjaredjr.com/wp-content/uploads/pictures/2015/01/tye-brett/tye-sheridan-brett-davern-stanford-prison-experiment-sundance-29.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/78/f3/db/78f3db7d0ed730e6de938fb57734f5c5.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/bc/26/80/bc26806334968588e24a67b79fccb5ad.jpg",
"https://i1.wp.com/www.workingauthor.com/wp-content/uploads/d23-expo-2011-robert-downey-jr-headshot.jpg"

];

$( "#myBtn" ).click(function() {

console.log('i am here');

var fileInput = document.getElementById('the-file');
var file = fileInput.files[0];
var formData = new FormData();
formData.append('file', file);
 event.preventDefault();

   ajaxCall();

function ajaxCall(){
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/detect?api_key="+api_key+"&api_secret="+api_secret,
  "method": "POST",
  "headers": {
    "cache-control": "no-cache"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": formData,
  "dataType": "json"
}
console.log('data ', file);
console.log('form', formData);


$.ajax(settings).done(function (response) {
  console.log(response);
});
}
});


// $(function () {
//     $(":file").change(function () {
//         if (this.files && this.files[0]) {
//             var reader = new FileReader();
//             reader.onload = imageIsLoaded;
//             reader.readAsDataURL(this.files[0]);
//         }
//     });
// });

// function imageIsLoaded(e) {
//     $('#myImg').attr('src', e.target.result);
// };

//       $("form").submit(function(evt){   
//       evt.preventDefault();
//       var formData = new FormData($(this)[0]);


//   event.preventDefault();

//    var timer = setInterval(function() {
//     $.ajax(settings).done(function (response) {
//     console.log(response);
//     });
//       i++;

//       if(i === 4){
//        clearInterval(timer);
//        timer = 0;
//       }

//    }, 1300);

// });

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url1=https://s-media-cache-ak0.pinimg.com/236x/dc/24/0e/dc240e2dff96e8127bc616c2ba565799.jpg",
//   "method": "POST",
//   "headers": {
//     "cache-control": "no-cache",
//     "postman-token": "28ded331-45ff-799f-d500-05119596ba25"
//   },
//   "processData": false,
//   "contentType": false,
//   "mimeType": "multipart/form-data",
//   "data": "formData"
// }

 







//API Ajax calls faceplusplus-----
// $("form").submit(function(evt){
// evt.preventDefault();
// var formData = new FormData($(this)[0]);
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
