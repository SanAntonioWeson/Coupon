<template>
	<div class="footer-bar">
		<div class="footer-bar-path" @click="toIndex">
			<div class="nav-icon"><img :src="icon.indexIcon"></div>
			<p class="nav-text" :style="icon.indexColor">首页</p>
		</div>
		<div class="footer-bar-path" @click="toMine">
			<div class="nav-icon"><img :src="icon.mineIcon"></div>
			<p class="nav-text" :style="icon.mineColor">我的</p>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['icon'],
		methods: {
			toIndex () {
				this.$router.push({name:'index'})
			},
			toMine () {
				this.$router.push({name: 'toMine'})
			}
		}
	}
</script>

<style scoped lang="scss">
.footer-bar{
	width: 100%;
	height: 13.33vw;
	position: fixed;
	bottom: -1px;
	display: flex;
	box-shadow: 0 0 51px #e9e9e9;
	background-color: #FFFFFF;
}
.footer-bar-path{
	width: 50%;
	height: 100%;
	text-decoration: none;
}
.nav-icon{
	width: 5.33vw;
	height: 5.6vw;
	margin: 1.87vw auto 0.5vw auto;
}
.nav-icon img{
	width: 100%;
	height: 100%;
}
.nav-text{
	font-size: 2.93vw;
}
</style>