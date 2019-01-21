<template>
	<div class="main">
		<div class="header">
			<img id="back" src="../assets/icon_nav_delete.png">
			<div class="categoryIndex-title">我的</div>
			<div id="menu">
				<div></div>
				<div style="margin-left:1.07vw;"></div>
				<div style="margin-left:1.07vw;"></div>
			</div>
		</div>
		<div class="redeem-code"><p>兑换码：<span>56136749466</span></p></div>
		<p class="title">商品详情</p>
		<div class="detail" @click="toDetail">
			<div class="pho"></div>
			<p class="price">￥<span>200</span></p>
			<p class="content">小迷糊玻尿酸黑面膜补水保湿亮肤面膜贴21片</p>
			<div class="time-num">
				<p class="endtime">截止：<span>2019/01/31</span></p>
				<p class="num">领取数：<span>45623</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toDetail(){
				this.$router.push({name:'couponDetail'})
			}
		}
	}
</script>

<style scoped lang="scss">
@import '@/style/mineDetail.scss'
</style>