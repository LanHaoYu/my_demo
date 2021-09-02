<template>
	<div>
		<van-contact-card type="add" add-text="请添加收货地址" @click="onAdd" />
	</div>
</template>
<script>
	import { shopInfo } from '@/utile/api.js'
	export default {
		data() {
			return{}
		},
		methods:{
			onAdd(){
				this.$router.push('/address')
			}
		},
	 	async created(){
			var a=await shopInfo({
				shop_id:this.$route.query.id,
				type:"7"
			})
			console.log(a)
		}
	}
</script>
<style>
</style>