<template>
  <button
    v-if="id < 5"
    @click="
      router.push({
        name: 'level',
        params: { level: props.level, id: props.id + 1 },
      })
    "
  >
    Next
  </button>
  <button
    v-if="id > 1"
    @click="
      router.push({
        name: 'level',
        params: { level: props.level, id: props.id - 1 },
      })
    "
  >
Back 
 </button>
  <button class="home" @click="router.push({ name: 'index' })">Home</button>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

const props = defineProps({
  level: String,
  id: Number,
});

const next = computed(() => props.id + 1);

const router = useRouter();

const pushRoute = (nextId) => {
  router.push({ name: props.level, params: { id: nextId } });
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
a {
  text-decoration: none;
}
.home{
  border: 1px solid rgb(211, 59, 59);
  margin-left: 1rem;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid black;
  padding: 1rem 0;
  width: 120px;
  font-family: Roboto Condensed, sans-serif;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }
}
</style>
