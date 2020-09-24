<template>
  <div id="app">
    <div class="home">
      <div class="hero">
        <img src="@/assets/images/bg-4.jpg" class="bg" alt="">
      </div>
      <div class="container">
        <div class="search">
          <input type="text" placeholder="Search characters " class="search-field" v-model="search">
        </div>
      </div>
      <ListCharacter
        :data="resultSearched"
        :total-pages="Math.ceil(chara.length / 6)"
        :total="chara.length"
        :currentPage="currentPage"
        @pageChanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCharacter from '@/components/ListCharacter.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',

  mounted(){
    this.loadCharact()
  },
  data() {
    return {
     currentPage: 1,
     search: ''
    }
  },

  methods: {
    ...mapActions(['loadCharact']),
    onPageChange(page) {
      this.currentPage = page
    }
  },
  computed: {
    ...mapGetters(['chara']),

    resultSearched: function() {
      if (this.search == '' || this.search == ' '){
        return this.chara
      } else {
        let filtered = this.chara.filter(people => {
          let name = people.name.toLowerCase()
          return name.indexOf(this.search.toLowerCase()) !== -1
        } )
        
        return filtered
      }
    }
  },
  components: {
    ListCharacter
  } 
}
</script>
