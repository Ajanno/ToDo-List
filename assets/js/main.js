//check off Specyfic todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//click on x to delet todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) { 
    if(event.which === 13){
    //grabing new to do text from input
        var  todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span> "+ todoText + "</li>");
    }
 });