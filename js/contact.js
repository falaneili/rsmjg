//2016
$(function(){

	$('#messageFormBtn').bind('click', message);

})


function message(){
	
	var name = $('#name');
	var codeId = $('#codeId');
	var title = $('#title');
	var msg = $('#msg');
	var phone = $('#phone');
	var email = $('#email');
	var temp = document.getElementById("email");//对电子邮件的验证
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;



	if(name.val() == ''){
		alert('姓名不能为空！！');
		name.focus();
		return false;
	}

	if(title.val() == ''){
		alert('标题不能为空！！');
		title.focus();
		return false;
	}

	if(phone.val() == ''){
		alert('手机不能为空！！');
		phone.focus();
		return false;
	}

	var regPhone = /^1[3|4|5|6|7|8]\d{9}$/;
	if(!regPhone.test(phone.val())){
		alert('手机号格式不对，请重新输入');
		phone.focus();
		return false;;
	}
	
	if(email.val() == ''){
		alert('邮箱不能为空！！');
		email.focus();
		return false;
	}
	
	if(!myreg.test(temp.value))
    {
    alert("请填写正确的邮箱格式！");
		$("#email").focus();
		return false;
    }
	
	if(msg.val() == ''){
		alert('内容不能为空！！');
		msg.focus();
		return false;
	}


	if(codeId.val() == ''){
		alert('验证码不能为空！！');
		codeId.focus();
		return false;
	}

	

	var html = '<div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div>';
	$('.spinner').html(html);
	$('.spinner').show();

	$.ajax({
		url  : 'guestbook_ok.php',
		data : $('#messageForm').serializeArray(),// 要提交的表单 ,
		type : 'POST',
		cache:false,  
		success:function(data) {

			alert(data);

			var spinner = $('.spinner')[0];

			if(data == 0){
				alert('验证码不正确，请重新输入！！');
				$('.spinner').hide();
				return false;
			}

			if(data == 1){

			}

			
			if(spinner){
				$('.spinner').html('提交成功');
				setTimeout(function(){

					$('.spinner').hide();

					$('#name').val('');
					$('#codeId').val('');
					$('#title').val('');
					$('#msg').val('');
					$('#phone').val('');
					$('#email').val('');

					$('textarea[name=message]').val('');

					$('.codeImg').click();


				}, 500);
			}else{
				alert('提交成功！！');
					
			}
			

		 },    
		 error : function() {
			 return false;    
		 }    
	});

	return false;
}