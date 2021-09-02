<template>
	<div>
		<div class="div_header">
			<van-card style="background-color: #e56570;" desc="134***" title="积分6">
				<template #num>
					<button class="btn">签到规则</button>
				</template>
				<template #title>
					<span style="color: white;font-size: 18px;">{{$store.state.nickname}}</span>
				</template>
				<template #desc>
					<p style="color: white;font-size: 15px;">积分6</p>
				</template>
				<template #thumb>
					<img src="http://120.53.31.103:84/uploads/avatar.jpg" class="img">
				</template>
			</van-card>
			<van-calendar :poppable="false" :show-confirm="false" :style="{ height: '500px' }" class="date"
				type='multiple' />
		</div>
		<p class="p">
			<span class="span">好课推荐</span>
			<span style="color: #999;">更多 ></span>
		</p>
		<van-card desc="134***" title="积分6" thumb="http://120.53.31.103:84/uploads/avatar.jpg">
			<template #num>
				<button
					style="border:1px solid #999;padding: 5px;border-radius: 15px;width: 50px;background-color: white">去兑换</button>
			</template>
			<template #title>
				<span style="font-size: 18px;">就这？</span>
			</template>
			<template #desc>
				<p style="color: red;font-size: 16px;margin-top: 20px;">1积分</p>
			</template>
		</van-card>
		<p class="p1">
			<span class="span">热门图书</span>
			<span style="color: #999;">更多 ></span>
		</p>
		<van-card desc="134***" title="积分6" thumb="http://120.53.31.103:84/uploads/avatar.jpg">
			<template #num>
				<button
					style="border:1px solid #999;padding: 5px;border-radius: 15px;width: 50px;background-color: white;">去兑换</button>
			</template>
			<template #title>
				<span style="font-size: 18px;">就这？</span>
			</template>
			<template #desc>
				<p style="color: red;font-size: 16px;margin-top: 20px;">1积分</p>
			</template>
		</van-card>
	</div>
</template>
<script>
	import {
		date
	} from '@/utile/api'
	export default {
		data() {
			return {
				date: "",
				a: "",
				checked_date: []
			}
		},
		methods: {
			getdate() {
				var date = new Date()
				console.log(date)
				this.date=date
				var year = date.getFullYear()
				var month = date.getMonth() + 1
				var day = date.getDate()
				this.date = year + '-' + month + "-" + day
				console.log(this.date)
			}
		},
		async created() {
			this.getdate()
			var a = await date({
				date: this.date
			})
			console.log(a)
			this.b = a.data
			this.b = this.b.forEach((item) => {
				this.checked_date = item.date
			})
			console.log(this.checked_date)
		},
		computed: {},
	}
</script>
<style scoped>
	.p1 {
		width: 95%;
		margin: auto;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		font-weight: 300;
	}

	.p {
		width: 95%;
		margin-top: 300px !important;
		margin: auto;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		font-weight: 300;
	}

	.span:before {
		content: "丨";
		color: red;
		font-size: 20px;
		font-weight: 900;
	}

	.date {
		background-color: whitesmoke;
		width: 90%;
		margin: auto
	}

	.img {
		margin-left: 30px;
		width: 45px;
		height: 45px;
		border-radius: 45px;

	}

	.div_header {
		padding-top: 20px;
		height: 265px;
		width: 375px;
		background-color: #e56570;
	}

	.btn {
		background-color: #e56570;
		color: white;
		width: 70px;
		height: 30px;
		text-align: center;
		border-radius: 10px;
		border: 1px solid white;
	}
</style>
