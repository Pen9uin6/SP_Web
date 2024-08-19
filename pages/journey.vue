<template>
  <header
    class="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <span class="text-xl font-bold">Journey</span>
    </div>
    <nav class="hidden md:flex items-center gap-6">
      <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
      <NuxtLink class="hover:underline" to="/member">Member</NuxtLink>
      <NuxtLink class="hover:underline" to="/journey">Journey</NuxtLink>
      <NuxtLink class="hover:underline" to="/other">Other</NuxtLink>
    </nav>
  </header>
  <NuxtLink to="/"> <Button>首頁</Button> </NuxtLink>
</template>
