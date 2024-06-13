const item=document.querySelector("#item");
const todobox=document.querySelector("#to-do-box")


item.addEventListener(                                  //press enter text will add to todo list
    "keyup",
    function(event){
        if(event.key=="Enter")
        {
            addToDo(this.value);
            this.value="";

        }
    }
)

const addToDo= (item)=>{                                     //add todo list items next to each other//
 const listItem=document.createElement("li");
 listItem.innerHTML=`${item}
 <i class="fas fa-times"></i>`;

 listItem.addEventListener(                                     // strikethrough the list items
    "click",
    function()
    {
        this.classList.toggle("done");                         //done is class for mark text/strikethrough//
    }
 )

 listItem.querySelector('i').addEventListener(                       //remove the list items//
    "click",
    function()
    {
        listItem.remove();
    }
 )

 todobox.appendChild(listItem)                             // add the list items 
}