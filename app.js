// target the input field
// target the button
// target the list container


let input_field = document.querySelector('.input-field');

let list_container = document.querySelector('.list-container')

document.querySelector('.addBtn').addEventListener('click', (event)=>{
   if(input_field.value === ''){
        input_field.classList.add('shake')
        setTimeout(()=>{
               input_field.classList.remove('shake')
        },1000)
   }else{
        //    create the li element
        let li = document.createElement('li')
        li.innerHTML = input_field.value;
        list_container.appendChild(li);

        // create trash span
        let span = document.createElement('span')
        let trash_img = document.createElement('img');
        trash_img.src =  './images/trash.png'
        span.appendChild(trash_img)

        li.appendChild(span)
        saveTodos()
   }

     input_field.value = ''
})

// deleting and checking logic goes here

list_container.addEventListener('click', (event)=>{
       if(event.target.tagName === 'LI'){
          event.target.classList.toggle('checked') 
          saveTodos()
       }else if(event.target.tagName === 'SPAN'){
            event.target.parentElement.remove()
            saveTodos()
       }
})

// saving my Todos
function saveTodos(){
       localStorage.setItem('todos2', list_container.innerHTML)
}

function retrieveTodos(){
     list_container.innerHTML = localStorage.getItem("todos2")
}

retrieveTodos()