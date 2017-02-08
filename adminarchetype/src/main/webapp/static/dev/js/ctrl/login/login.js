$('#login_form').click(function() {
      var username = $("#username").val();
      var password = $("#password").val();
      console.log(username);
        var obj = {};
        obj.url="/doLogin";
        obj.params={
                    "username":username,//用户名
                    "password":$.md5(password)//密码
                };
        obj.type = "post";
        obj.success=function(data){
            if(data.retCode == 200){
                var _token = data.body;
                JB.Core.setCookie("financing_token",_token);
                window.location.href="/center";
            }else{
                $("#prompt").html(data.message);
            }
        };
        obj.error=function(data){
                    alert("err");
                }
        JB.Core.ajax(obj);
});