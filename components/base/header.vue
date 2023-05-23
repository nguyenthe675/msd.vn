<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">MySandal.Vn</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Sản phẩm</template>
      <el-menu-item index="2-1"
        ><nuxt-link to="/admin/products"
          >Danh sách sản phẩm</nuxt-link
        ></el-menu-item
      >
      <el-menu-item index="2-2">Quản lý kho</el-menu-item>
      <el-menu-item index="2-3">Đặt hàng nhập</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>Kiểm hàng</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">Khách hàng</el-menu-item>
    <el-menu-item index="4">Đơn hàng</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
