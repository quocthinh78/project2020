<template>
    <div>
        usser
        <a href="#" @click.prevent="back">Go back</a>
        <a href="#" @click.prevent="next">Go next</a>
        {{$route.params.id}}
        {{name}}
        {{query}}
        hello user
    </div>
</template>
<script>
export default {
    props : [ 'name','query'],
    methods: {
        back() {
            this.$router.go(-1);
        },
         next() {
            this.$router.go(1);
        }
    }
}
</script>