<template>
    <li>
        <router-link
          
          :title="`this title go to ${page.link.text} page`"
          :to="`/${index}`"
          class="nav-link"
          active-class="active"
          aria-current="page"
          >{{page.link.text}}</router-link>
    </li>
</template>

<script>
export default {
    props : ['page','index'],
}
</script>