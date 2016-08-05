
 $(function(){

	 //点赞,cookie实现只能点击一次的效果
     $("#likenum").live('click',function(){
    	 
    	// alert( $("#industryid").val());
    	 var oa = $(this);
    	 
         var id = oa.attr('name');//获取id属性
         
         if(!$.cookie(id)){
        	 $.ajax({
     			type:"POST",
     			url:ise_www_url+"ajax_fun/",
     			data: "fun_name=industry&action=addlike&id="+id,
     			dataType:"json",
     			success:function(msg){
     			    
        		 if(msg[0] == "1"){//点赞成功
     					//alert("点赞成功!");
     					window.location.reload();
     					$.cookie(id,id);
     				}
     			}  
     		});
         }else{
        	 alert('您已经提交过意见了，请不要重复哦！');
         }
         return fale;
     })
 });
 
 	//行业视点的浏览量
	function update_industry_click_num(did)
	{
		$.ajax({
 			type:"POST",
 			url:ise_www_url+"ajax_fun/",
 			data: "fun_name=industry&action=addclicknum&id="+did,
 			dataType:"json",
 			success:function(msg){
				
 			}  
 		});
	    
	}
 
 	//行业视点的点赞功能
	function add_industry_likenum(did)
	{
		var cookiename = "industrycookie"+did;
		if(!$.cookie(cookiename)){
			$.ajax({
	 			type:"POST",
	 			url:ise_www_url+"ajax_fun/",
	 			data: "fun_name=industry&action=addlike&id="+did,
	 			dataType:"json",
	 			success:function(msg){
					
					if(msg[0] == "1"){//点赞成功
	 					//alert("点赞成功!");
						$.cookie(cookiename,did);
	 					window.location.reload();
	 				}
	 			}  
	 		});
	     }else{
	    	 alert('您已经提交过意见了，请不要重复哦！');
	     }
	}
	
	//行业视点的踩功能
	function add_industry_likeunnum(did)
	{
		var cookiename = "industrycookie"+did;
		if(!$.cookie(cookiename)){
			$.ajax({
	 			type:"POST",
	 			url:ise_www_url+"ajax_fun/",
	 			data: "fun_name=industry&action=addlikeun&id="+did,
	 			dataType:"json",
	 			success:function(msg){
					
					if(msg[0] == "1"){//点赞成功
	 					
						$.cookie(cookiename,did);
	 					window.location.reload();
	 				}
	 			}  
	 		});
	     }else{
	    	 alert('您已经提交过意见了，请不要重复哦！');
	     }
	}
 
 
 	//产品的点赞功能
 	function add_product_like2(did)
	{
 		var cookiename = "productcookie"+did;
 		
 		//$gg = $.cookie(cookiename);
 		
 		if(!$.cookie(cookiename)){
 			$.ajax({
    			type:"POST",
    			url:ise_www_url+"ajax_fun/",
    			data: "fun_name=product&action=addlike&id="+did,
    			dataType:"json",
    			success:function(msg){
 				
 					if(msg[0] == "1"){//点赞成功
    					//alert("点赞成功!");
 						$.cookie(cookiename,did);
    					window.location.reload();
    				}
    			}  
    		});
        }else{
       	 	alert('您已经提交过意见了，请不要重复哦！');
        }
	}
 	
 	//产品的踩功能
 	function add_product_unlike2(did)
	{
 		var cookiename = "productcookie"+did;
 		if(!$.cookie(cookiename)){
 			$.ajax({
    			type:"POST",
    			url:ise_www_url+"ajax_fun/",
    			data: "fun_name=product&action=addunlike&id="+did,
    			dataType:"json",
    			success:function(msg){
    			    
 					if(msg[0] == "1"){//点赞成功
    					//alert("点赞成功!");
 						
    					window.location.reload();
    					$.cookie(cookiename,did);
    				}
    			}  
    		});
        }else{
       	 	alert('您已经提交过意见了，请不要重复哦！');
        }
	}
 
 
	 //设置星星的值
	 function set_review_stars(stars)
	 {
		 document.getElementById('hicommentss').value = stars;
	 }
	 
	 
	 //提交评论的时候检测表单
	 function check_add_review()
	 {
		 //var titlle = document.getElementById('titlle').value;
	     var content = document.getElementById('content').value;
	    // var hicommentss = document.getElementById('hicommentss').value;
	     
	     var content2 = ignoreSpaces(content);
	     
	     if(content2 == null || content2 == ""){
	    	 document.getElementById('content').value = "";
			 alert("请输入评论内容！");
			return false;
			
		}else if(content.length < 10){
			alert("请输入10个字以上的评论内容！");
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
	 
	 //检查评论回复的表单
	 function check_add_review_reply()
	 {
	     var content = document.getElementById('content').value;
	     var content2 = ignoreSpaces(content);
	     
	     if(content2 == null || content2 == ""){
	    	 document.getElementById('content').value = "";
			alert("请输入回复内容！");
			return false;
			
		}else if(content.length < 10){
			alert("请输入10个字以上的评论内容！");
			return false;
		}else{
			return true;
		}
	}
	
	function get_product_discuss_reply_msg(did)
	{
		var product_page = $("#product_page"+did).val();
		if(product_page != null || product_page != ""){
			
			 $.ajax({
     			type:"POST",
     			url:ise_www_url+"ajax_fun_reply/",
     			data: "fun_type=1&did="+did+"&page="+product_page,
     			dataType:"json",
     			success:function(msg){
				 
				   var leng = msg.length;
				   
     			   if(leng > 0){//正确  
     				   
     				  product_page++;
     				  document.getElementById('product_page'+did).value = product_page;
     				  
     				  var html = '';
     				  
     				  for(var i=0; i<leng;i++){
     					  html += '<p>'+msg[i]+'</p>';
     				  }
     				 
     				  $('#productreply'+did).append(html);
    			   }else{
    				   $('#product_get_reply'+did).hide();
    				   alert("没有回复内容！");
    			   }
     			}  
     		});
		}
	}
	
	
	//获取行业视点的评论列表
	function get_industry_discuss_msg(did)
	{
		var discuss_page = $("#discuss_page").val();
		
		if(discuss_page != null || discuss_page != ""){
			
			 $.ajax({
     			type:"POST",
     			url:ise_www_url+"ajax_fun_reply/",
     			data: "fun_type=5&did="+did+"&page="+discuss_page,
     			dataType:"json",
     			success:function(msg){
				 
				   var leng = msg.length;
				   
     			   if(leng > 0){//正确  
     				   
     				  discuss_page++;
     				  document.getElementById('discuss_page').value = discuss_page;
     				  
     				  var html = '';
     				// $discuss_id,$discuss_username,$discuss_content,$create_time_str,$discuss_star,$reply_count
     				  for(var i=0; i<leng;i++){
     					  //html += '<p>'+msg[i][0]+'</p>';
     					 html += '<div class="sectorDetail_four">';
     					html += '<img src="'+ise_images_url+msg[i][4]+'.png">';
     					html += '</div>';
     					html += '<div class="sectorDetail_five">';
     					html += '<a >'+msg[i][2]+'</a>';
     					html += '</div>';
	     				html += '<div class="sectorDetail_six">';
	     				html += '<div class="sectorDetail_sixs">';
	     				html += '<div class="sectorDetail_six1 sectorDetail_six1g">';
	     				//html += '<span><a href="reply.php?did='+did+'&discussid='+msg[i][0]+'&type=2" target="_blank" >回复</a></span>';
	     				html += '<span><a href="'+ise_www_url+'reply/'+did+'/'+msg[i][0]+'/2/" >回复</a></span>';
	     				html += '</div>';
	     				html += '<div class="sectorDetail_six2"></div>';
	     				html += '<div class="sectorDetail_six1 sectorDetail_six1gre">';
	     				html += '<span>评论者：</span><span><a>'+msg[i][1]+'</a></span>';
	     				html += '<span>'+msg[i][3]+'</span>';
	     				html += '</div>';
	     				html += '</div>';
	     				html += '</div>';
	     				html += '<div class="sectorDetail_seven1" id="industryreply'+msg[i][0]+'">';
	     				html += '</div>';
     					
	     				
	     				if (msg[i][5] > 0) {
	     					html += '<input type="hidden" id="industry_page'+msg[i][0]+'"  value="1" autocomplete="off"/>';
	     					html += '<input type="hidden" id="industry_did'+msg[i][0]+'"  value="'+msg[i][0]+'" autocomplete="off"/>';
	     					html += '<div class="sectorDetail_seven">';
	     					html += '<input class="btn_reply"  id="industry_get_reply'+msg[i][0]+'" onclick="get_industry_discusss_reply_msg('+msg[i][0]+');" type="button" value="查看更多回复">';
	     					html += '</div>';
	     				}
     				  }
     				 
     				  $('#industry_discuss').append(html);
     				  
     				 if(leng < 2){
     					//$('#industry_get_more_discuss').hide();
     				 }
     				  
    			   }else{
    				   $('#industry_get_more_discuss').hide();
    				   alert("没有评论内容！");
    			   }
     			} 
     		});
		}
	}
	
	//获取产品的评论列表
	function get_products_discuss_msg(did)
	{
		var discuss_page = $("#discuss_page").val();
		
		if(discuss_page != null || discuss_page != ""){
			
			 $.ajax({
     			type:"POST",
     			url:ise_www_url+"ajax_fun_reply/",
     			data: "fun_type=6&did="+did+"&page="+discuss_page,
     			dataType:"json",
     			success:function(msg){
				 
				   var leng = msg.length;
     			   if(leng > 0){//正确  
     				   
     				  discuss_page++;
     				  document.getElementById('discuss_page').value = discuss_page;
     				  
     				  var html = '';
     	// 0$discuss_id,1$discuss_username,2$discuss_content,3$create_time_str,4$discuss_star,5$reply_num,6$discuss_like_num,7$discuss_unlike_num,8$reply_count)
     				  for(var i=0; i<leng;i++){
     					html += '<div class="sectorDetail_four">';
     					html += '<img src="'+ise_images_url+msg[i][4]+'.png">';
		     					
     					html += '</div>';
     					
     					html += '<div class="sectorDetail_five">';
     					html += '<a >'+msg[i][2]+'</a>';
     					html += '</div>';
     					html += '<div class="productsdetail_five">';
     					html += '<span>您赞同这条评论吗？</span>';
     					html += '<span><a href="javascript:void(0)" onclick="add_product_like('+msg[i][0]+');">是</a></span>';
     					html += '<span><a href="javascript:void(0)" onclick="add_product_unlike('+msg[i][0]+');">否</a></span>';
     					html += '<span>'+msg[i][6]+'/'+msg[i][7]+'人赞同这条评论</span>';
     					html += '</div>';
     					html += '<div class="sectorDetail_six">';
     					html += '<div class="sectorDetail_sixs">';
     					html += '<div class="sectorDetail_six1 sectorDetail_six1g">';
     					//html += '<span><a href="reply.php?did='+did+'&discussid='+msg[i][0]+'&type=1" target="_blank" >回复</a></span>';
     					html += '<span><a href="'+ise_www_url+'reply/'+did+'/'+msg[i][0]+'/1/" >回复</a></span>';
     					html += '</div>';
     					html += '<div class="sectorDetail_six2"></div>';
     					html += '<div class="sectorDetail_six1 sectorDetail_six1gre">';
     					html += '<span>评论者：</span><span><a >'+msg[i][1]+'</a></span>';
     					html += '<span>'+msg[i][3]+'</span>';
     					html += '</div>';
     					html += '</div>';
     					html += '</div>';
     					html += '<div class="sectorDetail_seven1" id="productreply'+msg[i][0]+'">';
		     				
     					html += '</div>';
		     				
		     				if (msg[i][8] > 0) {
		     					html += '<input type="hidden" id="product_did'+msg[i][0]+'"  value="'+msg[i][0]+'" autocomplete="off"/>';
		     					html += '<input type="hidden" id="product_page'+msg[i][0]+'"  value="1" autocomplete="off"/>';
		     					html += '<div class="sectorDetail_seven" >';
		     					html += '<input class="btn_reply"  id="product_get_reply'+msg[i][0]+'" onclick="get_product_discuss_reply_msg('+msg[i][0]+');" type="button" value="查看更多回复">';
		     					//echo '<span>('.$reply_count.')</span>';
		     					html += '</div>';
		     				}
		     				
		     				html += '<br>';
     				  }
     				
     				  $('#product_discuss').append(html);
     				  
     				 if(leng < 2){
     					//$('#product_get_more_discuss').hide();
     				 }
     				  
    			   }else{
    				   $('#product_get_more_discuss').hide();
    				   alert("没有评论内容！");
    			   }
     			} 
     		});
		}
	}
	
	function get_industry_discusss_reply_msg(did)
	{
		var industry_page = $("#industry_page"+did).val();
		if(industry_page != null || industry_page != ""){
			
			 $.ajax({
     			type:"POST",
     			url:ise_www_url+"ajax_fun_reply/",
     			data: "fun_type=2&did="+did+"&page="+industry_page,
     			dataType:"json",
     			success:function(msg){
				 
				   var leng = msg.length;
				   
     			   if(leng > 0){//正确  
     				   
     				  industry_page++;
     				  document.getElementById('industry_page'+did).value = industry_page;
     				  
     				  var html = '';
     				  for(var i=0; i<leng;i++){
     					  html += '<p>'+msg[i]+'</p>';
     				  }
     				 
     				  $('#industryreply'+did).append(html);
    			   }else{
    				   $('#industry_get_reply'+did).hide();
    				   alert("没有回复内容！");
    			   }
     			}  
     		});
		}
	}
	
	//产品评论回复“是”功能
	function add_product_like(did)
	{
		var cookiename = "product_discuss_yes_cookie"+did;
 		if(!$.cookie(cookiename)){
 			$.ajax({
    			type:"POST",
    			url:ise_www_url+"ajax_fun_reply/",
    			data: "fun_type=3&did="+did,
    			dataType:"json",
    			success:function(msg){
				 	$.cookie(cookiename,did);
				 	window.location.reload();
    			}  
    		});
        }else{
       	 	alert('您已经提交过意见了，请不要重复哦！');
        }
	}
	
	//产品评论回复“否”功能
	function add_product_unlike(did)
	{
		var cookiename = "product_discuss_yes_cookie"+did;
 		if(!$.cookie(cookiename)){
 			$.ajax({
    			type:"POST",
    			url:ise_www_url+"ajax_fun_reply/",
    			data: "fun_type=4&did="+did,
    			dataType:"json",
    			success:function(msg){
				 	$.cookie(cookiename,did);
				 	window.location.reload();
    			}  
    		});
        }else{
       	 	alert('您已经提交过意见了，请不要重复哦！');
        }
	}
	 
