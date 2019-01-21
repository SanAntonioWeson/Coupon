<template>
	<div>
		<div class="header">
			<img id="back" src="../assets/icon_nav_delete.png">
			<div class="categoryIndex-title">详情</div>
			<div id="menu">
				<div></div>
				<div style="margin-left:1.07vw;"></div>
				<div style="margin-left:1.07vw;"></div>
			</div>
		</div>
		<div class="user-info">
			<div>
				<div class="thumb"><img :src="userInfo.thumb"></div>
				<div class="nickname">{{userInfo.nickname}}</div>
				<button>退出登录</button>
			</div>
		</div>
		<p>购买记录</p>
		<!-- <couponDetail @toDetail="goToDetail" /> -->
		<div v-show="purchaseRecordList.length <= 0" class="none">暂无购买记录！</div>
		<couponDetail
				v-for="(item,index) in purchaseRecordList"
				:key="index"
				:title="item.title"
				:endtime="item.endtime"
				:price="item.price"
				:coupon_num="item.coupon_num"
				:icon="item.icon"
				@toDetail="goToDetail"
			/>
		<footerBar :icon="icon" />
	</div>
</template>

<script>
	import footerBar from '@/components/footerBar.vue'
	import couponDetail from '@/components/couponDetail.vue'

	export default{
		components: {
			footerBar,
			couponDetail
		},
		data () {
			return {
				//用户信息
				userInfo:{
					thumb: require('../assets/tomako.jpeg'),
					nickname: 'WEWEIAN'
				},
				//底部图标
				icon: {
					indexIcon: require('../assets/icon_tab_home.png'),
					mineIcon: require('../assets/icon_tab_mine_pre.png'),
					indexColor: 'color:#B6B6B6;',
					mineColor: 'color:#FF3565;'
				},
				//购买记录列表
				purchaseRecordList: []
			}
		},
		methods: {
			goToDetail(){
				this.$router.push({name: 'mineDetail'})
			}
		},
		// created(){
		// 	this.icon = this.$route.params.icon
		// 	// console.log(this.$route)
		// }
	}
</script>

<style scoped lang="scss">
.header{
	width: 100%;
	height: 11.2vw;
	display: flex;
	background-color: #F2F2F2;
}
#back{
	width: 3.47vw;
	height: 3.47vw;
	margin: auto 0 auto 4vw;
}
.categoryIndex-title{
	color: #333333;
	font-size: 4.8vw;
	/*margin: auto 31vw auto 32vw;*/
	margin: auto 36.07vw auto 36.5vw;
}
#menu{
	width: 5.47vw;
	height: 1.07vw;
	display: flex;
	margin: auto 0;
}
#menu div{
	width: 1.07vw;
	height: 1.07vw;
	border-radius: 50%;
	background-color: black;
}
.user-info{
	width: 97.07vw;
	height: 40vw;
	margin: 3.73vw auto 6.67vw auto;
	background-image: url(../assets/pic_mine_back.png);
	background-size: 100% 100%;
	overflow: hidden;
}
.user-info>div{
	width: 100%;
	height: 18.27vw;
	margin-top: 8.47vw;
	display: flex;
}
.thumb{
	width: 18.27vw;
	height: 18.27vw;
	margin-left: 7.4vw;
	background-color: #FF729B;
	border-radius: 50%;
	overflow: hidden;
}
.thumb img{
	width: 16vw;
	height: 16vw;
	border-radius: 50%;
	margin-top: 1.2vw;
	margin-left: auto;
	margin-right: auto;
}
.nickname{
	margin: auto 0 auto 3.66vw;
	font-size: 4.8vw;
	font-weight: bold;
	color: #FFFFFF;
}
.user-info button{
	width: 24vw;
	height: 9.07vw;
	margin: auto 0 auto 15.2vw;
	background: linear-gradient(90deg,#FF0FA7,#FF3565);
	outline: none;
	border-style: none;
	border-radius: 2em;
	box-shadow: -5px 6px 23px #D91177;
	font-size: 3.73vw;
	color: #F2F2F2;
}
p{
	font-size: 4vw;
	color: #333333;
	margin: 6.67vw 0 0 4.27vw;
	text-align: left;
}
.none{
	text-align: center;
	font-size: 4.5vw;
	color: #333333;
	margin: 8vw auto;
}
</style>