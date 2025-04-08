<script setup lang="ts">
import { ElButton } from 'element-plus'
</script>

<template>
  <main class="cui-min-h-screen cui-flex cui-flex-col cui-justify-center cui-items-center cui-bg-gray-50 cui-text-gray-900">
    <section class="cui-text-center cui-px-6 cui-py-12">
      <h1 class="cui-text-4xl cui-font-extrabold cui-mb-4 cui-text-primary-500">
        Tool Boilerplate 🚀
      </h1>
      <p class="cui-text-lg cui-mb-8 cui-text-gray-600">
        Kickstart your development with a modern Vue 3 + Vite setup.
      </p>
      <ElButton type="primary" size="large">
        Run Tool
      </ElButton>
    </section>

    <footer class="cui-absolute cui-bottom-4 cui-text-sm cui-text-gray-500">
      &copy; 2025 Croud Tool Boilerplate.
    </footer>
  </main>
</template>
