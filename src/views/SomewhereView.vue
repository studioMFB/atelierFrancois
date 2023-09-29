<template>
  <div class="somewhere">
    <h1>Your're somewhere</h1>
  </div>
</template>
  
<style>
.somewhere {
  height: auto;
  display: flex;
  align-items: center;
  border: 1px solid #fff;

  & h1 {
    cursor: pointer;
    color: aqua;
    &:hover {
      color: blue;
    }
  }
}
</style>
  