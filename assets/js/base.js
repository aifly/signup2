var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	//baoming:'./assets/images/baoming.png',
	//yibaoming:'./assets/images/yibaoming.png',
	gonggao:'./assets/images/gonggao.png',
	//gonggao1:'./assets/images/gonggao1.png',
	jiaoliu:'./assets/images/jiaoliu2.png',
	kecheng:'./assets/images/kecheng.png',
	//kecheng1:'./assets/images/kecheng1.png',
	//qiandao:'./assets/images/qiandao.png',
	//qiandao1:'./assets/images/qiandao1.png',
	tongxunlu:'./assets/images/tongxunlu.png',
	//tongxunlu1:'./assets/images/tongxunlu1.png',
	xuzhi:'./assets/images/xuzhi.png',
	//xuzhi1:'./assets/images/xuzhi1.png',
	zhusu:'./assets/images/zhusu.png',
	//zhusu1:'./assets/images/zhusu1.png',
	ziliao:'./assets/images/ziliao.png',
	//ziliao1:'./assets/images/ziliao1.png',
	zuowei:'./assets/images/zuowei2.png',
	//sousuo:'./assets/images/sousuo.png',
	success:'./assets/images/success.png',
	qiuzhu:'./assets/images/qiuzhu.png',


	title:'./assets/images/title1.jpg',
	qd:'./assets/images/qd.jpg',
	qiandaoBg:'./assets/images/qiandao-bg.png',
	baomingTitle:'./assets/images/baoming-title.jpg',
}
 var arr = [];


 for (var attr in imgs) {
 	arr.push(imgs[attr]);
 }

window.pNumber = 3; //第三期
window.getdate = '2018年8月14日至2018年8月14日16日';

window.isNeedWXTips = true;

window.menus = [{
	name: "培训须知",
	img: imgs.xuzhi,
	defaultImg: imgs.xuzhi,
	img1: imgs.xuzhi1,
	width: '65px',
	href: "http://www.wenming.cn/specials/wmcj/2018term/xz/"
}, {
	name: "课程安排",
	img: imgs.kecheng,
	defaultImg: imgs.kecheng,
	width: '54px',
	href: "http://www.wenming.cn/specials/wmcj/2018term/kcap/"
}, {
	name: "新闻中心",
	img: imgs.gonggao,
	defaultImg: imgs.gonggao,
	img1: imgs.gonggao1,
	width: '65px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term/news/'
}, {
	name: "我的房间",
	img: imgs.zhusu,
	defaultImg: imgs.zhusu,
	img1: imgs.zhusu1,
	width: '68px'
}, {
	name: "专家授课",
	img: imgs.zuowei,
	defaultImg: imgs.zuowei,
	img1: imgs.zuowei1,
	width: '70px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term/zj/'
}, {
	name: "我的同学",
	img: imgs.tongxunlu,
	defaultImg: imgs.tongxunlu,
	img1: imgs.zuowei1,
	width: '60px'
}, {
	name: "经验交流",
	img: imgs.jiaoliu,
	defaultImg: imgs.jiaoliu,
	img1: imgs.jiaoliu1,
	width: '50px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term/jyjl/'
}, {
	name: "文件汇编",
	img: imgs.ziliao,
	defaultImg: imgs.ziliao,
	img1: imgs.ziliao1,
	width: '60px',
	href: 'http://www.wenming.cn/specials/wmcj/2018term/wjhb/'
}, {
	name: "我要求助",
	img: imgs.qiuzhu,
	defaultImg: imgs.qiuzhu,
	img1: imgs.sousuo1,
	width: '55px'
}]

var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
};

window.leaders = [{
	"username": "董青",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网总编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1117",
	"status": "",
	"seatnumber": ""
}, {
	"username": "周黎明",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网副总编辑",
	"province": "",
	"mobile": "",
	"roomnumber": "1111",
	"status": "",
	"seatnumber": ""
}, {
	"username": "张其胜",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网编辑部主任",
	"province": "",
	"mobile": "13501350269",
	"roomnumber": "1115",
	"status": "",
	"seatnumber": ""
}, {
	"username": "周海刚",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网干部",
	"province": "",
	"mobile": "18511582283",
	"roomnumber": "1103",
	"status": "",
	"seatnumber": ""
}, {
	"username": "简福海",
	"sex": 1,
	"nation": "汉",
	"job": "中央文明办中国文明网干部",
	"province": "",
	"mobile": "13615011866",
	"roomnumber": "1118",
	"status": "",
	"seatnumber": ""
}, {
	"username": "邓植尹",
	"sex": 1,
	"nation": "壮",
	"job": "中国文明网编辑部副主任",
	"province": "",
	"mobile": "13811396079",
	"roomnumber": "1118",
	"status": "",
	"seatnumber": ""
}, {
	"username": "张殊凡",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网综合新闻组编辑",
	"province": "",
	"mobile": "13581771529",
	"roomnumber": "1106",
	"status": "",
	"seatnumber": ""
}, {
	"username": "桑小婷",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网网络文明传播组编辑",
	"province": "",
	"mobile": "13810706817",
	"roomnumber": "1106",
	"status": "",
	"seatnumber": ""
}, {
	"username": "逯江楠",
	"sex": 0,
	"nation": "满",
	"job": "中国文明网编辑",
	"province": "",
	"mobile": "15811273878",
	"roomnumber": "1102",
	"status": "",
	"seatnumber": ""
}, {
	"username": "荣  毅",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网编辑",
	"province": "",
	"mobile": "15010143678",
	"roomnumber": "1110",
	"status": "",
	"seatnumber": ""
}, {
	"username": "朱丽晨",
	"sex": 0,
	"nation": "汉",
	"job": "中国文明网编辑",
	"province": "",
	"mobile": "15120029960",
	"roomnumber": "1110",
	"status": "",
	"seatnumber": ""
}];
 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();