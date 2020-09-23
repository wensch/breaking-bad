<template>
  <div class="container">
    <div class="search">
      <input type="text" placeholder="Search" class="search-field" v-model="searchInput">
      <button class="search-btn">
        <font-awesome-icon icon="search" />
      </button>

       <div class="character" v-for="item in filteredItems" v-bind:key="item.char_id">
        <strong class="character-name">{{item.name}}</strong>
       </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  
  data: () => {
    return { 
      characters: [],
      limit: 60,
      searchInput: ''
    }
  },
  mounted () {
    axios.get(`https://www.breakingbadapi.com/api/characters?limit=${this.limit}`)
    .then( (response) => {
      this.characters = response.data
    })
  },
  computed:{
    filteredItems(){
      if(this.searchInput){
        return this.characters.filter(f=> {
          f.name.indexOf(this.searchInput) !== -1

          console.log(f.name.indexOf(this.searchInput));
        })
      }
      console.log(this.searchInput);
      return this.characters
    }
  }
}
</script>