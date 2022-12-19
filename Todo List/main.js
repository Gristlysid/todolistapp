window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el =  document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();

   const task=input.value;

   if (!task) {
        alert("please fill out the task");
        return;
   }
// Making a div with a class task
   const task_el = document.createElement("div");
   task_el.classList.add("task");

// Making a div with a class task
   const task_content_el = document.createElement("div");
   task_content_el.classList.add("content");


   task_el.appendChild(task_content_el);

// Making a input element with a class some text
   const task_input_el = document.createElement("input");
   task_input_el.classList.add("text");
   task_input_el.type = "text";
   task_input_el.value = task;
   task_input_el.setAttribute("readonly", "readonly");

   task_content_el.appendChild(task_input_el);

   const task_actions_el = document.createElement('div');
   task_actions_el.classList.add("actions");


   //creating the edit button tab
   const task_edit_el = document.createElement('button');
   task_edit_el.classList.add("edit");
   task_edit_el.innerHTML = "Edit";

   //Edit the values of the todo list
   task_edit_el.addEventListener("click",()=>{
      if (task_edit_el.innerText.toLowerCase() ==  "edit") {
         task_input_el.removeAttribute("readonly");
         task_input_el.focus();
         task_edit_el.innerText="Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "edit";
      }
   });
  //creating the delete button tab
   const task_delete_el = document.createElement('button');
   task_delete_el.classList.add("delete");
   task_delete_el.innerHTML = "Delete";
  
  
   //Delete the values of the todo list
   task_delete_el.addEventListener("click",()=>{
      list_el.removeChild(task_el);
   });
   
   task_actions_el.appendChild(task_edit_el);  
   task_actions_el.appendChild(task_delete_el);
   task_el.appendChild(task_actions_el);
   list_el.appendChild(task_el);
   input.value = "";

  })

})