/**
 * Created by tengxia on 2016/6/30.
 */
/**
 *方法绑定
 */
$(function () {
    $('#sendButton').click(function () {
        var val = $('#inputContain input').val();
        send(val)
    })

    $('#mind li').click(function () {
        send($(this).text());
    });
})

/**
 *
 * @param val
 */
function send(val) {
    if ($.trim(val)) {
        $('#ripple').fadeIn();
        var date = new Date_();
        $('#container').append('<div class="user"><div class="time">' + date.time + '</div><span class="span"></span></div>');
        $('.span:last').text(val);
        /*防止脚本注入*/
        clearInput();
        window.location.href = "#blank";

        setTimeout(function () {
            cellback(val)
        }, 500)
    } else {
        alert('你都没打字！');
    }
}

/**
 *
 * @constructor
 * @private
 */
var Date_ = function () {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.time = this.year + "-" + this.month + '-' + this.day + " " + this.hours + ':' + this.minutes + ':' + this.seconds;
}

function cellback(val) {
    var sData = {
        key: "ac2edd0c847b4d75a90129dc289591d2",
        info: val,
       userid:"liliang",
       loc:"深圳市宝安区"
    };
    $.ajax({
        url: "http://www.tuling123.com/openapi/api",
        data: sData,
        type: "POST",
        success: function (data) {
            generate(data.text)
       
        }
    })

}

/**
 *
 * @param val
 */
function generate(val) {
    var date = new Date_();
    $('#container').append('<div class="service"><div class="time">' + date.time + '</div><span class="span"></span></div>');
    $('.span:last').text(val);
    window.location.href = "#blank";
    $('#ripple').fadeOut();
}
/**
 * 清空输入框
 */
function clearInput() {
    $('#mind li').hide();
    $('#mind').hide();
    $('#inputContain input').val('');
}


