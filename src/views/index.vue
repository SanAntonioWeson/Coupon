<template>
	<div>
		<div class="top">
			<img id="back" src="../assets/icon_nav_delete.png">
			<div class="categoryIndex-title">首页</div>
			<div id="menu">
				<div></div>
				<div style="margin-left:1.07vw;"></div>
				<div style="margin-left:1.07vw;"></div>
			</div>
		</div>
		<searchBar />
		<div class="header">
			<ul>
				<li 
					v-for="(item,index) in categoryList"
					@click="changeCategory(item,index)"
					:class="{ selectedCategory : selected.index == index }"
					>{{item.title}}</li>
			</ul>
		</div>
		<div class="welfare">
			<p class="welfare-title">今日福利</p>
			<p class="welfare-content">0元专场限时领</p>
			<button @click="receive">立即领取<img src="../assets/icon_arrowwhite.png"></button>
		</div>
		<!-- <hotCoupon @toWelfareDetail="toWelfareDetail" /> -->
		<hotCoupon />
		<div style="width:100%;height:2.93vw;background-color:#F2F2F2;"></div>
		<div class="coupon-main">
			<div class="category-title">{{selected.title}}</div>
			<couponDetail
				v-for="(item,index) in choiceList"
				:key="index"
				:title="item.title"
				:endtime="item.endtime"
				:price="item.price"
				:coupon_num="item.coupon_num"
				:icon="item.icon"
				@toDetail="goToDetail(item)"
			/>
		</div>
		<footerBar :icon="icon" />
		<a href="javascript:scroll(0,0)" v-show="y"><div id="top"><img src="../assets/icon_top.png"></div></a>
	</div>
</template>

<script>
	import { getInfo , getCategoryList } from '@/api/data'
	import hotCoupon from '@/components/hotCoupon.vue'
	import footerBar from '@/components/footerBar.vue'
	import searchBar from '@/components/searchBar.vue'
	import couponDetail from '@/components/couponDetail.vue'

	export default {
		components: {
			hotCoupon,
			footerBar,
			searchBar,
			couponDetail
		},
		data(){
			return({
				//优惠券分类列表
				// categoryList: [
				// 	{title:'精选',id:'0'},
				// 	{title:'餐饮',id:'1'},
				// 	{title:'影音娱乐',id:'2'},
				// 	{title:'电商',id:'3'},
				// 	{title:'旅行酒店',id:'4'},
				// 	{title:'健康',id:'5'},
				// 	{title:'教育',id:'6'},
				// 	{title:'出行',id:'7'},
				// 	{title:'美妆',id:'8'},
				// 	{title:'流量',id:'9'},
				// ],
				categoryList: [],
				//选择分类
				selected: {
					index: 0,
					title: ''
				},
				//优惠券列表
				couponList: [],
				//底部图标
				icon: {
					indexIcon: require('../assets/icon_tab_home_pre.png'),
					mineIcon: require('../assets/icon_tab_mine.png'),
					indexColor: 'color:#FF3565;',
					mineColor: 'color:#B6B6B6;'
				},
				//精选列表
				choiceList: [],
				//向下滑动距离
				y: false
			})
		},
		props: [],
		created () {
			//获取精选信息
			getInfo()
				.then(r=>{
					// console.log(r)
					this.choiceList = r.data.data.lists
					console.log(this.choiceList)
				})
			//获取分类列表
			getCategoryList()
				.then(r=>{
					// console.log(r)
					this.categoryList = r.data.data.lists;
					this.selected.title = this.categoryList[0].title
				})
			//页面滚动距离
			window.onscroll = () =>{
				// console.log(document.documentElement.scrollHeight,document.documentElement.scrollTop)
				// if(document.documentElement.scrollHeight - document.documentElement.scrollTop < (document.documentElement.offsetHeight + 50)){
				// 		this.y = true
				// }else{
				// 	this.y = false
				// }
				if(document.documentElement.scrollTop < 50 ) {
					this.y = false
				}else{
					this.y = true
				}
			}

		},
		//离开路由函数
		beforeRouteLeave(to, from, next){
			window.onscroll =null
			next()
		},
		methods:{
			//选择分类
			changeCategory(item,index){
				this.selected.index = index;
				this.selected.title = item.title;
			},
			//点击立即领取
			receive(){
				this.$router.push({name:'toWelfareDetail',params:{id:2,title:'今日福利'}})
			},
			//到优惠券详情页
			goToDetail(item){
				this.$router.push({name:'couponDetail',params:{data: item}})
			}
			
		},
	}
</script>

<style scoped lang="scss">
	@import '@/style/getCouponIndex.scss'
</style>