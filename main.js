// Get Elements
const img=document.querySelector('.main-img img');
const toggleBtn=document.querySelector('.toggle');
const toggleText=document.querySelectorAll('.toggle-text');

// Toggle variable
let bool=true;

toggleBtn.addEventListener('click', ()=>{
    // Change Image and text content with toggle variable
    if(bool===true){
        // Change image to light
        img.src ="img/cup-light.png";

        // Change text content
        toggleText.forEach(text=>{
            text.innerText="White ";
        });

        bool=false;
    }
    else{
        // Change image to dark
        img.src="img/cup-dark.png";

        // Change text content
        toggleText.forEach(text=>{
            text.innerText="Blvck ";
        });

        bool=true;
    }

    // Toggle Theme
    document.body.classList.toggle('light-theme');
    /*
    The classList property already has a pre-built toggle method, so we don't need our bool(toggle)
    variable here
    */
    
    // Toggle Icon
    toggleBtn.firstElementChild.classList.toggle('fas fa-sun');
    // maybe it is not working because toggle is inbuilt function
    // or maybe fontawesome is not able to fetch in runtime.
})


// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};