<template>
  <div class="home">
    <div class="hero">
      <img src="@/assets/images/bg-5.jpg" class="bg" alt="">
    </div>
    <ListCharacter
      :data="chara"
      :total-pages="Math.ceil(chara.length / 6)"
      :total="chara.length"
      :currentPage="currentPage"
      @pageChanged="onPageChange"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ListCharacter from '@/components/ListCharacter.vue'
import { mapActions, mapGetters } from 'vuex'
// import Search from '@/components/Search.vue'

export default {
  name: 'Home',

  mounted(){
    this.loadCharact()
  },
  data() {
    return {
     currentPage: 1
    }
  },

  methods: {
    ...mapActions(['loadCharact']),
    onPageChange(page) {
      this.currentPage = page
    }
  },
  computed: {
    ...mapGetters(['chara'])
  },
  components: {
    ListCharacter
  } 
}
</script>
