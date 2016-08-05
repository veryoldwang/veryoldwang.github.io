

	//表单检测
    function check_feedback()
    {
    	var username2 = document.getElementById('username').value;
    	var phone2 = document.getElementById('phone').value;
     	var email2 = document.getElementById('email').value;
     	var content2 = document.getElementById('content').value;
     	
     	
     	 var username = ignoreSpaces(username2);
     	var phone = ignoreSpaces(phone2);
     	var email = ignoreSpaces(email2);
     	var content = ignoreSpaces(content2);
     	
     	if(username == null || username == ""){
     		document.getElementById('username').value = "";
     		alert("请添加姓名！");
     		return false;
     		
     	}else if(phone == null || phone == ""){
     		document.getElementById('phone').value = "";
     		alert("请添加联系号码！");
     		return false;
     		
     	}else if(email == null || email == ""){
     		document.getElementById('email').value = "";
     		alert("请添加邮箱地址！");
     		return false;
     		
     	}else if(content == null || content == ""){
     		document.getElementById('content').value = "";
     		alert("请添加留言内容！");
     		return false;
     		
     	}else{
     		
     		return true;
     	}
     	
    }
    function ignoreSpaces(string) {
		var temp = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	temp += splitstring[i];
	return temp;
}