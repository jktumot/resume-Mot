window.onload = function (){
    function open_photo(photo) {
        document.getElementById("ser1").innerHTML =
          ("<img onclick='close_photo()' style='position: absolute;' src='" + photo + "'>")
      }
      
      function close_photo() {
        document.getElementById("ser1").innerHTML = ""
      }
}


