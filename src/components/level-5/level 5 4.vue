<template>
  <div
    :class="{
      main: true,
      'sc-1': slide_1,
      'sc-2': slide_2,
      'sc-3': slide_3,
    }"
  >
    <section v-if="slide_1">
      Joyce Kilmer – Trees. I think that I shall never see A poem lovely as a
      tree. A tree whose hungry mouth is prest Against the earth’s sweet flowing
      breast;
    </section>
    <section v-if="slide_2">
      A tree that looks at God all day, And lifts her leafy arms to pray. A tree
      that may in summer wear A nest of robins in her hair; Upon whose bosom
      snow has lain;
    </section>
    <section v-if="slide_3">
      Who intimately lives with rain. Poems are made by fools like me, But only
      God can make a tree.
    </section>
    <div class="arrow" @click="prev">←</div>
    <div class="arrow arrow-2" @click="next">→</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(0);

const slide_1 = computed(() => count.value % 3 == 0);
const slide_2 = computed(() => count.value % 3 == 1);
const slide_3 = computed(() => count.value % 3 == 2);

const next = () => count.value++;
const prev = () => count.value--;
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap');
.main {
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: rgb(231, 231, 231);
}
.arrow {
  position: absolute;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 4rem;
  z-index: 3;
  left: 0;
  margin-top: 7rem;
  margin-left: 2rem;
  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.5);
    cursor: pointer;
  }
}
.arrow-2 {
  left: auto;
  right: 0;
  margin-right: 2rem;
}
section {
  font-family: 'Domine', serif;
  font-size: 2rem;
  height: fit-content;
  padding: 0 7rem;
}
.sc-1 {
  background-color: #394648;
}
.sc-2 {
  background-color: #114b5f;
}
.sc-3 {
  background-color: #143642;
}
</style>