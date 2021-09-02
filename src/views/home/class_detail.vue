<template>
	<div>
		<van-card :title="obj.introduction" :thumb="obj.avatar" />
		<van-tabs v-model="active">
			<van-tab title="老师介绍">
				<p>老师简介</p>
				<p>{{obj.introduction}}</p>
			</van-tab>
			<van-tab title="主要课程">
				<van-card v-for="(item,index) in mainlist" :key='index' 
					:thumb="item.cover_img" @click="go(item.id)">
					<template #title>
						<span style="font-size: 17px;">{{item.title}}</span>
					</template>
					<template #num>
						<span style="color:red;font-size: 16px;">{{item.brows_num}}</span>
					</template>
					<template #price>
						<span>{{item.sales_num}}人已经报名</span>
					</template>
				</van-card>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import {
		classdetail,
		mainclass
	} from '@/utile/api.js'
	export default {
		data() {
			return {
				active: 0,
				id: "",
				obj: {},
				mainlist: []
			}
		},
		methods: {
			async go(id){
				this.$router.push({
					path:"/courseinfo",
					query:{
						id:id
					}
				})
			},
			async get() {
				var a = await classdetail(this.id)
				this.obj = a.data.teacher
				var b = await mainclass({
					teacher_id: this.id
				})
				console.log(b.data.list)
				this.mainlist = b.data.list
			}
		},
		created() {
			this.id = this.$route.query.id
			this.get()
		}
	}
</script>
<style>
</style>
