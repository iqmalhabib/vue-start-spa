<template>
    <li>
        <router-link
          :class="activeClasses"
          :title="`this title go to ${page.link.text} page`"
          :to="`/${index}`"
          class="nav-link"
          aria-current="page"
          >{{page.link.text}}</router-link>
    </li>
</template>

<script>
export default {
    props : ['page','index','isActive'],
    computed: {
        activeClasses(){
            return {
                active: this.isActive,
                emphasize: this.isActive  
            };
        }
    }
}
</script>
<style scoped>
    .emphasize{
        text-decoration: underline !important;
    }
</style>