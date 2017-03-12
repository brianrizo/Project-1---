//This code accesses the faceplusplus.com api and compares
//a provided URL to an image against an online album of 
//actors that have played different marvel characters.
//The response of the API is the token id of the closest matching
//image, and a confidence level. It also returns other items
//which are not used in this app, such as a facial recognition
//map of the image provided. 


var api_key = 	"wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw";
var api_secret = "lwx5gv72gPcyD4rV8I-d0u017bcWntRK";
//api url
var baseURL = "https://api-us.faceplusplus.com/facepp/v3/compare";
//token for online album
var faceset_token = "b4332bb2d89824bb7587d0fb82dc0d7d";
//URL of user picture to be checked against online album
var imgURL = "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MzU5ODQ5OF5BMl5BanBnXkFtZTYwODIwODk1._V1_UY317_CR4,0,214,317_AL_.jpg";
//mathced picture token
var isME = "";
//confidence level for match
var conf = "";

//list of picture URLs
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

//list of characters with corresponding album picture token
var characters = {
Tfeca35057041f5317fc13e82d845ecf9: "ProfessorX",
Tfeca35057041f5317fc13e82d845ecf9: "ProfessorX",
T850ee1427ef09724c4d11e1d0de71ba8: "Daredevil",
T8d40cc0238272eb311f8761e353d998c: "Deadpool",
T36ab889c3a75382de799c658e1f4c3ec: "Thor",
Tec3df6a5995d6a1b03841548f5afa542: "JeanGrey",
T957fc5de3a094f0ff856a6899e31990b: "CaptainAmerica",
Td55a589c2d63b43461803e21251bc06d: "Iceman",
T43ce09c7070b1eb442a3abbe2e3fd00d: "Hawkeye",
T5165cef7ef95eb3e521421232c4598c1: "Hulk",
T257d6a70441c8deedb09e3ca3a57d52d: "Wolverine",
Tdb42371a7d45b946ea4c66c4c8c4b504: "CaptainMarvel",
T035230f753cdd5cf3c6f1f962ac56125: "Spiderman",
T046404a514ea10b270f61fd3d2b56f8d: "Daredevil",
T17da4a2ad5f7122269fc249607b59233: "DoctorStrange",
Ta72711e158159fe6a72fb9e948da54f3: "InvisibleWoman",
T18e2e8543ccb1c9ec1e2ec64ad2e096c: "Beast",
T0cccbec4df216ab95c458aa1c6745524: "Cyclops",
Td2d15e5993dde61d502314a7f7a53243: "KittyPryde" 				
};

//Ajax API call settings
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/search?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url="+imgURL+"&faceset_token=b4332bb2d89824bb7587d0fb82dc0d7d",
  "method": "POST",
  "headers": {
  "cache-control": "no-cache",
  "postman-token": "a851d393-907e-e427-cc47-f761b37a06af"
  }
}
//Ajax API call
$.ajax(settings).done(function (response) {
	
 //capture closest matched image. 
 isMe = response.results[0].face_token;
 //capture confidence level of closest matched image. 
 conf = response.results[0].confidence; 

});

