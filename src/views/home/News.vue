<template>
	<div>
		<van-tabs v-model="active" @click="change">
			<van-tab title="全部">
				<!-- 下拉 -->
				<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
					<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset=0>
						<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
						<van-card :desc="item.description" :title="item.title" :thumb="item.thumb_img"
							v-for="(item,index) in news_list" :key='index' @click='go(item.id)'>
							<template #price>
								<span class="span">👁 {{item.click_rate}}</span>
							</template>
							<template #num>
								<span><span style="font-size: 3px;">⌚</span> {{item.created_at}}</span>
							</template>
						</van-card>
					</van-list>
				</van-pull-refresh>
			</van-tab>
			<van-tab :title="item.name" v-for="(item,index) in nav_list" :key='index' :name='item.id'>
				<van-card :desc="item.description" :title="item.title" :thumb="item.thumb_img"
					v-for="(item,index) in new_news_list" :key='index' @click='go(item.id)'>
					<template #price>
						<span class="span">👁 {{item.click_rate}}</span>
					</template>
					<template #num>
						<span><span style="font-size: 3px;">⌚</span> {{item.created_at}}</span>
					</template>
				</van-card>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import {
		headernav,
		new_data,
	} from '@/utile/api.js'
	export default {
		data() {
			return {
				loading: false,
				finished: false,
				refreshing: false,
				active: 0,
				nav_list: "",
				news_list: "",
				new_news_list: "",
				page: 1,
				limit: 2
			}
		},
		methods: {
			async onLoad() {
				setTimeout(() => {
					if (this.refreshing) {
						this.news_list = [];
						this.refreshing = false;
					}

					if(this.limit<5){
						this.limit++
					}
					this.loading = false;
					if(this.limit>=5){
						this.finished = true;
					}
					this.get()
					console.log(this.limit)
				}, 1000);
			},
			onRefresh() {
				// 清空列表数据
				this.finished = false;
				// 重新加载数据
				// 将 loading 设置为 true，表示处于加载状态
				this.loading = true;
				this.onLoad();
			},
			// go
			go(id) {
				this.$router.push({
					path: "/news-detail",
					query: {
						id: id
					}
				})
			},
			async change(name) {
				var res = await new_data({
					classify_id: name,
				})
				this.new_news_list = res.data.list
			},
			async get() {
				var res = await new_data({
					classify_id: this.id,
					limit: this.limit,
					page: this.page
				})
				this.news_list = res.data.list
			}
		},
		async created() {
			var res = await headernav()
			this.nav_list = res.data
			this.get()
		}
	}
</script>
<style scoped>
	.span {
		color: #999;
		font-size: 14px;
	}
</style>
