<template>
  <div id="nav">
    <nav class="navbar navbar-expand-sm navbar-light navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">
            <span>Your Name</span>
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav navbar-right">
            <router-link to="/about" class="nav-link nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">About</router-link>
            <router-link to="/work" class="nav-link nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">Work</router-link>
            <router-link to="/resume" class="nav-link nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">Resume</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
.navbar {
  height: 50px;
  width: 100%;
  padding: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 4px rgb(124, 124, 124);
  &.navbar-fixed-top {
    z-index: 1030;
  }

  #navbarNavAltMarkup.show {
    position: fixed;
    width: 100%;
    top: 50px;
    left: 0;
    background: rgba(255, 255, 255, 0.85);
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
    .navbar-header {
      width: 100%;
      .navbar-brand {
        float: left;
        height: 50px;
        font-size: 18px;
        line-height: 20px;
        margin: 0;
        margin-left: 15px;
        display: flex;
        align-items: center;
        .logo {
          max-height: 30px;
            -webkit-filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .25));
            filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .25));
          g {
            fill: rgb(70, 70, 70);
            stroke: white;
          }
          &:hover {
            g {
              fill: rgb(255, 255, 255);
              stroke: black;
            }
          }
        }
      }
      .navbar-toggler {
        float: right;
        position: relative;
        border: none;
        outline: none;
        padding: 0;
        margin-top: 8px;
        margin-bottom: 8px;
        margin-right: 15px;
      }
    }
    .nav-item.router-link-active {
      color: black;
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  name: "navbar",
  mounted() {
    var $ = require('jquery')
    // Hide an open, collapsed menu on click
    $(document).click(function(event) {
      if ($(".navbar-collapse.show").length) {
        $(".navbar-collapse.show").collapse("hide")
        // Prevent any clicked links from redirecting
        event.preventDefault()
      }
    });
  }
}
</script>