<template>
	<div>
		<van-cell title="设置密码" is-link class="fen" @click="$router.push('/set-new-pass')" />
		<van-cell title="注销账号" is-link class="fen"/>
		<van-button type="danger" class="btn">退出登录</van-button>
	</div>
</template>
<script>
	export default {
		data() {
			return{}
		},
		methods:{},
		created(){}
	}
</script>
<style scoped>
	.fen{
		margin-bottom: 15px;
	}
	.btn{
		width: 90%;
		margin-top: 40px !important;
		border-radius: 10px !important;
		color: white;
		margin-left: 17px !important;	
	}
</style>