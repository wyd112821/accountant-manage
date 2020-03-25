layui.define(['jquery'], function(exports){
    var $ = layui.jquery;

    // 正则验证
    regex = {
        isPhone: function (value) {
            //验证手机号
            var tmp1 = /^1[34578][0-9]{9}$/;
            if (tmp1.test(value)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    // 倒计时
    countDown = function(obj) {
        var yzmBtn = $(obj);
        var count = 60;
        var resend = setInterval(function(){
            count--;
            if(count > 0) {
                yzmBtn.text(count + "秒后重发")
            } else {
                clearInterval(resend);
                yzmBtn.text("发送验证码").removeAttr('disabled');
                yzmBtn.removeClass('disabled-btn');
            }
        }, 1000)
        yzmBtn.attr('disabled',true).addClass('disabled-btn');
    }

    exports('tool', {});
});