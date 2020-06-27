var button= document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function createList(){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
        var btn=document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        li.appendChild(btn);
        btn.onclick=removeParent;
}

button.addEventListener("click",function(){
    if(input.value.length>0){
    createList();
    }
})

input.addEventListener("keypress",function(event){
     if(input.value.length>0 && event.keyCode===13){
        createList();
     }
})

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
});
