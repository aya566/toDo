const input = document.querySelector('.adding');
let list = document.querySelector('.list');

function addtask(){
    if(input.value !=""){
        let  li = document.createElement('li');  // if intiallizing as a global ?

        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';  // done wiether X or icon u00d7
        li.appendChild(span);
        save();
    }else{
        input.animate([{opacity:0},{opacity:1}],{duration:300,iterations:3});
    }
    input.value = "";
    save();
};


list.addEventListener('click', function(e){
    if (e.target.tagName == 'LI'){                 //capital letter
        e.target.classList.toggle('checked');
        save();
    } else if (e.target.tagName == 'SPAN'){                 
        e.target.parentElement.remove();
    
    save();
    }
} 

)                                     //done
  // saving data 
  function save(){
    localStorage.setItem('data',list.innerHTML);
  };
  function show(){
    list.innerHTML = localStorage.getItem('data');
  };
  show();                               //done
