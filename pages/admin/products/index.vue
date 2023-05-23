<template>
  <AdminLayout>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Danh sách sản phẩm</span>
        </div>
      </template>
      <el-table v-if="products" :data="products.data" style="width: 100%">
        <el-table-column label="Id" prop="id" width="100" />
        <el-table-column label="Ảnh">
          <template #default="scope">
            <img style="width: 100px; height: 100px" :src="scope.row.url" />
          </template>
        </el-table-column>
        <el-table-column label="Tiêu đề" prop="title" />
        <el-table-column label="Giá gốc" prop="price" />
        <el-table-column align="right" width="300">
          <template #header>
            <el-input
              v-model="search"
              size="small"
              placeholder="Type to search"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from "~/layouts/AdminLayout.vue";
import { computed, ref } from "vue";

// interface User {
//   date: string;
//   name: string;
//   address: string;
// }
let products = ref(null);
onBeforeMount(async () => {
  products.value = await useFetch(`/api/prisma/get-page-products`, {
    method: "POST",
    body: {
      skip: 0,
      take: 10,
    },
  });
});

const search = ref("");

// const filterTableData = computed(() => {
//   console.log(products);
//   products.filter(
//     (data) =>
//       !search.value ||
//       data.name.toLowerCase().includes(search.value.toLowerCase())
//   );
// });
const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};
</script>
