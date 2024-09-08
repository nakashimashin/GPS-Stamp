<script setup lang="ts">
import Test from '@/components/Test.vue';
import { onMounted } from 'vue';

onMounted(() => {
	console.log('App mounted');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Latitude: ' + position.coords.latitude);
			console.log('Longitude: ' + position.coords.longitude);
		});
	}
});
</script>

<template>
	<div>
		<Test />
		<div>aaa</div>
		<div>bbb</div>
		<div>ccc</div>
		<div>ddd</div>
		<div>eee</div>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
