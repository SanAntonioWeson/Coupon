<template>
	<div class="hot">
		<ul>
			<li v-for="(item,index) in welfareList" @click="goToWelfare(item)">
				<div class="hot-icon"><img :src="item.src"></div>
				<div class="hot-title">{{item.title}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data () {
			return({
				welfareList: [
					{title: '一般福利',id:'0',src: require('../assets/icon_commonly.png')},
					{title: '会员福利',id:'1',src: require('../assets/icon_member.png')},
					{title: '今日福利',id:'2',src: require('../assets/icon_today.png')},
					{title: '商务合作',id:'3',src: require('../assets/icon_business.png')}
				]
			})
		},
		props: [],
		methods:{
			goToWelfare (item) {
				// this.$emit('toWelfareDetail')
				var welfareTitle = item.title;
				var welfareId = item.id;
				this.$router.push({name:'toWelfareDetail',params:{id: welfareId,title: welfareTitle}})
			} 
		}
	}
</script>

<style scoped lang="scss">
.hot{
	width: 100%;
	height: 28.8vw;
	overflow: hidden;
	background-color: #FFF;
}
ul{
	height: 100%;
	width: 100%;
}
ul li{
	display: inline-block;
	width: 25%;
	height: 100%;
}
.hot-icon{
	margin: 4.8vw auto 3.2vw;
	width: 12.8vw;
	height: 12.8vw;
	border-radius: 50%;
	box-shadow: 0 0 27px #fde0d2;
}
.hot-icon img{
	width: 140%;
	height: 140%;
	transform: translateX(-2.5vw) translateY(-1.5vw);
}
.hot-title{
	margin: 0 auto;
	text-align: center;
	font-size: 3.47vw;
	color: #7a7a83;
}
</style>