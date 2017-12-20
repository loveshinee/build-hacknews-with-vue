<template>
	<li class="news-item">
		<span>{{item.score}}</span>
		<span class="title">
			<template>
				<a :href="item.url" target="_blank"> {{ item.title }}</a>
				<span> (host)</span>
			</template>
		</span>
		<br>
		<span>
			<span v-if="item.type !== 'job'" class="by">
				by {{ item.by }}
			</span>
			<span>
				{{ item.time }} ago 
			</span>
			<span v-if="item.type !== 'job'">
				| {{ item.descendants }}
			</span>
		</span>
	</li>
</template>

<script>
	export default{
		props: ['item']
	}
</script>

<style lang="stylus">
	.news-item 
		position relative
		display list-item
		padding 20px 30px 20px 80px
		line-height 20px
		border-bottom 1px solid #eee
		background-color #fff
		list-style-type none
</style>