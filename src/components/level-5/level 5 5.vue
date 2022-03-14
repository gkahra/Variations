<template>
  <div class="main">
    <span class="type" style="--n: 432">
      Joyce Kilmer – Trees. I think that I shall never see A poem lovely as a
      tree. A tree whose hungry mouth is prest Against the earth’s sweet flowing
      breast; tree that looks at God all day, And lifts her leafy arms to pray.
      A tree that may in summer wear A nest of robins in her hair; Upon whose
      bosom snow has lain; Who intimately lives with rain. Poems are made by
      fools like me, But only God can make a tree.
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  font-family: monospace;
  font-weight: 700;
  font-size: 50px;
  padding: 2rem;
  background: #005f6b;
  color: #00dffc;
}
.type {
  color: #0000;
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0,
    linear-gradient(#00dffc 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: back 0.7s infinite steps(1),
    typing calc(var(--n) * 0.1s) steps(var(--n)) forwards;
}

@keyframes typing {
  from {
    background-size: 0 200%;
  }
}
@keyframes back {
  50% {
    background-position: 0 -100%, 0 0;
  }
}
</style>