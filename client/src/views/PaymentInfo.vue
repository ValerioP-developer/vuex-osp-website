<template>
    <div class="payment">
        <TopContainer :route=route> </TopContainer>
        <div class="container">
            <h1> Payment successfull done! check your email </h1>

        </div>
        <BottomContainer></BottomContainer>
    </div>
</template>
<script>
import TopContainer from '@/components/TopContainer.vue'
import BottomContainer from '@/components/BottomContainer.vue'
export default {
    name: 'PaymentInfo',
    components: {
        TopContainer,
        BottomContainer
    },

    data() {
        return {
            route: 'product',
        }
    },
    created() {
        //alert("name  " + this.$route.query.name + "items : " + this.$route.query.quantity) // outputs 
        setTimeout(() => this.$router.push({ path: '/' }), 5000);
    },
    methods: {
        pageRedirect() {
            var delay = 5000
            setTimeout(function () {
                alert("##### REDIRECT INSTRUCTION ######")
                this.$router.push('/')
            }, delay);
        }
    }
}
</script>
<style></style>