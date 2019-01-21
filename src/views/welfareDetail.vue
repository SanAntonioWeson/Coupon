<template>
	<div>
		<div class="header">
			<img id="back" src="../assets/icon_nav_delete.png" @click="back">
			<div class="categoryIndex-title">{{data.title}}</div>
			<div id="menu">
				<div></div>
				<div style="margin-left:1.07vw;"></div>
				<div style="margin-left:1.07vw;"></div>
			</div>
		</div>
		<searchBar />
		<pricePartition  v-if="data.id == 1" />
		<!-- <couponDetail /> -->
	</div>
</template>

<script>
	import searchBar from '@/components/searchBar.vue'
	import couponDetail from '@/components/couponDetail.vue'
	import pricePartition from '@/components/pricePartition.vue'

	export default {
		components: {
			searchBar,
			couponDetail,
			pricePartition
		},
		data () {
			return({
				data: {}
			})
		},
		methods: {
			//到优惠券详情页
			getIntoDetail () {
				this.$router.push('/couponDetail')
			},
			//返回上一页
			back () {
				this.$router.go(-1)
			}
		},
		created(){
			this.data = this.$route.params;
			// console.log(this.data)
		}
	}
</script>

<style scoped lang="scss">
.main{
	background-color: #FFF;
	height: 100vh;
}
.header{
	width: 100%;
	height: 11.2vw;
	display: flex;
	background-color: #F2F2F2;
}
#back{
	width: 3.47vw;
	height: 3.47vw;	margin: auto 0 auto 4vw;
}
.categoryIndex-title{
	color: #333333;
	font-size: 4.8vw;
	/*margin: auto 31vw auto 32vw;*/
	margin: auto 31.07vw auto 33.09vw;
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
</style>