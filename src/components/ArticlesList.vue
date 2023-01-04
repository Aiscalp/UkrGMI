<template>
  <h2>Articles List</h2>

  <br />
  <input v-model="filters" placeholder="Search..." />
  <br />
  <div class="post" v-for="post in paginatedData" :key="post.id">
    <div>
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
// Filter by
const filters = ref("");
const filteredData = computed(() => {
  if (!filters.value) {
    return posts.value;
  } else {
    const filterRe = new RegExp(filters.value, "i");
    return posts.value.filter((item) => {
      return item.title.match(filterRe);
    });
  }
});

// Pagination
const pageNumber = ref(1);
const pageSize = 10;
const pages = computed(() => {
  return Math.ceil(filteredData.value.length / pageSize);
});
const paginatedData = computed(() => {
  let from = (pageNumber.value - 1) * pageSize;
  let to = from + pageSize;
  return filteredData.value.slice(from, to);
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

input {
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-right: 25px;
  margin-left: 5px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 4px gray;
  border-radius: 5px;
  color: black;
  border: 1px solid darkgray;
}
</style>
