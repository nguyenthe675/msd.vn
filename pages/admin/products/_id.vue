<template>
  <AdminLayout>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Thêm mới</span>
        </div>
      </template>
    </el-card>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from "~/layouts/AdminLayout.vue";
import { computed, ref } from "vue";

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

const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};
</script>
