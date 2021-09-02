<template>
	<div>
		<van-empty description="暂无收货地址" />
		<van-button round block type="danger" native-type="submit" style="position: absolute;bottom: 5px;" 
		@click="$router.push('/address-edit')">添加新地址</van-button>
	</div>
</template>
<script>
 	export default {
		data() {
			return{}
		},
		methods:{},
		
	}
</script>
<style>
</style>