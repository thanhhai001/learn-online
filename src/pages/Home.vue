<template>
  <div class="row">
    <div class="news">
      <div class="row">
        <div class="col-md-8">
          <!-- column left -->
          <div class="row" style="padding-left: 10px">
              <p>News</p>
          </div>
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/images/rightnews.png" alt="news">
            </div>
            <div class="col-md-4">
              <img src="../assets/images/leftnews.png" alt="news">
            </div>
            <div class="col-md-4">
              <img src="../assets/images/rightnews.png" alt="news">
            </div>
          </div>
          <div class="row" style="padding:20px 0 0 10px">
            <p>Teachers</p>
          </div>
          <div class="row">
            <div class="teacher">
              <img src="img/anime6.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime3.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime6.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime3.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime3.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime6.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime3.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime6.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime3.png" alt="teacher1">
            </div>
            <div class="teacher">
              <img src="img/anime6.png" alt="teacher1">
            </div>
          </div>
        </div>
          <!-- column right -->
        <div class="col-md-3">
          <div class="row top-course">
            <p>Top Course</p>
          </div>
        </div>
      </div>


      <div class="row" style="padding-left: 10px">
        <p>info khác</p>
      </div>
    </div>
  </div>
</template>
<script>
  import * as chartConfigs from '@/components/Charts/config';
  import UserTable from './Dashboard/UserTable';
  import config from '@/config';

  export default {
    components: {
      // LineChart,
      // BarChart,
      // TaskList,
      // UserTable
    },
    data() {
      return {
        
      }
    },
    computed: {
      
    },
    methods: {
      
    },
    mounted() {
      
    },
    beforeDestroy() {
      
    }
  };
</script>
<style>
.news {
  width: 100%;
  height: 700px;
  float: left;
  /* border: solid 1px red; */
}
.top-course {
  background: dodgerblue;
}
/* .row {
  border: solid 1px white !important;
} */
.teacher {
  width: 80px;
  margin: 0 10px 0 10px;
}
</style>
