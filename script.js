function add(input){
    var input = document.getElementById("input");
    var v = document.getElementById('i2');
    v.insertAdjacentHTML('afterend','<div id="input" class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-default">Default</span></div><input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>');}


function remove(input){
    var input = document.getElementById("input");
    input.parentNode.removeChild(input);}
    
var rembutton = document.getElementById("b2");
rembutton.onclick = function() {
    remove()};
var addbutton  = document.getElementById("b1");
addbutton.onclick = function() {
    add()};
