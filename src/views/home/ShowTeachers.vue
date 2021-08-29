<template>
	<div>
		<van-card v-for="(item,index) in class_list" :key='index' :desc="item.introduction"
			:thumb="item.avatar" >
			<template #title>
				<span class="title">{{item.real_name}}</span>
			</template>
		</van-card>
	</div>
</template>
<script>
	import {
		Class
	} from '@/utile/api.js'
	export default {
		data() {
			return {
				class_list: ""
			}
		},
		methods: {
			async get() {
				var a = await Class()
				this.class_list = a.data.list
				console.log(a.data.list)
			}
		},
		created() {
			this.get()
		}
	}
</script>
<style scoped>
	.title {
		font-size: 17px;
	}
</style>
