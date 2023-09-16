'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add_button');
    const doList = document.querySelector('.things_list');


    addButton.addEventListener('click', (e) => {
        addTask(e);
    });

    document.addEventListener( 'keyup', (e) => {
            if( e.code === 'Enter' )
        addTask(e);
    });

    function addTask() {
        const inputText = document.querySelector('.title_main').value;
        if (!inputText) return
        const li = document.createElement('li');
        const delButtonCreate = document.createElement('button');
        delButtonCreate.innerHTML = "<i class='fa-solid fa-trash fa-xl'></i>"
        delButtonCreate.classList.add('thrash_but');

        li.innerText = inputText;
        li.classList.add('things_item');

        li.append(delButtonCreate);
        doList.appendChild(li);  
        
        document.querySelector('.title_main').value = '';
        
    }

    doList.addEventListener('click', (e) => {
        const btn = e.target.closest('.thrash_but');
        if (!btn) {
            return;
        }
        btn.closest('li').remove();
    })
   
});


