var accordions = document.querySelectorAll(".accordion");
var i;

for(i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function(){
    var panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
    }else{
      panel.style.display = "block";
    }
  });
}