function getData() {firebase.database().ref("/").on('value',
function (snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey  =
childSnapshot.Key;
                 Room_names = childKey;
                //Start code
            
                //End come
                })})}
          getData();