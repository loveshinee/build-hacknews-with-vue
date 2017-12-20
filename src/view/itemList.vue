<template>
	<div>
		<div class="news-list">
			<transition-group tag="ul" name="item">
				<item v-for="item in items" :key="item.id" :item="item"></item>	
			</transition-group>
		</div>
	</div>
</template>
<script>
import { fetchByType, fetchItems} from '../api'
import Item from '../components/Item.vue'
	export default{
		components: {
			Item
		},
		data () {
			return {
				items: []
			}
		},
		mounted() {
			fetchByType('top').then(ids => {
				ids = ids.splice(1,20)
				fetchItems(ids).then(data => {
				
					this.items = data
					console.log(this.items)
				})
			})
		}
	}
</script>