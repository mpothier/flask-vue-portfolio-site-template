<template>
  <div class="work">
    <div class="container mt-4">
      <a href="javascript:history.go(-1)" class="icon">
        <div class="back d-flex flex-row mb-4">
          <font-awesome-icon :icon="['fas', 'arrow-left']" size="2x" class="mr-3  "/>
          <div class="lead">Back to Work</div>
        </div>
      </a>
      <div class="content-wrapper">
        <div class="content mb-5">
          <h1 class="mb-4">{{ content.title }}</h1>
          <div class="body-wrapper">
            <div class="body-content">
              <div v-for="block in content.body" v-bind:key="block.content">
                <p v-if="block.content_type === 'text'">{{ block.content }}</p>
                <figure v-else class="figure mb-4 mt-1">
                  <img v-bind:src="'/work_content/img/' + block.content" alt="" class="img-fluid mb-1">
                  <figcaption class="figure-caption">{{ block.caption }}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');

.work {
  text-align: left;
  a.icon {
    color: rgb(199, 199, 199);
    &:hover {
      color: rgb(75, 75, 75);
    }
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
  }
  .content {
  }
  .body-wrapper {
    display: flex;
    justify-content: center;
  }
  .body-content {
    max-width: 700px;
    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.7;
    }
    figcaption {
      font-style: italic;
    }
  }
}


</style>

<script>

export default {
  props: {
    project: String,
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
 
  },
  computed: {
    content() {
      return this.$store.state.apiContent[this.project]
    }
  }
}
</script>