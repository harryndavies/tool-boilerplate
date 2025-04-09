<script setup lang="ts"></script>

<template>
  <main
    class="cui-relative cui-min-h-screen cui-flex cui-flex-col cui-justify-center cui-items-center cui-bg-gray-50 cui-text-gray-900 cui-overflow-hidden"
  >
    <div
      class="cui-absolute cui-top-0 cui-left-0 cui-w-full cui-h-full cui-pointer-events-none cui-opacity-5"
    >
      <svg
        class="cui-w-full cui-h-full cui-object-cover"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 420.5 400"
        xml:space="preserve"
        fill="currentColor"
      >
        <defs>
          <path
            id="a"
            d="M242 1a200 200 0 0 1 179 202c0 57-21 104-61 142-32 30-72 48-118 54v-74c25-5 45-16 63-33 24-24 36-55 36-93s-12-69-38-93c-17-17-37-28-61-33V1zm-57 325v74c-49-4-91-23-125-56-40-38-60-86-60-143C0 143 20 95 60 56 94 24 136 5 185 0v71c-28 4-51 15-70 35-24 24-36 56-36 94a123 123 0 0 0 106 126z"
          />
        </defs>
        <clipPath id="b">
          <use xlink:href="#a" overflow="visible" />
        </clipPath>
        <path clip-path="url(#b)" d="M-70-70h561v540H-70z" />
      </svg>
    </div>

    <section class="cui-text-center cui-px-6 cui-py-12 cui-z-10">
      <h1 class="cui-text-4xl cui-font-extrabold cui-mb-4 cui-text-primary-500">
        Croud Tool Boilerplate
      </h1>
      <p class="cui-text-lg cui-mb-8 cui-text-gray-600">
        Kickstart tool development with Vue 3, Vite, Element Plus and Tailwind.
      </p>
    </section>

    <footer class="cui-absolute cui-bottom-4 cui-text-sm cui-text-gray-500 cui-z-10">
      &copy; 2025 Croud Tool Boilerplate.
    </footer>
  </main>
</template>

<style scoped>
main {
  font-family: 'Inter', sans-serif;
}
</style>
