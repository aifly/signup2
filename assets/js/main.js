var baseUrl = 'http://api.zmiti.com/v2';
var wmUtil = {
    changeURLPar: function (url, arg, val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + val;
        return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[\?]') ? url + '&' + replaceText : url + '?' + replaceText);
    },
    init:function () {

        if (!this.isWeiXin()){
            $('body').html('<h1>请在微信中打开</h1>');
            return;
        }

        var s = this;

        var openid = this.getQueryString('openid');
        if(!openid){
            window.location.href = 'http://h5.zmiti.com/public/signup/index.html'
        }
        $.ajax({
            url: baseUrl + '/wenming/getsignuplist/',
            type: 'post',
            data: {
                wxopenid: openid,
                pnumber:1
            },
            success:function (data) {
                if(data.getret === 0){
                    if(data.list.length<=0){
                        window.location.href = 'http://h5.zmiti.com/public/signup/index.html';
                    }
                    if(data.list[0].status !== 1){
                        window.location.href = 'http://h5.zmiti.com/public/signup/index.html'
                    }

                    $('a').each(function(){
                        $(this).attr('href', s.changeURLPar($(this).attr('href'),'openid',openid))
                    })
                    
                }
            }
        })
    },
    isWeiXin: function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    },
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return (r[2]);
        return null;
    }
}

wmUtil.init();