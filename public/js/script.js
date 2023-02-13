const search = document.getElementById('search') ; 
const value = search.getAttribute('value') ; 

let arr = Array.from(search.options) ; 
console.log('script running') ;
arr.forEach(function(option){
    option.selected = false ; 
   // console.log(option.value) ; 
   
    if(option.value === value){
        option.selected = true ; 
    }       
})