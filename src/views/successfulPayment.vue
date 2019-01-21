<template>
	<div>
		<div class="header">
			<img id="back" src="../assets/icon_nav_delete.png" @click="back">
			<div class="categoryIndex-title">支付成功</div>
			<div id="menu">
				<div></div>
				<div style="margin-left:1.07vw;"></div>
				<div style="margin-left:1.07vw;"></div>
			</div>
		</div>
		<div class="pho"><img src="../assets/pic_successfulpayment.png"></div>
		<p>恭喜你！支付成功</p>
		<button @click="toMine">立即查看</button>
	</div>
</template>

<script>
	export default{
		methods:{
			toMine(){
				this.$router.push({name:'toMine'})
			},
			//返回首页
			back () {
				this.$router.go(-2)
			}
		}
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
	margin-top: 6vw;
	margin-left: 6vw;

}
.categoryIndex-title{
	color: #333333;
	font-size: 4.8vw;
	/*margin: auto 31vw auto 32vw;*/
	margin: auto 33.07vw auto 30.09vw;
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
.pho{
	width:14.93vw;
	height: 16.27vw;
	margin: 18.67vw auto 5.6vw;
}
img{
	width: 150%;
	height: 140%;
	transform: translateX(-3.7vw) translateY(-2vw);
	/*margin: 18.67vw auto 5.6vw;*/
}
p{
	width: 100%;
	text-align: center;
	font-size: 4vw;
	color: #333333;
}
button{
	width: 40vw;
	height: 9.87vw;
	border-radius: 2em;
	background: linear-gradient(90deg,#FF3565,#FF359E);
	color: #F2F2F2;
	font-size: 4vw;
	margin: 10.4vw auto;
	outline: none;
	border-style: none;
	box-shadow: 0 0 20px #f3a3ba;
}
</style>