const inputTodo = document.querySelector('.inputt');
const todobutton = document.querySelector('.add');
const todoul = document.querySelector('.todos-ul');

todobutton.addEventListener('click', addTodo)

function addTodo(e) {
    e.preventDefault();

    if (inputTodo.value === "") {
        alert("Todo can't be Empty")
    } else {

        // CREATE DIV 
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("a");

        // CREATE LIST 
        const todoItem = document.createElement("li");
        todoItem.innerText = inputTodo.value;
        todoItem.classList.add("lii");
        todoDiv.appendChild(todoItem);

        // DATE 

        const dateValue =  new Date().toString();
        // const dateValue = getdate.toString();
        


        // CREATE LIST 
        const todoPara = document.createElement("p");
        todoPara.innerText = dateValue;
        todoPara.classList.add("para");
        todoItem.appendChild(todoPara);



        // COMPLETE BUTTON 
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = `<i class="fas fa-check-circle"></i>`
        completeBtn.classList.add("complete")
        todoDiv.appendChild(completeBtn);


        // UNDO BUTTON 
        const undoBtn = document.createElement("button");
        undoBtn.innerHTML = `<i class="fas fa-undo"></i>`
        undoBtn.classList.add("undo");
        todoDiv.appendChild(undoBtn);
        undoBtn.style.display = "none";



        // DELETE BUTTON 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
        deleteBtn.classList.add("delete")
        todoDiv.appendChild(deleteBtn);



        todoul.appendChild(todoDiv);






        completeBtn.addEventListener('click', completeBtnclick)

        function completeBtnclick(e) {

            const item = e.target;


            if (item.classList[0] === "complete") {
                const todoParent = item.parentElement;
                todoParent.classList.add("completed");
                completeBtn.style.display = "none";
                // undoBtn.style.display = "block";
            }


        }


        // undoBtn.addEventListener('click', undoBtnclick)

        // function undoBtnclick(e) {

        //     const undoitem = e.target;


        //     if (undoitem.classList[0] === "undo") {
        //         const undotodoParent = undoitem.parentElement;
        // undotodoParent.classList.add("un-donee");

        //         completeBtn.style.display = "block";
        //         undoBtn.style.display = "none";

        //         completeBtnclick();
        //     }


        // }




        deleteBtn.addEventListener('click', delclick)

        function delclick(e) {

            const delitem = e.target;


            if (delitem.classList[0] === "delete") {
                const todoParent = delitem.parentElement;
                todoParent.classList.add('fall');
                

                todoParent.addEventListener("transitionend", (e) =>{
                    e.preventDefault();
                    todoParent.remove()
                }
            )
            }


        }

        inputTodo.value = ""
    }

}


// completeBtn.addEventListener('click', completeBtnclick)

// function completeBtnclick(e) {


// }