<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
      <div class="sidebar-wrapper">
        <ul class="nav">
          <div class="nav-item-head">
            <p>Thể loại</p>
            <select style="margin-left:15px" name="type" id="typeId">
              <option value=""></option>
              <option value="1">Công nghệ</option>
              <option value="2">Ngôn Ngữ</option>
              <option value="3">Thiếu Nhi</option>
            </select>
          </div>
          <!-- <div class="nav-item-head">
            <p>Thời gian bắt đầu</p>
            <v-calendar title-position="left">
          </div>
          <div class="nav-item-head">
            <p>Thời gian kết thúc</p>
            <select style="margin-left:15px" name="type" id="typeId">
              <option value=""></option>
              <option value="1">Công nghệ</option>
              <option value="2">Ngôn Ngữ</option>
              <option value="3">Thiếu Nhi</option>
            </select>
          </div> -->
        </ul>
      </div>
    </div>
    </div>
    
    <div class="card-body all-icons">
        <div class="row">
          <div v-for="course in Courses" :key="course.order" class="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
            <div class="font-icon-detail">
              <img src="../assets/images/img.jpg" alt="">
              <p>{{course.name}}</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      Courses : [
      {'id': 1, 'name' : 'Course1', 'order' : 1},
      {'id': 2, 'name' : 'Course2', 'order' : 2},
      {'id': 3, 'name' : 'Course3', 'order' : 3},
      {'id': 4, 'name' : 'Course4', 'order' : 4},
      {'id': 5, 'name' : 'Course5', 'order' : 5},
      {'id': 6, 'name' : 'Course6', 'order' : 6},
      {'id': 7, 'name' : 'Course7', 'order' : 7},
      {'id': 8, 'name' : 'Course8', 'order' : 8},
      {'id': 9, 'name' : 'Course9', 'order' : 9},
      {'id': 10, 'name' : 'Course10', 'order' : 10},
      {'id': 11, 'name' : 'Course11', 'order' : 11},
      {'id': 12, 'name' : 'Course12', 'order' : 12},
      {'id': 13, 'name' : 'Course13', 'order' : 13},
      {'id': 14, 'name' : 'Course14', 'order' : 14},
      {'id': 15, 'name' : 'Course15', 'order' : 15},
      {'id': 16, 'name' : 'Course16', 'order' : 16},
      {'id': 17, 'name' : 'Course17', 'order' : 17},
      {'id': 18, 'name' : 'Course18', 'order' : 18},
      {'id': 19, 'name' : 'Course19', 'order' : 19},
      {'id': 20, 'name' : 'Course20', 'order' : 20}
    ]
    }
  }
};
</script>
<style>
.nav-item-head select {
  background: white;
  color: black;
  border-radius: 2px;
  border: solid 1px;
  text-align: center;
  font-size: 20px;
  width: 250px;
  height: 40px;
  padding-top: 5px;
  /* margin: 0 20px 0 20px; */
}

.nav-item-head p {
  margin-left: 15px;
}
</style>
