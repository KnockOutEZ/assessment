<template>
  <template>
	<transition name="fade">
		<div v-if="show" class="preloader">
			<div class="logo"></div>
			<p>Добро пожаловать!</p>
			<div class="circles">
				<div class="circle">1</div>
				<div class="circle">2</div>
				<div class="circle">3</div>
				<div class="circle">4</div>
				<div class="circle">5</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
name: 'Preloader',
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if(this.show) this.showToggle()
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = true
			}, 700)
		}
	}
}
</script>

<style scoped>
.preloader{
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 9999;
    }
	
	.logo{
        width: 12.5rem;
		height: 12.5rem;
		background: url("../images/contact-icon-01.png");
		background-repeat: no-repeat;
        }
		
	p{
		margin-top: 1rem;
    }
		
	.circles{
display: flex;
		margin-top: 1rem
    }
		
		.circle{
            width: 1.5rem;
			height: 1.5rem;
			margin: .75rem;
			background-color: white;
			border-radius: 50%;
			animation-name: scaleIn;
			animation-duration: .7s;
			transform: scale(0);
        }
			
			circle:nth-child(1){animation-delay: 0s;}
				
			circle:nth-child(2){animation-delay: .05s;}
				
			circle:nth-child(3){animation-delay: .1s;}
				
			circle:nth-child(4){animation-delay: .15s;}
				
			circle:nth-child(5){animation-delay: .2s;}
				
</style>