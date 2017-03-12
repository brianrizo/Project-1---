var faceset_token = "b4332bb2d89824bb7587d0fb82dc0d7d";
var characters = {
feca35057041f5317fc13e82d845ecf9: ProfessorX, 				
850ee1427ef09724c4d11e1d0de71ba8: Daredevil,			  		
8d40cc0238272eb311f8761e353d998c: Deadpool,			    		
36ab889c3a75382de799c658e1f4c3ec: Thor,			    			
ec3df6a5995d6a1b03841548f5afa542: JeanGrey, 			   		
957fc5de3a094f0ff856a6899e31990b: CaptainAmerica,	    	
d55a589c2d63b43461803e21251bc06d: Iceman, 						
43ce09c7070b1eb442a3abbe2e3fd00d: Hawkeye, 			   		
5165cef7ef95eb3e521421232c4598c1: Hulk,				     			
257d6a70441c8deedb09e3ca3a57d52d: Wolverine,			   		
db42371a7d45b946ea4c66c4c8c4b504: CaptainMarvel, 				
035230f753cdd5cf3c6f1f962ac56125: Spiderman, 			     		
046404a514ea10b270f61fd3d2b56f8d: Daredevil, 			    		
17da4a2ad5f7122269fc249607b59233: DoctorStrange, 		    	
a72711e158159fe6a72fb9e948da54f3: InvisibleWoman, 		
18e2e8543ccb1c9ec1e2ec64ad2e096c: Beast,				 				
0cccbec4df216ab95c458aa1c6745524: Cyclops, 						
d2d15e5993dde61d502314a7f7a53243: KittyPryde, 				
0688410c4d38eb916ff5a3df166debdc: Rogue, 				   			
39f7e0b54fd2047fbe76f0649c83001c: IronMan 			   		
};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api-us.faceplusplus.com/facepp/v3/search?api_key=wfvzK0zrgscuPVLLNJg0byB4diiQ8uuw&api_secret=lwx5gv72gPcyD4rV8I-d0u017bcWntRK&image_url="+imgURL+"&faceset_token=b4332bb2d89824bb7587d0fb82dc0d7d",
  "method": "POST",
  "headers": {
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});