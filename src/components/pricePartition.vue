<template>
	<div class="price-partition">
		<div style="width: 100%;height: 29.6vw;">
			<div class="main">
				<div v-for="item in priceList">
					<img :src="item.src">
					<div>{{item.price}}</div>
				</div>
			</div>
		</div>
		<div style="width:100%;height:2.67vw;background-color:#F2F2F2;"></div>
	</div>
</template>

<script>
	export default {
		data () {
			return ({
				priceList: [
					{price: '3元区',id: 0,src: require('../assets/icon_rmb3.png')},
					{price: '5元区',id: 1,src: require('../assets/icon_rmb5.png')},
					{price: '8元区',id: 2,src: require('../assets/icon_rmb8.png')}
				]
			})
		}
	}
</script>

<style scoped lang="scss">
.price-partition{
	width: 100%;
	height: 32.27vw;
}
.main{
	width: 71.73%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	font-size: 3.73vw;
	color: #666666;
}
.main>div{
	width: 12.8vw;
	height: 100%;
}
.main img{
	width: 12.8vw;
	height: 12.8vw;
	margin-top: 4.8vw;
	margin-bottom: 2.4vw;
}
</style>