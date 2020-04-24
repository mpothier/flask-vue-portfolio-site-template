<template>
  <div class="home">
    <div class="jumbotron vertical-center">
      <div class="container">
        <div class="photo">
          <router-link to="/about">
            <img src="@/assets/headshot.jpg" class="border photo rounded-circle" alt="">
          </router-link>
        </div>
        <h1 class="display-5">Your Name</h1>
        <p class="lead">Your Title</p>
        <div class="row mb-3">
          <div class="col">
            <a href="https://github.com" class="icon">
              <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
            </a>
            <a href="https://www.linkedin.com" class="icon ml-3">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg"/>
            </a>
            <a href="https://www.instagram.com" class="icon ml-3">
              <font-awesome-icon :icon="['fab', 'instagram']" size="lg"/>
            </a>
          </div>
        </div>
        <div class="row">
          <a href="mailto:you@yourname.tld" class="col email">
              you@yourname.tld
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
}
.home::before {
  background-image: url("../assets/bkgd.jpg");
  background-position: center;
  background-size: cover;
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  opacity: 0.35;
}

.jumbotron {
  background: none;
}

.container {
  margin: auto;
}

.photo {
  max-height: 250px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 0px 12px white);
  .border {
    border: 2px solid rgb(206, 206, 206) !important;
  }
  a:hover {
    .border {
      border: 2px solid rgb(139, 139, 139) !important;
    }
  }
}

a.icon, a.email {
  color: rgb(75, 75, 75);
  &:hover {
    color: rgb(52, 147, 255);
    text-decoration: none;
  }
}
</style>
