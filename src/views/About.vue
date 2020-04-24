<template>
  <div class="about">
    <div class="jumbotron vertical-center">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src="@/assets/about.jpg" alt="" class="photo img-fluid">
          </div>
          <div class="col-sm text-container">
            <div class="text-content">
              <p class="lead">Culpa pariatur culpa in enim ad qui dolor amet.</p>
              <hr class="my-4">
              <p class="body">
                Laborum duis incididunt id ullamco adipisicing deserunt ut laborum cupidatat eu aute labore. Quis aute do ipsum adipisicing voluptate qui consequat excepteur incididunt. Proident adipisicing cupidatat labore veniam sunt non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');


.about {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
}

.container {
  margin: auto;
}

.photo {
  max-height: 350px;
  margin-bottom: 20px;
}

.row {
  display: flex;
  align-items: center;
}

.text-container {
  display: flex;
  align-items: center;
  max-width: 510px;
  p {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.7;
    text-align: left;
    &.lead {
      font-weight: inherit;
    }
  }
}
</style>