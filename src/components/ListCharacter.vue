<template>
  <div class="container">
    <div class="list-characters">
      <div class="character" v-for="character in paginatedData" :key="character.char_id">
        <strong class="character-name">{{character.name}}</strong>
        <div class="character-image-holder" v-if="character.img" :style="{ 'background-image': 'url(' + character.img + ')' }">
          <span class="character-status" :class="{'-alive': character.status == 'Alive', '-know': character.status == '?' }">{{character.status}}</span>
          <!-- <img :src="character.img" alt="" class="character-image"> -->
        </div>
        <div class="character-content">
          <span class="character-info" v-if="character.birthday != 'Unknown'"><strong>Birthday</strong> {{character.birthday}}</span>
          <span class="character-info"><strong>Nickname</strong> {{character.nickname}}</span>
          <span class="character-info"><strong>Portrayed</strong> {{character.portrayed}}</span>
          <div class="character-occupation" v-if="character.occupation[0] != 'Unknown' && character.occupation[0] != 'unknown'">
            <strong class="character-occupation-title">Occupations:</strong>
            <ul>
              <li v-for="(occupation, index) in character.occupation" :key="index">
                <span v-if="occupation != 'Unknown'">
                  {{occupation}}
                </span> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="data.length > 6 || currentPage > 1">
      <div class="pagination-item">
        <button class="pagination-button" @click="onClickFirstPage" :disabled="isInFirstPage">
          <font-awesome-icon icon="angle-double-left" />
        </button>
      </div>
      <div class="pagination-item">
        <button class="pagination-button" @click="onClickPreviousPage" :disabled="isInFirstPage"> 
          <font-awesome-icon icon="angle-left" />
        </button>
      </div>
      <div class="pagination-item" v-for="(page, index) in pages" :key="index">
        <button class="pagination-button"
          type="button" 
          @click="onClickPage(page.number)"
          :class="{active: isPageActive(page.number)}">
          {{page.number}}
        </button>
      </div>
      <div class="pagination-item">
        <button class="pagination-button" @click="onClickNextPage" :disabled="isInLastPage">
           <font-awesome-icon icon="angle-right" />
        </button>
      </div>
      <div class="pagination-item">
        <button class="pagination-button" @click="onClickLastPage" :disabled="isInLastPage">
           <font-awesome-icon icon="angle-double-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'ListCharacter',
  props: {
    data: {
      type: Array,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 6
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    paginatedData() {
      let start = (this.currentPage - 1) * this.perPage, end = start + this.perPage
      return this.data.slice(start, end)
    },
    startPage() {
      if (this.currentPage === 1) return 1
      if (this.currentPage === this.totalPages) return this.totalPages - this.maxVisibleButtons + (this.maxVisibleButtons - 1)
      return this.currentPage - 1
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages)
    },
    pages(){
      let range = []
      for (let i = this.startPage; i <= this.endPage; i+= 1) {
        range.push({
          number: i,
          isDisabled: 1 === this.currentPage
        })
      }
      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    }
  },
  methods: {
    onClickFirstPage() {
      this.animateScroll()
      this.$emit('pageChanged', 1)
    },
    onClickPreviousPage() {
      this.animateScroll()
      this.$emit('pageChanged', this.currentPage - 1)
    },
    onClickPage(page) {
      this.animateScroll()
      this.$emit('pageChanged', page)
    },
    onClickNextPage(){
      this.animateScroll()
      this.$emit('pageChanged', this.currentPage + 1)
    },
    onClickLastPage() {
      this.animateScroll()
      this.$emit('pageChanged', this.totalPages)
    },
    isPageActive(page) {
      return this.currentPage === page
    },

    onPageChange(page){
      this.currentPage = page
    },

    animateScroll() {
      let children = this.$el.children[0]
      window.scrollTo({
        top: children.offsetTop - 80,
        left: children.offsetLeft,
        behavior: 'smooth'
      });

      console.log(this.currentPage);
    }
  }
}
</script>