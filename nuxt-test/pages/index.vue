<template>
  <div class="container">
    <div>
      <nuxt-link to='/person'>个人中心</nuxt-link>
      <nuxt-link to='/users'>用户</nuxt-link>
      <nuxt-link to='/users/details'>用户详情</nuxt-link>
      <logo />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
