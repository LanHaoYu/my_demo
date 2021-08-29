<template>
	<div>
		<!-- 头部搜索 -->
		<div class="header">
			<img src="http://120.53.31.103:86/img/icon-sign.96f11c58.png" class="header_img">
			<input placeholder="搜索" class="header_ipt" />
			<img src="data:image/png;base64,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"
				class="header_sea">
			<img src="data:image/png;base64,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"
				class="header_bao">
		
			<img src="">
		</div>
		<!-- 轮播 -->
		<div>
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item>1</van-swipe-item>
				<van-swipe-item>2</van-swipe-item>
				<van-swipe-item>3</van-swipe-item>
				<van-swipe-item>4</van-swipe-item>
			</van-swipe>
		</div>
		<div>
			<p>
				<span class="span">资深讲师</span>
				<span>更多 ></span>
			</p>
			<van-card v-for="(item,index) in list1" :key='index' :desc="item.introduction" :thumb="item.teacher_avatar">
				<template #title>
					<span class="teacher_name">{{item.teacher_name}}</span>
				</template>
			</van-card>
			<p>
				<span class="span">推荐课程</span>
				<span>更多 ></span>
			</p>
			<van-card v-for="(item,index) in list2" :key='index' :desc="item.introduction" :thumb="item.cover_img">
				<template #title>
					<span>{{item.title}}</span>
				</template>
				<template #num>
					<span>{{item.sales_base}}</span>
				</template>
				<template #price>
					<span class="sales_num">{{item.sales_num}}人已报名</span>
				</template>
			</van-card>
			<p>
				<span class="span">名师</span>
				<span>更多 ></span>
			</p>
			<van-card v-for="(item,index) in list3" :key='index' :desc="item.introduction" :thumb="item.teacher_avatar">
				<template #title>
					<span class="teacher_name">{{item.teacher_name}}</span>
				</template>
			</van-card>
		</div>
	</div>
</template>
<script>
	import {
		homedatas,tabbar
	} from '@/utile/api.js'
	export default {
		data() {
			return{
				list1: "",
				list2: "",
				list3: "",
			}
		},
		methods:{},
		async created() {
			var home_datas = await homedatas()
			this.list1 = home_datas.data[0].list
			this.list2 = home_datas.data[1].list
			this.list3 = home_datas.data[2].list
		}
	}
</script>
<style scoped>
	.sales_num {
		font-size: 12px;
		color: #999
	}
	
	.teacher_name {
		font-size: 18px;
	}
	
	p {
		width: 95%;
		margin: auto;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		font-weight: 300;
		margin-top: 10px;
	}
	
	.span:before {
		content: "丨";
		color: red;
		font-size: 20px;
		font-weight: 900;
	}
	
	.header_ipt {
		border-radius: 25px;
		height: 25px;
		width: 270px;
		border: solid #999 1px;
		padding: 15px;
		box-sizing: border-box;
	}
	
	.header_bao {
		width: 22px;
		height: 20px;
	}
	
	.header_sea {
		width: 15px;
		height: 15px;
		position: absolute;
		top: 12px;
		left: 297px;
	}
	
	.header {
		width: 100%;
		height: 40px;
		align-items: center;
		line-height: 40px;
		display: flex;
		justify-content: space-evenly;
		position: relative;
	}
	
	.header_img {
		width: 25px;
		height: 26px;
	}
	
	.my-swipe .van-swipe-item {
		margin-bottom: 10px;
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		height: 190px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>