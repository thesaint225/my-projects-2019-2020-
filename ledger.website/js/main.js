// initialize and add the mapp
function intMap(){
    // your location
    const loc ={lat:5.222247,lng:-0.204586};
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom:14,
        center:loc
    });
    // the marker, positioned at location
    const marker = new google.maps.Marker({position:loc,map:
    map });
}
// AIzaSyC2pQEVy8rkBmCrpZevCNXmjx4bioA5Klg
