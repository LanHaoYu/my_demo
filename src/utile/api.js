//将封装的axios引入到接口管理页
import service from './request.js'
//获取短信验证码
export function smsCode(arg) {
	return service({
		// url：会拼接与封装aixos的基地址
		url: "/smsCode",
		// data：要传递的参数
		data: arg,
		// 
		method: "post"
	})
}
//登录接口
export function login(arg) {
	return service({
		url: "/login",
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
// 设置密码接口
export function edit(arg){
	return service({
		url:"/password",
		data:arg,
		method:"post"
	})
}
//签到接口
export function date(arg){
	return service({
		url:"/user/integral/signRecord",
		data:arg,
		method:"get"
	})
}
//课程详情接口
export function classdetail(arg){
	return service({
		url:"/teacher/"+arg,
		method:"get"
	})
}
//主要课程接口
export function mainclass(arg){
	return service({
		url:"/teacher/mainCourse",
		data:arg,
		method:"post"
	})
}
//课程info接口
export function info(arg){
	return service({
		url:"/courseInfo/basis_id="+arg,
		method:"get"
	})
}
//课程大纲接口
export function chapter(arg){
	return service({
		url:"courseChapter",
		data:arg,
		method:"post"
	})
}
//提交订单接口
export function shopInfo(arg){
	return service({
		url:"/order/shopInfo",
		data:arg,
		method:"post"
	})
}
//添加地址接口
export function address(arg){
	return service({
		url:"/address",
		data:arg,
		method:"get"
	})
}
//news-detail咨询详情
export function news_detail(arg){
	return service({
		url:"/information/detail",
		data:arg,
		method:"post"
	})
}