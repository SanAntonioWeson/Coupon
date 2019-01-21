<template>
	<div class="coupon-info" @click="goToCouponDetail">
		<img :src="icon">
		<div class="detail">
			<p class="detail-title">{{title}}</p>
			<p class="endtime">截止：<span>{{endtime}}</span></p>
			<p class="num">领取数： <span>{{coupon_num}}</span></p>
			<p v-show="price > 0" class="price">￥<span style="font-weight: 600;">{{price}}</span></p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return ({

			})
		},
		props: ['icon','title','endtime','coupon_num','price'],
		methods: {
			goToCouponDetail () {
				this.$emit('toDetail')
				// this.$router.push({name: 'couponDetail',params:{}})
			}
		}
	}
</script>

<style scoped lang="scss">
.coupon-info{
	width: 91.47%;
	height: 24vw;
	/*border-bottom: 1px solid #b8b8be;*/
	display: flex;
	margin: 4vw auto 8vw auto;
}
img{
	width: 32vw;
	height: 24vw;
	margin: auto;
}
.detail{
	margin: auto 0 auto 3.73vw;
	width: 54.67vw;
	height: 24vw;
}
.detail-title{
	font-size: 4vw;
	height: 50%;
	width: 100%;
	color: #333333;
	margin-bottom: 2.4vw;
}
.detail p{
	text-align: left;
}
.endtime{
	font-size: 3.47vw;
	color: #FF3565;
	margin-bottom: 1.2vw;
}
.num{
	font-size: 3.47vw;
	color: #999999;
	float: left;
}
.price{
	color:#FF2626;
	font-size:3.2vw;
	position: relative;
	bottom: 0;
	right: 0;
	float: right;
}
/*detail button{
	border-radius: 3em;
	width: 12vw;
	height: 7vw;
	background-color: #f16ebe;
	color: #FFF;
	font-size: 3vw;
	border-style: none;
	outline: none;
	margin-top: 3vw;
	margin-left: 11vw;
}*/
</style>