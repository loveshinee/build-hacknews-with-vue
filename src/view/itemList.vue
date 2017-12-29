<template>
	<div class="news-view">
		<div class="news-list-nav">
			<router-link v-if="page > 1" :to="'/' + type + '/' + (page -1)">&lt; prev</router-link>
			<a v-else class="diabled">&lt; prev</a>
			<span>{{ page }}/{{ maxPage }}</span>
			<router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
			<a v-else class="diabled">more &gt;</a>
		</div>
		<div class="news-list">
			<transition-group tag="ul" name="item">
				<item v-for="item in displayedItems" :key="item.id" :item="item"></item>	
			</transition-group>
		</div>
	</div>
</template>
<script>
import { fetchByType, fetchItems} from '../api'
import Item from '../components/Item.vue'

let isInitialRender = true 

	export default{
		components: {
			Item
		},
		props: {
			type: String
		},
		data () {
			const data = {
				loading: false,
				transition: 'slide-up',
				displayedPage: isInitialRender ? Number(this.$store.state.route.params.page) || 1 : -1,
				displayedItems: isInitialRender ? this.$store.getters.activeItems: []
			}
			isInitialRender = false
			return data
		},
		computed: {
			page() {
				return Number(this.$store.state.route.params.page) || 1
			},
			maxPage() {
				const { itemsPerPage, lists } = this.$store.state
				console.log(lists[this.type])
				return Math.ceil(lists[this.type].length / itemsPerPage)
			},
			hasMore() {
				return this.page < this.maxPage
			}
		},
		beforeMount() {
			if (this.$root._isMounted) {
				this.loadItems(this.page)
			}
		},

		watch: {
			page(to, from) {
				this.loadItems(to, from)
			}
		},
		methods: {
			loadItems(to = this.page, from = -1) {
				this.loading = true

				this.$store.dispatch('FETCH_LIST_DATA', {
					type: this.type
				}).then(() => {
					if (this.page < 0 || this.page > this.maxPage){
						this.$router.replace(`/${this.type}/1`)
						return
					}
					this.transition = from === -1
					? null
					: to > from ? 'slide-left' : 'slide-right'
					this.displayedPage  = to
					this.displayedItems = this.$store. getters.activeItems
					this.loading = false
				})
			}
		}
		
	}
</script>

<style lang="stylus">
	.news-view 
		padding-top 45px
		
	.news-list-nav, .news-list
		background-color #fff
		border-radius 2px
	
	.news-list-nav 
		position fixed
		top 55px
		left 0
		right 0
		padding 15px 30px
		text-align center
		z-index 998
		box-shadow 0 1px 2px rgba(0,0,0,.1)
		a
			margin 0 1em
		.disabled
			color #ccc
	
	
</style>