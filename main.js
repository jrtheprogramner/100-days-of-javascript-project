var buttons= document.querySelectorAll(".type");
var arrayPlaceholder = ["Color Name", "rgb(0-255, 0-255, 0-255", "#Hex code of Color"];

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let value = this.value;
        document.getElementById("txt").placeholder = arrayPlaceholder[value];

    })
}

var changebtn = document.getElementById("changer");
changebtn.addEventListener("click", function(){
    document.body.style.backgroundColor = document.getElementById("txt").value;
})