const menubars=document.querySelector("#menuBtn")
const closer=document.querySelector("#close")
const lists= document.querySelector("#list")


menubars.addEventListener("click", function(){
    lists.style.display="flex"
    menubars.style.display="none"
    closer.style.display="flex"
})

closer.addEventListener("click", function(){
    lists.style.display="none"
    menubars.style.display="flex"
    closer.style.display="none"
})