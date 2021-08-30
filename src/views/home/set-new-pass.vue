<template>
	<div>
		<van-form @submit="onSubmit">
			<div style="position: relative;">
				<van-field v-model="tel" placeholder="请输入手机号" :rules="[{ required: true, message: '请填入手机号' }]" />
				<span style="color: red;position: absolute;right: 30px;top: 15px;" @click="send">获取验证码</span>
			</div>
			<van-field v-model="sms" type="text" placeholder="请输入验证码"
				:rules="[{ required: true, message: '请输入验证码' }]" />
			<van-field v-model="password" type="password" placeholder="请输入密码"
				:rules="[{ required: true, message: '请输入密码' }]" />
			<div style="margin: 16px;">
				<van-button round block type="danger" native-type="submit" >确定</van-button>
			</div>
		</van-form>
	</div>
</template>
<script>
	import { smsCode,edit } from '@/utile/api'
	export default {
		data() {
			return {
				tel: '',
				password: '',
				sms: ""
			};
		},
		methods: {
			async onSubmit(values) {
				var a=await edit({
					mobile:this.tel,
					password:this.password,
					sms_code:this.sms
				})
				console.log(a)
			},
			async send() {
				var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
				if (reg_tel.test(this.tel) == false) {
					this.$toast.fail('手机号格式错误')
				}else{
					var a=await smsCode({
						mobile:this.tel,
						sms_type:'getPassword'
					})
					console.log(a)
				}

			}
		},
	};
</script>
<style>

</style>
