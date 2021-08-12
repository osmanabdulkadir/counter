//varibales 
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let score = document.getElementById("score")

let integer = 0;

plus.addEventListener('click', function(){
    integer += 1;
    score.innerHTML = integer;
});

minus.addEventListener("click", function(){
    integer -= 1;
    score.innerHTML = integer;
})

