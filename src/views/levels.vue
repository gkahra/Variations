<template>
  <div class="btns">
    <Buttons :id="parseInt(id)" :level="level" />
  </div>
  <component :is="levelcomponent"></component>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import Buttons from "../components/button.vue";
import Level1 from "../components/level-1";
import Level2 from "../components/level-2";
import Level3 from "../components/level-3";
import Level4 from "../components/level-4";
import Level5 from "../components/level-5";

const levels = {
  "level-1": Level1,
  "level-2": Level2,
  "level-3": Level3,
  "level-4": Level4,
  "level-5": Level5,
};

const route = useRoute();
const id = ref(route.params.id);
const level = ref(route.params.level);

const levelcomponent = computed(() => levels[level.value][id.value]);

watch(
  () => route.params,
  (newParams, prevParams) => {
    id.value = newParams.id;
    level.value = newParams.level;
  }
);
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  margin: auto 0;
}
</style>
