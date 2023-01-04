<template>
  <h2>Articles List</h2>
  <div class="navbar__btns">
    <button class="btn" @click="sortList('id')">Sort by ID</button>
    <button class="btn" @click="sortList('title')">Sort by Title</button>
  </div>
  <div class="post" v-for="post in paginatedData" :key="post.id">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Article Title:</strong> {{ post.title }}</div>
      <div><strong>Article Body:</strong> {{ post.body }}</div>
      <div>{{}} Comments</div>
    </div>
  </div>
  <div class="userListPagination">
    <div
      class="page"
      v-for="page in pages"
      :key="page"
      :class="{ pageSelected: page === pageNumber }"
      @click="pageClick(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useArticlesService } from "@/services/useArticlesService";
import { ArticlesModel, CommentsModel } from "@/models/ArticlesModel";
// Articles list
const posts = ref<Array<ArticlesModel>>(
  await useArticlesService().getArticles()
);
// Sort by ...
const sortedById = ref(true);
const sortedData = posts;
function sortList(sortBy: string) {
  if (sortedById.value) {
    sortedData.value.sort((x, y) => (y[sortBy] > x[sortBy] ? -1 : 1));
    sortedById.value = false;
  } else {
    sortedData.value.sort((x, y) => (y[sortBy] < x[sortBy] ? -1 : 1));
    sortedById.value = true;
  }
}
// Pagination
const pageNumber = ref(1);
const pageSize = 10;
const pages = computed(() => {
  return Math.ceil(posts.value.length / pageSize);
});
const paginatedData = computed(() => {
  let from = (pageNumber.value - 1) * pageSize;
  let to = from + pageSize;
  return posts.value.slice(from, to);
});
function pageClick(page: number) {
  pageNumber.value = page;
}
//comments amount
</script>

<style scoped>
.post {
  padding: 15px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 4px gray;
  border-radius: 5px;
  color: black;
  border: 1px solid darkgray;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  text-align: center;
}

.userListPagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.page {
  padding: 8px;
  margin-right: 10px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 4px gray;
  border-radius: 5px;
  color: black;
  border: 1px solid darkgray;
}

.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: white;
}

.pageSelected {
  background: #aeaeae;
  cursor: pointer;
  color: white;
}

select {
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-right: 25px;
  margin-left: 5px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 4px gray;
  border-radius: 5px;
}
</style>
