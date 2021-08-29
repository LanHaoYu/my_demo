import service from './request.js'

//获取短信验证码
export function smsCode(arg) {
	return service({
		url: "/smsCode",
		data: arg,
		method: "post"
	})
}
// 轮播图
export function banner(arg) {
		return service({
			url: '/banner',
			data: arg,
			method: 'get'
		})
	}
//首页数据
export function homedatas(arg){
	return service({
		url:'/recommend/appIndex',
		data:arg,
		method:"get"
	})
}
// tabbar数据
export function tabbar(arg){
	return service({
		url:'/nav/bottom',
		data:arg,
		method:"get"
	})
}
// 课程数据
export function Class(arg){
	return service({
		url:"/teacher/search/attrs",
		data:arg,
		method:"get"
	})
}
//咨询导航数据
export function headernav(arg){
	return service({
		url:"/information/classify",
		data:arg,
		method:"get"
	})
}
//咨询页面数据
export function new_data(arg){
	return service({
		url:"/information/index",
		data:arg,
		method:"post"
	})
}