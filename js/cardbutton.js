let names=[];


function nameCall(name , button) {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = name;
    listContainer.appendChild(li);
    document.getElementById(button).disabled=true;
    
    names.push(name);
   if(names.length>=5){
    alert("maximum exist");
   }


}