const search = () =>{
    const searchbox = document.getElementById("search-photo").value.toUpperCase();
    const photos = document.getElementById("gallery")
    const gallery = document.querySelectorAll(".photo")
    const name = document.getElementsByTagName("a")

    for(var i=0; i < name.length; i++) {
        let match = gallery[i].getElementsByTagName("a")[0];

        if (match) {
            let textvalue = match.textcontent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
               gallery[i].style.display = "";
            } else {
                gallery[i].style.display = "none";
            }
        }
    }

}



