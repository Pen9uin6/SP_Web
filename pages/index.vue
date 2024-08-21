<template>
  <div class="flex flex-col min-h-[100dvh]">
    <header
      class="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <span class="text-xl font-bold">SouthPole</span>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
        <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
        <NuxtLink class="hover:underline" to="/member">Member</NuxtLink>
        <NuxtLink class="hover:underline" to="/journey">Journey</NuxtLink>
        <NuxtLink class="hover:underline" to="/other">Other</NuxtLink>
      </nav>
    </header>
    <main class="flex-1">
      <section
        class="bg-primary text-primary-foreground py-32 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div class="max-w-md space-y-4">
          <h1 class="text-4xl font-bold">Welcome to SouthPole123</h1>
          <p class="text-lg">Explore the world of maimai with our club.</p>
          <NuxtLink class="hover:underline" to="/join">Join us</NuxtLink>
        </div>
        <NuxtImg src="/group_pic.jpg" />
      </section>
      <section class="py-12 px-6 md:px-12 bg-muted">
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
            <p class="text-muted-foreground">Having fun</p>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">Our Values</h2>
            <ul class="space-y-2 text-muted-foreground">
              <li>
                <Icon name="ion:checkmark-sharp" />
                Beyond MR
              </li>
              <li>
                <Icon name="ion:checkmark-sharp" />
                Share and Corporate
              </li>
              <li>
                <Icon name="ion:checkmark-sharp" />
                Motivation and Inspiration
              </li>
              <li>
                <Icon name="ion:checkmark-sharp" />
                Happiness and Fun
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script></script>
