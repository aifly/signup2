<template>
	<div class="lt-full zmiti-index-main-ui "  :class="{'show':show}">
		<div class="zmiti-title">
			<div class="zmiti-index-logo">
				<img :src="imgs.logo" alt="">
			</div>
			<img @touchstart='imgStart' :src="imgs.title">
			<span style="display:inline-block;font-size:32px;top:-30px;text-indent:2em;position:relative">您好，{{userinfo.username}}</span>
			<div class="zmiti-tips">
				<div>温馨提示：</div>
				<div>
					<div>请及时收藏本页面，方便下次使用。</div>
				</div>
			</div>
		</div>
		<div class="zmiti-nav">
			<ul>
				<li v-for="(menu,i) in menus" :key="i" v-tap='[menuClick,i]'>
					<div>
						<img :style="{width:menu.width}" :src="menu.defaultImg" alt="">
					</div>
					<div :class="menu.class">{{menu.name}}</div>
				</li>
			</ul>
		</div>

		<section class="lt-full zmiti-qd-mask" v-show='showQD'>
			<div>
				<img :src="imgs.qiandaoBg" alt="">
				<div class="zmiti-qd-info">
					<div>
						请打开微信扫一扫
					</div>
					<div>
						扫描签到二维码即可成功签到
					</div>
					<div class="zmiti-btn" v-tap='[close]'>关 闭</div>
				</div>
			</div>
		</section>

		<div v-if='mynumberinfo' class="lt-full zmiti-num-mask">
			<div>
				<div class="zmiti-number">{{mynumberinfo}}</div>
				<div class="zmiti-number" style="text-align:center;">{{mynumber}}</div>
				<div class="zmiti-btn" v-tap='[closeInfo]'>关 闭</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:false,
				showMasks:false,
				viewW:window.innerWidth,
				mynumber:"",
				mynumberinfo:"",
				userinfo:{},
				showQD:false,//显示签到提示
				menus:window.menus,
				
			}
		},
		components:{
		},
		
		methods:{

			closeInfo(){
				this.mynumber = '';
				this.mynumberinfo = '';
			},

			imgStart(e){
				e.preventDefault(); 
			},
			close(){
				this.showQD = false;
			},
			menuClick(index){
				var {obserable } =this;
				
				switch (index) {
					case 0:
					case 1://签到
					case 2:
					case 6:
					case 4:
					case 7:
					if(!window.openid){
						return;
					}
					window.location.href = this.menus[index].href+'?openid='+window.openid;
					break;
					case 3:
						this.mynumberinfo = '我的房间号是：'	
						this.mynumber = this.userinfo.roomnumber||'未分配';
					break;
					/* case 4:
						this.mynumberinfo = '我的座位号是：'	
						this.mynumber = this.userinfo.seatnumber||'未分配';
						
						
					break; */
					case 5:
						obserable.trigger({
							type:'showSearch',
							data:false
						})
					break;
					
					break;
					case 8:
						obserable.trigger({
							type:'showSearch',
							data:true
						})
					break;
				}
			}
	 
		},
		mounted(){


			var {obserable} = this;

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			});

			var s = this;

			$.ajax({
				url:window.baseUrl+'/wenming/getsignuplist/',
				type:'post',
				data:{
					wxopenid:window.openid,
					pnumber:window.pNumber
				},
				success(data){
					if(data.getret === 0 ){
						s.userinfo = data.list[0];
						
					}
					console.log(data);
				}
		})

		
		
			obserable.on('signin',()=>{
				s.issign = true;
				/*s.menus.forEach((item,i)=>{
					if(i>1){
						item.defaultImg = item.img;
						item.class = ''
					}
				});*/
			})
			 
		}
	}
</script>