<template>
  <div id="app">
    <router-view name="navbar"/>
    <div class="content">
      <router-view name="main"/>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

.jumbotron {
  margin: 0;
  background: none;
}

@media (min-width: 576px) {
  .jumbotron {
      padding: 2rem 2rem;
  }
}

.vertical-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  position: relative;
  overflow: auto;
}
</style>
