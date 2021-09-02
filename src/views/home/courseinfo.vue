<template>
	<div class="div">
		<!-- banner -->
		<div class="banner">
			<img :src="info.cover_img" class="banner_img">
		</div>
		<div class="box_desc">
			<div class="desc">
				<p class="desc_p">{{info.title}}</p>
				<p style="color: #999;">剩余名额：{{info.store_num}}</p>
				<p style="color: #999;">报名截止时间：{{info.store_num}}</p>
				<p style="color: #999;">开课时间：{{info.store_num}}</p>
				<p style="color: #999;">开课地点：{{info.store_num}}</p>
				<p style="color: #999;">开课地点：{{info.province_name}}{{info.district_name}}{{info.address}}</p>
				<p style="color: red;">{{info.price}}</p>
			</div>
		</div>
		<div class="mid_div">
			<div class="mid">
				<p style="display: flex;justify-content: space-between;">
					<span><span class="mid_you">优惠:</span> 领取优惠券最多可减<span style="color:red">80</span></span>
					<span>领取 ></span>
				</p>
				<p style="display: flex;justify-content: space-between;">
					<span><span class="mid_you">服务:</span> {{arr}}</span>
					<span>详情 ></span>
				</p>
			</div>
		</div>
		<div class="team_div">
			<div class="team">
				<p class="team_p">
					教学团队
				</p>
				<div class="team_teachers">
					<div class="team_teacher" v-for="(item,index) in list" :key='index'>
						<div>
							<img :src="item.teacher_avatar" class="team_img">
							<p>{{item.teacher_name}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<van-tabs v-model="active">
			<van-tab title="课程介绍">
				<h3>课程介绍</h3>
				<p v-html="info.course_details"></p>
			</van-tab>
			<van-tab title="课程大纲">
				<h3>课程大纲</h3>
				<van-dropdown-menu class="dagang">
					<van-dropdown-item :title="chapter.title" ref="item">
						<van-cell center>
							<template #left-icon>
								<span>
									{{chapter.title}}
								</span>
							</template>
							<template #right-icon>
								<span style="color: #999;">
									{{chapter.child[0].teachers[0].teacher_name}},{{chapter.child[0].teachers[1].teacher_name}}&emsp;&emsp;
									{{chapter.child[0].start_play}} - {{chapter.child[0].end_play}}
								</span>
							</template>
						</van-cell>
					</van-dropdown-item>
				</van-dropdown-menu>
			</van-tab>
			<van-tab title="课程评价">
				<h3>课程评价</h3>
				<van-empty description="暂无评论" />
			</van-tab>
		</van-tabs>
		<van-button type="danger" block style="border-radius: 20px;width: 97%;margin: auto;" @click="go()">立即报名</van-button>
	</div>
</template>
<script>
	import {
		info,
		chapter
	} from '@/utile/api'
	export default {
		data() {
			return {
				active: 0,
				id: "",
				info: {},
				arr: "",
				list: "",
				chapter: "",
				id:""
			}
		},
		methods: {
			go(){
				this.$router.push({
					path:"/purchase",
					query:{
						id:this.id
					}
				})
			},
			async get() {
				var b = await chapter({
					id: this.id
				})
				this.chapter = b.data[0]
				// console.log(b.data[0].child)
			}
		},
		async created() {
			this.id = this.$route.query.id
			var a = await info(
				this.id
			)
			this.get()
			// console.log(a.data.info)
			this.id=a.data.info.id
			// console.log(this.id)
			this.info = a.data.info
			this.list = a.data.teachers
			// console.log(this.list)
			var obj = this.info.service
			var arr = Array.from(obj)
			// console.log(arr)
			this.arr = arr[0].name
		}

	}
</script>
<style scoped>
	.dagang {
		height: 100px;
	}

	.team_img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}

	.team_teachers {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.team_teacher {
		margin-bottom: 10px;
		text-align: center;
		display: flex;
		justify-content: center;
		width: 60px;
		height: 65px;
	}

	.team_p {
		font-size: 17px;
	}

	.team {
		width: 93%;
		margin: 10px auto;
		padding-top: 10px;
	}

	.team_div {
		height: 100%;
		width: 100%;
		background-color: white;
		margin-top: 10px;
	}

	.mid_you {
		font-size: 15px;
		color: #999;
	}

	.mid {
		width: 93%;
		margin: 10px auto;
		padding-top: 10px;
	}

	.mid_div {
		height: 100%;
		width: 100%;
		background-color: white;
	}

	.div {
		width: 100%;
		height: 100%;
		background-color: #f0f2f5;
	}

	.box_desc {
		background-color: white;
		width: 100%;
		height: 100%;
	}

	.desc_p {
		font-size: 19px;
	}

	.desc {
		width: 93%;
		margin: 10px auto;
		font-size: 16px;
		background-color: white;
	}

	.banner_img {
		width: 240px;
		height: 235px;
	}

	.banner {
		height: 235px;
		width: 375px;
	}
</style>
