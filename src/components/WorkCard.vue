<template>
  <div>
    <!-- Render anchor tag to external link if external prop given -->
    <a v-if="external" v-bind:href="url" class="list-group-item" target="_blank">
      <dl class="row">
        <dt class="title col-sm-4">
          <!-- Break title words into individual divs to enable the last word and the icon to remain together without wrapping (prevents icon alone from wrapping to next line) -->
          <div v-for="(word, idx) in titleSplit" :key="idx" class="mr-1 title-word">
            {{word}}
            <span v-if="idx===titleSplit.length-1">
              <font-awesome-icon
                :icon="['fas', 'external-link-alt']"
                size="sm"
                class="external ml-2"
              />
            </span>
          </div>
        </dt>
        <div class="col-sm-1"></div>
        <dd class="subtitle col-sm-7">{{ subtitle }}</dd>
      </dl>
    </a>
    <!-- Otherwise render an router-link component to an internal link -->
    <router-link v-else v-bind:to="url" class="list-group-item">
      <dl class="row">
        <dt class="title col-sm-4">{{ title }}</dt>
        <div class="col-sm-1"></div>
        <dd class="subtitle col-sm-7">{{ subtitle }}</dd>
      </dl>
    </router-link>
  </div>
</template>

<style lang="scss">
dl.row {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
.list-group-item {
  padding-left: 0;
  padding-right: 0;
  color: inherit;
  text-decoration: none;
  background: none;
  display: flex;
  justify-content: flex-start;
  &:hover {
    background: #f8f8f8;
    .external {
      color: rgb(75, 75, 75);
    }
  }
  .external {
    color: rgb(199, 199, 199);
  }
  .title {
    padding-left: 5px;
    padding-right: 0;
  }
  .subtitle {
    color: rgb(158, 158, 158);
    padding-left: 5px;
    padding-right: 0;
  }
}

.title-word {
    // Ensure each title word div chunk cannot wrap to new line
    display: inline-block;
    white-space: nowrap;
}
</style>

<script>
export default {
  name: "WorkCard",
  props: ["url", "title", "subtitle", "external"],
  computed: {
    titleSplit() {
      return this.title.split(" ");
    }
  }
};
</script>