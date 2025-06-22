<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav className="z-10 font-medium hidden sm:block">
    <ul className="flex gap-10 items-center">
      <li>
        <RouterLink to="/about" className="hover:text-accent-400 transition-colors">
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/cottages" className="hover:text-accent-400 transition-colors">
          Cottages
        </RouterLink>
      </li>
      <li>
        <div class="flex items-center gap-2.5">
          <RouterLink
            to="/login"
            class="px-6 py-2 bg-neutral-200 text-neutral-900 rounded-md font-bold border border-neutral-200 transition-colors hover:bg-neutral-400 hover:border-neutral-400 duration-300"
          >
            Login
          </RouterLink>

          <RouterLink
            to="/signup"
            class="px-6 py-2 border border-neutral-200 bg-transparent text-neutral-200 rounded-md font-bold transition-colors hover:bg-neutral-200 hover:text-neutral-900 duration-300"
          >
            Signup
          </RouterLink>
        </div>
      </li>
    </ul>
  </nav>
</template>
