<template>
	<div>
		<van-form @submit="onSubmit">
			<van-field v-model="username" label="姓名" placeholder="必填最多输入25个汉字" />
			<van-field v-model="tel" label="手机号" placeholder="请输入手机号" />
			<van-field v-model="address_detail_info" label="地址信息" placeholder="请选择省/市/区/街道" />
			<van-field v-model="address_detail" label="详细地址" placeholder="请输入详细地址,如道路/门牌号/校区等" />
			<van-cell-group>
			  <van-switch-cell v-model="checked" title="设为默认地址" />
			</van-cell-group>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">提交</van-button>
			</div>
		</van-form>
	</div>
</template>
<script>
	import { address } from "@/utile/api.js"
	export default {
		data() {
			return {
				checked: false,
				username: '',
				tel: '',
				address_detail_info:'',
				address_detail:''
			}
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
		},
		async created(){
			var a=await address()
			console.log(a)
		}
	}
</script>
<style>
</style>
