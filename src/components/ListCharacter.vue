<template>
  <div class="container">
    <div class="list-characters" v-bind:class="{ active: isActive }">
      <div class="character" v-for="character in characters" v-bind:key="character.char_id">
        <strong class="character-name">{{character.name}}</strong>
        <div class="character-image-holder" v-if="character.img" v-bind:style="{ 'background-image': 'url(' + character.img + ')' }">
          <span class="character-status" v-bind:class="{'-alive': character.status == 'Alive', '-know': character.status == '?' }">{{character.status}}</span>
          <!-- <img v-bind:src="character.img" alt="" class="character-image"> -->
        </div>
        <div class="character-content">
          <span class="character-info" v-if="character.birthday != 'Unknown'"><strong>Birthday</strong> {{character.birthday}}</span>
          <span class="character-info"><strong>Nickname</strong> {{character.nickname}}</span>
          <span class="character-info"><strong>Portrayed</strong> {{character.portrayed}}</span>
          <div class="character-occupation" v-if="character.occupation[0] != 'Unknown' && character.occupation[0] != 'unknown'">
            <strong class="character-occupation-title">Occupations:</strong>
            <ul>
              <li v-for="(occupation, index) in character.occupation" v-bind:key="index">
                <span v-if="occupation != 'Unknown'">
                  {{occupation}}
                </span> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ListCharacter',
  
  data: () => {
    return { characters: [], isActive: false }
  },
  mounted () {
    axios.get('https://www.breakingbadapi.com/api/characters?limit=6')
    .then( (response) => {
      this.characters = response.data
      this.isActive = true
      console.log(this);
    })
  }
}
</script>