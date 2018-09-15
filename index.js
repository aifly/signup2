import Vue from "vue";
import './components/css/index.css';
import Index from './components/index/index';
import Form from './components/form/index';
import Signin from './components/signin/index';
import Search from './components/search/index';
 
import Obserable from './components/lib/obserable';
import {
	imgs
} from './components/lib/assets'
import zmitiUtil from './components/lib/util.js'
import $ from 'jquery';
import './components/lib/touch.js'
import vueTap from 'vue-js-tap';
Vue.use(vueTap);

import Toast from './components/toast/toast'

//var VueTouch = im('vue-touch')
/*import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'})*/


var obserable = new Obserable();


//Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
	data: {
		obserable,
		rotate: false,
		imgs,
		showMask: false,
		viewH: document.documentElement.clientHeight,
		isShare: false,
		show: false,
		username: '',
		pv:820121,
		width:0,
		loaded: false,
		nickname: '',
		headimgurl: '',
		isWeixin:false,
		scale:"(1,1)",
		errorMsg:'',
		scaleStyle:{
			WebkitTransform:'scale(1,1)'
		},
		playStyle: {

		}
	},
	el: '#app',
	/*<audio ref='audio' src='./assets/music/bg.mp3'  loop></audio>

		<audio src='./assets/music/water.mp3' ref='water'></audio>
		<audio src='./assets/music/photo.mp3' ref='photo'></audio>
		<audio src='./assets/music/bg.mp3' ref='audio'></audio>
		<audio src='./assets/music/tu.mp3' ref='tu' loop></audio>
		<Music :obserable='obserable'></Music>
		<Main :pv='pv' :nickname='nickname' :headimgurl='headimgurl'  v-if='show && !isShare'  :obserable='obserable'></Main>
		*/
		template: `<div>
			<section v-if='isWeixin'>
				<Signin :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Signin>
				<Index :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Index>
				<Form :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Form>
				<Search :pv='pv' :nickname='nickname' :headimgurl='headimgurl'   v-if='show && !isShare'  :obserable='obserable'></Search>
				<div  v-if='!loaded' :style='{background:"#fff"}' class='zmiti-loading lt-full'>
					<div class='zmiti-loading-ui'>
						<div>
							<img src=${imgs.logo} />
							<span :style = "scaleStyle" ></span>
						</div>
						<div class='zmiti-progress'>{{width}}%</div>
					</div>
				</div>

			</section>

			<section v-if='!isWeixin' class='lt-full'>
				<Toast :errorMsg='errorMsg'></Toast>
			</section>



	
	</div>`,
	methods: {

		loading: function(arr, fn, fnEnd) {
			var len = arr.length;
			var count = 0;
			var i = 0;

			function loadimg() {
				if (i === len) {
					return;
				}
				var img = new Image();
				img.onload = img.onerror = function() {
					count++;
					if (i < len - 1) {
						i++;
						loadimg();
						fn && fn(i / (len - 1), img.src);
					} else {
						fnEnd && fnEnd(img.src);
					}
				};
				img.src = arr[i];
			}
			loadimg();
		},
	
		updatePv() {
			$.ajax({
				url: window.protocol + '//api.zmiti.com/v2/custom/update_pvnum/',
				type: 'post',
				data: {
					customid: 64
				}
			}).done((data) => {
				if (data.getret === 0) {
					this.pv = data.totalpv;
					this.randomPv = data.randtotalpv;


					//zmitiUtil.wxConfig('我是第'+this.pv+'位参与者',window.desc);
					//zmitiUtil.wxConfig('我是'+(this.nickname||'新华社网友') +'，已获得改革开放40周年勋章，一起来吧！','勋章编号：No.'+this.pv);
				}
			});
		}
	},
	components: {
		Index,
		Form,
		Signin,
		Search,
		Toast
	},
	mounted() {

		this.isWeixin = !window.isCheckWeixin || zmitiUtil.isWeiXin();
		if (!zmitiUtil.isWeiXin() && window.isCheckWeixin) {
			this.errorMsg = '请在微信中访问'
		}
		var s = this;

		var keyword = (zmitiUtil.getQueryString('keyword'));
		

		
		this.keyword = keyword;

		obserable.on("setUserInfo",(data)=>{

			this.nickname = data.nickname;
			this.headimgurl = data.headimgurl;
		})
		

		s.loading(arr, (scale) => {
			s.width = scale * 100 | 0;
			s.scaleStyle.WebkitTransform = "scale(" + (1 - (scale * 100 | 0) / 100) + ",1)";
		}, () => {
			s.show = true;
			s.loaded = true;
			
			if (keyword === 'qd') {
				obserable.trigger({
					type:'toggleIndex',
					data:{
						show:false
					}
				});

				setTimeout(() => {
					obserable.trigger({
						type: 'showQD'
					})
				}, 100);
				
			}
		})

		
		

		

		window.$ = $;

		obserable.on('showShare', () => {
			this.showMask = true;
		})

		obserable.on('updatePv', (data) => {
			this.randomPv += data;
			this.pv += data;

		});
		zmitiUtil.getOauthurl(obserable);
		//zmitiUtil.wxConfig(document.title, window.desc);
		this.updatePv();
		return;
		/*$.ajax({
			type:'post',
			url:"http://api.zmiti.com/v2/weixin/getwxuserlist/",
			data:{
				worksid:window.customid
			},
			error(){

				clearTimeout(t);
				window.headImgs = [
				]

				for(var i =1 ;i<=Math.min(100,870 - arr.length);i++){
					headImgs.push('./assets/images/'+i+'.jpg');
				}
				arr.concat(headImgs);

				s.loading(arr, (scale) => {
					s.width = scale * 100 | 0;
				}, () => {
					s.show = true;
					s.loaded = true;
				})
			},
			success(data){
				clearTimeout(t);
				if(data.getret === 0){
					

					if(data.list.length>=870){
						data.list.length = 870;
					}
					window.headImgs = [
						
					]
					headImgs =  headImgs.concat(data.list.map((item)=>{return item.headimgurl}));


					for(var i =1 ;i<=Math.min(100,870 - arr.length);i++){
						headImgs.push('./assets/images/'+i+'.jpg');
					}
					arr.concat(headImgs);

					s.loading(arr, (scale) => {
						s.width = scale * 100 | 0;
					}, () => {
						s.show = true;
						s.loaded = true;
					})
				}
			}
		})*/
	}
})