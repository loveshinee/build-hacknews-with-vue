<template>
	<li class="news-item">
		<span class="score">{{item.score}}</span>
		<span class="title">
			<template>
				<a :href="item.url" target="_blank"> {{ item.title }}</a>
				<span class="host"> ({{ item.url | host}})</span>
			</template>
		</span>
		<br>
		<span class="meta">
			<span v-if="item.type !== 'job'" class="by">
				by {{ item.by }}
			</span>
			<span>
				{{ item.time | timeAgo }} ago 
			</span>
			<span v-if="item.type !== 'job'">
				| {{ item.descendants }}
			</span>
		</span>
	</li>
</template>

<script>
	import { timeAgo } from '@/lib/filter'
	export default{
		props: ['item'],
		serverCacheKey: ({ item: {id, __lastUpdated, time}}) => {
			return `${id}::${__lastUpdated}::${timeAgo(time)}`
		}
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
		.score 
			position absolute
			top 50%
			left 0
			margin-top -10px
			width 80px
			font-size 1.1em
			text-align center
			color #f60
		.title 
			a
				text-decoration none
				color #34495e
			.host
				font-size 0.85em
	.meta 
		font-size 0.85em
		color #828282		
</style>