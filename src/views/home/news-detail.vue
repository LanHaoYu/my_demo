<template>
	<div>
		<div>
			<img :src="info.thumb_img" class="header_img" >
		</div>
		<div class="title">
			{{info.title}}
		</div>
		<div class="desc_div">
			<span>{{info.click_rate}}次预览</span>
			<span>{{info.created_at}}</span>
		</div>
		<div class="description_div">
			<p>{{info.description}}</p>
		</div>
		<div v-html="info.content" class="content_div"></div>
	</div>
</template>
<script>
	import { news_detail } from '@/utile/api'
	export default {
		data() {
			return{
				info:{}
			}
		},
		methods:{
			async get(){
				var res=await news_detail({
					information_id:this.$route.query.id
				})
				console.log(res)
				this.info=res.data
			}
		},
		created(){
			this.get()
		}
	}
</script>
<style>
	.content_div{
		font-size: 18px;
		width: 90%;
		margin: 20px auto;
	}
	.description_div{
		width: 80%;
		border-bottom: 1px solid #999;
		text-align: center;
		height: 40px;
		color: #999;
		font-size: 18px;
		margin-top: 20px;
		margin: 10px auto;
	}
	.desc_div{
		width: 90%;
		height: 25px;
		color: #999;
		display: flex;
		justify-content: space-between;
		margin: 10px auto;
		font-size: 12px;
	}
	.title{
		font-size: 23px;
		width: 80%;
		margin: 20px auto;
	}
	.header_img{
		width: 375px;
	}
</style>