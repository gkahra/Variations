<template>
  <div class="main">
    <h1>Joyce Kilmer – Trees</h1>

    <div class="txt">
      I think that I shall never see A poem lovely as a tree. A tree whose
      hungry mouth is prest Against the earth’s sweet flowing breast; A tree
      that looks at God all day, And lifts her leafy arms to pray. A tree that
      may in summer wear A nest of robins in her hair; Upon whose bosom snow has
      lain; Who intimately lives with rain. Poems are made by fools like me, But
      only God can make a tree.
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$blur: 1px;
.main {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
}

.txt {
  animation: switch 3s infinite;
}

@keyframes switch {
  25% {
    color: #373f47;
  }
  50% {
    color: #ff5964;
  }
  75% {
    color: #5296a5;
  }
  100% {
    color: #373f47;
  }
}
</style>
