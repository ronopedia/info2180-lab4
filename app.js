
$(document).ready(function(){
    $("#search").on("click",function(e){
        e.preventDefault();
        var text1= (document.getElementById("heroes").value);
        $.ajax({
            type:'GET',
            url:'superheroes.php?query='+text1,
            success:function(data){
                $("#result").html('');
                $("#result").html(data);
            }
        });
    });
});