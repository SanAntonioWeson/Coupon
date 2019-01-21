<template>
	<div>
		<div class="header">
			<img id="back" src="../assets/icon_nav_delete.png" @click="back">
			<div class="categoryIndex-title">详情</div>
		</div>
		<div class="cover"><img :src="data.icon"></div>
		<div class="coupon-info">
			<div style="margin: 3.73vw 0 3.2vw 0;height: 3.73vw;width: 100%;" v-show="data.price <= 0"></div>
			<p class="price" v-show="data.price > 0">￥<span>{{data.price}}</span></p>
			<p class="introduce">{{data.title}}</p>
			<div class="date-num">
				<div>截止：<span>{{data.endtime}}</span></div>
				<div>领取数：<span>{{data.coupon_num}}</span></div>
			</div>
		</div>
		<div style="width:100%;height:2.93vw;background-color:#F2F2F2;"></div>
		<img :src="data.url" class="content">
		<div class="footer">
			<div>
				<div class="pay-num" v-show="data.price > 0">支付金额：<span>￥</span><span>{{data.price}}</span></div>
			</div>
			<div><button @click="toPay">立即支付</button></div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return({
				//优惠券信息
				data: {}
			})
		},
		methods: {
			//到支付页面
			toPay () {
				this.$router.push({name:'toSuccessfulPayment'})
			},
			//返回上一页
			back () {
				this.$router.go(-1)
			}
		},
		created () {
			console.log(this.$route);
			this.data = this.$route.params.data
		}
	}
</script>

<style scoped lang="scss">
.header{
	width: 100%;
	height: 11.73vw;
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
	font-size: 4.53vw;
	margin: auto 0 auto 37.86vw;
}
.cover{
	width: 100%;
	height: 74.93vw;
}
.cover img{
	width: 100%;
	height: 100%;
}
.coupon-info{
	width: 100%;
	height: 25.33vw;
	overflow: hidden;
	text-align: left;
}
.price{
	font-size: 3.73vw;
	color: #FF2626;
	margin: 3.73vw 0 3.2vw 4vw;
}
.introduce{
	color: #333333;
	font-size: 4vw;
	margin-left: 4vw;
	margin-bottom: 1vw;
}
.date-num{
	font-size: 3.47vw;
	display: flex;
}
.date-num div:first-child{
	color: #FF3565;
	margin: 0 38.93vw 0 4.27vw;
}
.date-num div:last-child{
	color: #999999;
}
.content{
	width: 100%;
	height: 100%;
}
.footer{
	width: 100%;
	height: 13.33vw;
	display: flex;
	position: fixed;
	bottom: -1px;
	box-shadow: 0 0 33px #f2f2f2;
	background-color: #FFFFFF;
}
.footer>div:first-child{
	width: 45.87vw;
	height: 100%;
	margin-left: 4.27vw;
	overflow: hidden;
}
.footer>div:last-child{
	width: 45.87vw;
	height: 100%;
	overflow: hidden;
}
.pay-num{
	font-size: 3.73vw;
	color: #333333;
	margin-top: 4.8vw;
	text-align: left;
}
.footer div span:first-child{
	color: #FF2626;

}
.footer div span:last-child{
	color: #FF2626;
	font-size: 4.5vw;

}
.footer button{
	width: 34.67vw;
	height: 8.53vw;
	border-radius: 2em;
	margin-top: 2.4vw;
	background: linear-gradient(90deg,#FF3565,#FF359E);
	outline: none;
	border-style: none;
	box-shadow: 0 0 12px #f498b3;
	font-size: 3.5vw;
	color: #F2F2F2;
}
</style>