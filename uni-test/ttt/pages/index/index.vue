<template>
	<view class="container">
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue">
		</uni-search-bar>
		<view class="search-result">
			<text class="search-result-text">当前输入为：{{ searchValue }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: ""
			}
		},
		methods: {
			search() {
				console.log(this.searchValue)
			},
		}
	}
</script>

<style>
	.container {
		
	}
</style>
