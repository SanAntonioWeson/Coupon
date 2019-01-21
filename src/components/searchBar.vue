<template>
	<div class="backg">
		<div class="search-bar">
			<img src="../assets/icon_serch.png">
			<input type="text" placeholder="搜索你想要的优惠券">
		</div>
	</div>
</template>

<style scoped lang="scss">
.backg{
	height: 13.33vw;
	width: 100%;
	background-color: #F2F2F2;
	overflow: hidden;
}
.search-bar{
	display: flex;
	align-items: center;
	width: 92vw;
	height: 9.87vw;
	border-radius: 2em;
	background-color: #FFFFFF;
	margin: 1.6vw auto 0 auto;
}
.search-bar img{
	width: 3.73vw;
	height: 3.73vw;
	margin-left: 3.47vw;
	transform: translateY(-0.23vw);
}
.search-bar input{
	font-size: 3.46vw;
	width: 82vw;
	height: 80%;
	background-color: transparent;
	border-style: none;
	outline: none;
	margin-left: 2.67vw;
}
</style>