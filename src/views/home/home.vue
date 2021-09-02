<template>
	<div>
		<router-view></router-view>
		<van-tabbar v-model="active" active-color="#ee0a24" class="tab">
			<van-tabbar-item  v-for="(item,index) in tabbarlist" :key='index' :to="item.url">
				<img :src="item.nav_img" class="tab_img" >
				<span class="tab_name">{{item.name}}</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	import {
		homedatas,tabbar
	} from '@/utile/api.js'
	export default {
		data() {
			return {
				active: 0,
				tabbarlist:''
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			async get(){
				var a=await tabbar()
				this.tabbarlist=a.data.index
			}
		},
		created() {
			this.get()
		}
	}
</script>
<style scoped>
	.tab_name{
		font-size: 12px;
		display: block;
		text-align: center;
	}
	.tab_img{
		width: 30px;
		height: 30px;
	}
	.tab{
		margin-top: 50px;
	}
</style>
