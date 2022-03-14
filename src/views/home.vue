<template>
  <div>
    <p>Variations</p>

    <p>Choose a poem, create 25 varations.</p>

    <br />
    <div class="levels">
      <div v-for="i in 5" :key="i" class="level">
        <h3>Level {{ i }}</h3>
        <ul>
          <RouterLink
            v-for="j in 5"
            :key="i * 5 + j"
            :to="'/level-' + i + '/' + j"
          >
            <li>Variation {{ j }}</li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.levels {
  display: flex;
  justify-content: space-around;
}
.level {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 1rem 0;
  }
}
</style>
