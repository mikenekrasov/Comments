<template>
  <div id="app">
    <div class="my-3 p-3 bg-white rounded shadow-sm">
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Your comment:</label>
          <textarea id="commentForm" class="form-control"  rows="3"></textarea>
          <button @click="addData()" type="button" class="btn btn-light">Send comment</button>
        </div>
      </form>

      <h6 class="border-bottom border-gray pb-2 mb-0">Recent comments</h6>

      <div class="media text-muted pt-3" v-for="(row, index) in rows" :key="index">
        <img :src="row.author_avatar" class="mr-2 rounded" style="width: 32px; height: 32px;">
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong class="d-block text-gray-dark">{{row.author_login}}</strong> {{row.comment}}
        </p>
        <div class="dropdown">
          <button @click="deleteData(index)" class="btn btn-secondary" type="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./App.js"></script>
