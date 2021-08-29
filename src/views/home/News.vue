<template>
	<div>
		<van-tabs v-model="active">
		  <van-tab title="全部">
			  <van-card
			    v-for="(item,index) in newslist" 
				:key='index'
			    num="2"
			    price="2.00"
			    :desc="item.description"
			    :thumb="item.thumb_img"
			  >
			    <template #title>
			      <span class="title">{{item.title}}</span>
			    </template>
				<template >
				  
				</template>
			  </van-card>
		  </van-tab>
		  <van-tab 
		  v-for="(item,index) in navlist" :key='index'
		  :title="item.name">内容 2</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import { headernav,new_data } from '@/utile/api'
	export default {
		data() {
			return{
				 active: 0,
				 navlist:'',
				 newslist:''
			}
		},
		methods:{
			async get(){
				var a=await headernav()
				this.navlist=a.data
			},
			async get_data(){
				var a=await new_data()
				this.newslist=a.data.list
				console.log(a.data.list)
			}
		},
		created(){
			this.get()
			this.get_data()
		}
	}
</script>
<style scoped>
	.title{
		font-size: 17px;
	}
</style>