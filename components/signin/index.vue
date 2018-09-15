<template>
	<transition name='main'>
	
		<div class="lt-full zmiti-signin-main-ui " :class="{'show':show}"  ref='page'>
			<div>
				<img :src="imgs.qd" alt="">
			</div>

			<div v-tap='[signin]' class="zmiti-qd-btn" @touchstart='isPress = true' @touchend='isPress = false' :class="{'active':isPress}">
				点击签到
			</div>

			<div class="lt-full zmiti-signin-success" v-if='showQdSuccess'>
				<div>
					<div>
						<img :src="imgs.success" alt="">
						<div style="height:30px;"></div>
						<div>签到成功</div>
					</div>
					<div class="zmiti-btn" v-tap='[back]'>
						返回
					</div>
				</div>
			</div>

			<Toast :msg='msg'></Toast>
		</div>
	
	</transition>
</template>

<script>
	import './index.css';
	
	import {
	
		imgs
	
	} from '../lib/assets.js';

	import IScroll from 'iscroll';
	
	import Toast from '../toast/toast'
	import $ from 'jquery';
	
	import zmitiUtil from '../lib/util';

	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				imgs,
				showTeam: false,
				showQrcode: false,
				show: false,
				msg:"",
				viewW: window.innerWidth,
				viewH: window.innerHeight,
				showMasks: false,
				isPress:false,
				showQdSuccess:false
			}
		},
	
		components: { 
			Toast
		},
		methods: {
			restart() {
				window.location.href = window.location.href.split('?')[0];
			},
			signin(){//打卡
				var {obserable} = this;
				var s = this;
				$.ajax({
					url:window.baseUrl+'/wenming/signin/',
					type:'post',
					data:{
						pnumber:window.pNumber,
						wxopenid:window.openid
					},
					success(data){
						if(data.getret === 0){
							s.showQdSuccess = true;
							obserable.trigger({
								type:'signin'
							})
						}else{

						}
					}
				})
				//this.showQdSuccess = true;
			},
			back(){
				this.show  = false;
				this.showQdSuccess = false;
				this.obserable.trigger({
					type:'toggleIndex',
					data:{
						show:true
					}
				})
				this.obserable.trigger({
					type:'hideForm'
				})

			}
			
		},
	
		mounted() {
			

			var {obserable} = this;
			var s = this;
			obserable.on('showQD',()=>{

				$.ajax({
					url:window.baseUrl+'/wenming/getsignuplist/',
					type:'post',
					data:{
						wxopenid:window.openid,
						pnumber:window.pNumber
					},
					success(data){
						if(data.getret === 0 ){
							
							if(data.list.length<=0){
								s.show = false;
								obserable.trigger({
									type:'showForm'
								})
								return;
							}
							else{
								s.show = true;
								if( data.list[data.list.length-1].status*1 === 1 && !data.list[data.list.length-1].issign){
									s.signin();

									setTimeout(()=>{
										s.back()
									},2000)

									return;

								};
								if(!window.openid || data.list[data.list.length-1].status*1 !== 1){//没有审核通过或者已经签到
									s.show = false;
									obserable.trigger({
										type:'showForm'
									})
									obserable.trigger({
										type:'toggleIndex',
										data:{
											show:false
										}
									})
									return;
								}
								if(data.list[data.list.length-1].issign){
									s.msg = '你已签到';
									s.show = false;
									obserable.trigger({
										type:'toggleIndex',
										data:{
											show:true
										}
									})
								}
							}
							
						}
						console.log(data);
					}
			})



				
			})
		}
	
	}
</script>