$(function(){
    $("#content").keyup(function(){
        var num=$(this).val().length;
        var length=500;
        var sid=length-num;
        $("#sid").text(sid);
    })
})