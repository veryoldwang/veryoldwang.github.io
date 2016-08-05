jQuery(document).ready(function(){
	var foo=true;
	$(".sl-menus").click(function(){
		if(foo){
			$(this).find(".menuson").show();
            $(this).find(".sl-j").html("-");
			foo=false;
		}else{
			$(this).find(".menuson").hide();
			$(this).find(".sl-j").html("+");
			foo=true;
		}
	})
})