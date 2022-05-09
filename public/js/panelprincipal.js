// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
let detallesbtn=document.getElementsByClassName('detalles-btn');

console.log(detallesbtn)

for(i=0;i<detallesbtn.length;i++){
    console.log(detallesbtn[i])
    detallesbtn[i].addEventListener('click', ()=>{
        modal.style.display="block"
    })
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}