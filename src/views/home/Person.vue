<template>
	<div>
		<div v-if="isshow">
			<img src="http://120.53.31.103:86/img/user_bg.7d633ee2.png" class="banner">
			<div class="user" >
				<img src="http://120.53.31.103:86/img/avatar.71c6d2b4.png" class="user_header">
				<p class="user_w" @click="login">登录/注册</p>
			</div>
		</div>
		<div v-else>
			<img src="http://120.53.31.103:86/img/user_bg.7d633ee2.png" class="banner">
			<div class="login_user">
				<img src="http://120.53.31.103:84/uploads/avatar.jpg" class="login_user_header">
				<span style="top:10px;position: absolute;left: 100px;color: white;font-size: 18px;">
					{{$store.state.nickname}}
				</span>
			</div>
		</div>
		<div class="mid">
			<div class="mid_son">
				<p class="mid_num">0</p>
				<p class="p">我的学习</p>
			</div>
			<div class="mid_son">
				<p class="mid_num">0</p>
				<p class="p">本周课时</p>
			</div>
			<div class="mid_son">
				<p class="mid_num">0</p>
				<p>我的积分</p>
			</div>
		</div>
		<div>
			<van-cell title="我的作业" is-link />
			<van-cell title="我的社区" is-link class="fen"/>
			<van-cell title="课程订单" is-link />
			<van-cell title="图书订单" is-link class="fen" />
			<van-cell title="优惠券" is-link />
			<van-cell title="学习卡" is-link />
			<van-cell title="分销中心" is-link class="fen" />
			<van-cell title="消息中心" is-link />
			<van-cell title="地址管理" is-link />
			<van-cell title="关于我们" is-link />
			<van-cell title="意见返回" is-link />
			<van-cell title="设置" is-link class="bottom" @click="$router.push('/setPwd')" />
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return{
				isshow:true
			}
		},
		methods:{
			login(){
				this.$router.push('/login')
			}
		},
		created(){
			if(this.$store.state.token!=""){
				this.isshow=false
			}
		}
	}
</script>
<style scoped>
	.bottom{
		margin-bottom: 60px;
	}
	.fen{
		margin-bottom: 20px;
	}
	.mid_num{
		margin-left: 30px;
	}
	.mid_son{
		width: 100px;
		text-align: center;
		align-items: center;
	}
	.mid_p{
		width: 100%;
		text-align:center ;
	}
	.mid{
		height: 70px;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 10px;
	}
	.login_user_header{
		width: 60px;
		height: 60px;
		border-radius: 60px;
		border: solid 1px #999;
	}
	.user_header{
		width: 60px;
		height: 60px;
		margin-left:8px ;
	}
	.user_w{
		font-size: 16.5px;
		font-weight: 500;
		color: white;
	}
	.banner{
		width: 100%;
		position: relative;
	}
	.user{
		align-items: center;
		width: 75px;
		position: absolute;
		top: 0;
		left: 50%;
		margin-left:-37.5px ;
		height: 110px;
		margin-top: 50px;
	}
	.login_user{
		position: absolute;
		top: 0;
		margin-top: 50px;
		left: 20px;
	}
</style>