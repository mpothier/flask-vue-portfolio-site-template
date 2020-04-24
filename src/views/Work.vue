<template>
  <div class="work">
    <div class="container mt-4">
      <nav class="nav nav-pills" id="pills-tab" role="tablist">
        <a class="nav-item nav-link active" id="pills-cat1-tab" data-toggle="pill" href="#pills-cat1" role="tab" aria-controls="pills-cat1" aria-selected="false">Category One</a>
        <a class="nav-item nav-link" id="pills-cat2-tab" data-toggle="pill" href="#pills-cat2" role="tab" aria-controls="pills-cat2" aria-selected="true">Category Two</a>
      </nav>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-cat1" role="tabpanel" aria-labelledby="pills-cat1-tab">
          <ul class="list-group list-group-flush">
            <work-card title="Sample Project One" subtitle="Quis veniam amet proident elit laborum aute velit dolore ut sunt qui." url="/work/sample-project1"></work-card>
            <work-card title="Sample Project Two" subtitle="Non magna do consectetur labore." url="/work/sample-project2"></work-card>
            <work-card title="Sample External Link" subtitle="Aliqua labore dolor esse mollit id aliqua ex laborum adipisicing dolor aute ea." url="http://www.google.com" external="true"></work-card>
          </ul>
        </div>
        <div class="tab-pane fade" id="pills-cat2" role="tabpanel" aria-labelledby="pills-cat2-tab">
          <ul class="list-group list-group-flush">
            <work-card title="Sample External Link 1" subtitle="Culpa sit commodo proident do incididunt esse deserunt cupidatat." url="http://www.google.com" external="true"></work-card>
            <work-card title="Sample External Link 2" subtitle="Sit incididunt qui laboris nisi." url="http://www.google.com" external="true"></work-card>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  .nav-pills {
    position: relative;
    margin-bottom: 70px;
    display: flex;
    align-items: flex-end;
    a {
      max-width: 45%;
    }
  }
  .nav-pills .nav-link {
    padding-left: 0;
    padding-right: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    color: rgb(172, 172, 172);
    background: none;
    border-radius: 0;
    border-bottom: 3px solid rgba(255, 255, 255, 0);
    &.active {
      border-bottom: 3px solid rgb(71, 71, 71);
      color: black;
    }
    &:hover {
      color: black;
    }
  }
  .tab-content {
    text-align: left;
  }
}
</style>

<script>
import WorkCard from "@/components/WorkCard.vue"


export default {
  name: "work",
  components: {
    WorkCard
  }
}
</script>