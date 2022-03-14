<template>
  <ul class="main">
    <li>
      Joyce Kilmer – Trees. I think that I shall never see A poem lovely as a
      tree. A tree whose hungry mouth is prest Against the earth’s sweet flowing
      breast;
    </li>
    <li>
      tree that looks at God all day, And lifts her leafy arms to pray. A tree
      that may in summer wear A nest of robins in her hair;
    </li>
    <li>
      Upon whose bosom snow has lain; Who intimately lives with rain. Poems are
      made by fools like me, But only God can make a tree.
    </li>
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Sansita+Swashed:wght@300&family=Staatliches&family=Syne+Mono&display=swap');
.main {
font-family: 'Staatliches', cursive;
  display: flex;
  flex-direction: column;
  height: 100vh;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin: auto 0;
  width: 30vw;
  background-color: #64b6ac;
  border-radius: 0 10px 10px 0;
  box-shadow: 12px 4px 17px 0px rgba(0, 0, 0, 0.4);
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 12px 4px 17px 8px rgba(0, 0, 0, 0.4);
  }

  &:nth-child(2) {
    margin-left: auto;
    border-radius: 10px 0 0 10px;
    box-shadow: -12px 4px 17px 0px rgba(0, 0, 0, 0.4);
    &:hover {
      box-shadow: -12px 4px 17px 8px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
