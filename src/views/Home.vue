<template>
  <div class="home">
    <div class="hero">
      <img src="@/assets/images/bg-5.jpg" class="bg" alt="">
    </div>
    <div class="search">
      <input type="text" placeholder="Search" class="search-field">
      <button class="search-btn">
        <font-awesome-icon icon="search" />
      </button>
    </div>
    <ListCharacter/>
    <div class="hero">
      <img src="@/assets/images/bg-6.jpg" class="bg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCharacter from '@/components/ListCharacter.vue'

export default {
  name: 'Home',
  components: {
    ListCharacter
  }
}
</script>
