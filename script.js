let rollNo = document.querySelector('#studentId');
let btn = document.querySelector('#submit');
btn.addEventListener(onclick,submitform());
function submitform(){
    document.getElementById("form").submit();
}
console.dir(rollNo);