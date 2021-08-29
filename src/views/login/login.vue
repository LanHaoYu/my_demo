<template>
	<div>
		<van-nav-bar left-arrow @click-left="onClickLeft" />
		<div class="div_img">
			<img src="./login_img/A_03.jpg" class="img">
		</div>
		<div class="ipt_btn_div">
			<img src="./login_img/A_07.jpg" class="ipt_img">
			<input type="text" class="ipt" placeholder="请输入手机号" v-model="form.tel">
			<button class="btn" @click="send">
				<span v-show="isshow">发送验证码</span>
				<span v-show="!isshow">{{count}}后重新发送</span>
			</button>
		</div>
		<div class="ipt_btn_div2">
			<img src="./login_img/A_11.jpg" class="ipt_img2">
			<input type="text" class="ipt" placeholder="请输入验证码" v-model="form.code" >
		</div>
		<button type="button" class="login_btn" @click="login">
			登 录
		</button>
		<div class="login_text">
			<span>*未注册的手机号将自动注册</span>
			<span>密码登录</span>
		</div>
		<div class="login_span">——————— 第三方登录 ———————</div>
		<div class="login_img">
			<div class="log_img">
				<div>
					<img src="./login_img/A_14.jpg" class="login_son">
					<p class="p">微信登录</p>
				</div>
				<div>
					<img src="./login_img/A_16.jpg" class="login_son">
					<p class="p">QQ登录</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		smsCode
	} from '@/utile/api.js'
	export default {
		data() {
			return {
				isshow:true,
				form:{
					code:"",
					tel:"",
				},
				timer:"",
				count:60,
				statu:""
			}
		},
		methods: {
			async send(){
				var reg_tel=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
				if(reg_tel.test(this.form.tel)==false){
					this.$toast.fail('手机号格式错误')
				}else{
					this.isshow=false
					var a=await smsCode({mobile:this.form.tel,sms_type:'login'})
					this.statu=a.code
					console.log(this.statu)
					this.timer=setInterval(()=>{
						this.count--
						if(this.count==0){
							clearInterval(this.timer)
							this.count=3
							this.isshow=true
							
						}
					},1000)
				}
				if(this.statu==201){
					this.$toast.fail("请勿频繁发送")
				}
				if(this.form.tel==""){
					this.$toast.fail('手机号不能为空')
				}
			},
			login(){
				if(this.form.code=="" && this.form.tel==""){
					this.$toast.fail('手机号或者验证码不能为空')
					return false
				}
				if(this.statu==200){
					this.$router.push('/index')
				}else{
					this.$toast.fail("请发送验证码")
				}
			},
			onClickLeft() {
				this.$router.go(-1)
			},
		},
		async created() {
			// var a=await smsCode({
			// 	mobile:18832423180,
			// 	sms_type:"login"
			// })
			// console.log(a)
		}
	}
</script>
<style scoped>
	.p{
		font-size: 10px;
		color: #999;
	}
	.login_son{
		width: 40px;
		height: 40px;
	}
	.log_img{
		width: 150px;
		height: 60;
		display: flex;
		justify-content: space-between;
		margin: auto;
		color:#999999;
		text-align: center;
	}
	.login_img{
		width: 100%;
		height: 65px;
	}
	.login_span{
		height: 25px;
		width: 300px;
		text-align: center;
		font-size: 13px;
		line-height: 25px;
		color: #999;
		margin-left: 30px;
		margin-bottom: 10px;
	}
	.login_text{
		margin-left: 30px;
		width: 300px;
		height: 25px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		color: #999;
		line-height: 25px;
		margin-bottom: 90px;
	}
	.login_btn{
		margin-top: 50px;
		width: 300px;
		height: 45px;
		border: none;
		background-color: #ec6300;
		color: white;
		margin-left: 30px;
		font-size: 16px;
		text-align: center;
		border-radius: 5px;
		margin-bottom: 8px;
	}
	.ipt_img{
		width: 15px;
		height: 20px;
		position: absolute;
		top: -10px;
		left: 36px;
	}
	.ipt_btn_div{
		margin: auto;
		position: relative;
	}
	.ipt_btn_div2{
		width: 100%;
		height: 30px;
		margin-top: 100px;
		position: relative;
	}
	.ipt_img2{
		width: 19px;
		height: 20px;
		position: relative;
		top: 6px;
		left: 34px;
	}
	.div_img{
		margin-top: 50px ;
		margin-bottom: 50px;
	}
	.btn{
		position: absolute;
		left: 262px;
		top: -16px;
		padding: 8px;
		border: none;
		background-color: #ec6300;
		color: white;
	}
	.ipt{
		width: 270px;
		height: 30px;
		border: none;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		padding: 20px;
		transform: translate(-50%,-50%);
		box-sizing: border-box;
	}
	.img{
		width: 375px;
	}
	.input{
		width: 600px;
		height: 30px;
		background-color: red;
	}
</style>
