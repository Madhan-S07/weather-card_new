$(document).ready(()=>{

    $("#addBtn").click(()=>{



        let val = $("#taskInput").val();

        if(val == "") return;
        $("#taskList").append(
            "<li>"+
            "<span class='taskText'>" + val + "</span>"+
            "<button class='editBtn'>Edit</button>"+ 
            "<button class='deleteBtn'>Delete</button>"+
            "</li>");

        $("#taskInput").val("");
        

    });

    $("#taskList").on("click" , ".deleteBtn" , function(){

        $(this).parent().remove();
    })

   $("#taskList").on("click", ".editBtn", function () {

        let newTask = prompt("Edit your task:");

        $(this).siblings(".taskText").text(newTask);

    });


})

