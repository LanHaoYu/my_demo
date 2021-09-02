<template>
	<div>
		<van-nav-bar left-arrow @click-left="onClickLeft" />
		<div class="div_img">
			<img src="./login_img/A_03.jpg" class="img">
		</div>
		<div class="ipt_btn_div">
			<img src="./login_img/A_07.jpg" class="ipt_img">
			<input type="text" class="ipt" placeholder="请输入手机号" v-model="form.tel">
		</div>
		<div class="ipt_btn_div2">
			<img src="./login_img/A_11.jpg" class="ipt_img2">
			<input type="password" class="ipt" placeholder="请输入密码" v-model="form.password" >
		</div>
		<button type="button" class="login_btn" @click="login" @keyup.enter="login">
			登 录
		</button>
		<div class="login_text">
			<span>找回密码</span>
			<span @click="$router.push('/login')">注册/密码登录</span>
		</div>
	</div>
</template>
<script>
	import { smsCode,login } from '@/utile/api.js'
	export default {
		data() {
			return {
				form:{
					password:"",
					tel:"",
				},
				timer:"",
				statu:""
			}
		},
		methods: {
		    async login(){
				if(this.form.code=="" && this.form.tel==""){
					this.$toast.fail('手机号或者验证码不能为空')
					return false
				}
				var a=await login({
					mobile:this.form.tel,
					type:1,
					client:"1",
					password:this.form.password
				})
				console.log(a)
				
				if(a.code==200){
					this.$router.push('/Person')
					this.$store.commit("setToken",{name:a.data.nickname,token:a.data.remember_token})
					console.log(this.$store.state.token)
					
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
<style>
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