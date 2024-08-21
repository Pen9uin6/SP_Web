<template>
  <header
    class="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <span class="text-xl font-bold">Member</span>
    </div>
    <nav class="hidden md:flex items-center gap-6">
      <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
      <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
      <NuxtLink class="hover:underline" to="/member">Member</NuxtLink>
      <NuxtLink class="hover:underline" to="/journey">Journey</NuxtLink>
      <NuxtLink class="hover:underline" to="/other">Other</NuxtLink>
    </nav>
  </header>
  <div class="flex flex-col min-h-screen">
    <main class="flex-1">
      <section class="py-10 px-6">
        <div
          class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div v-for="mem in members">
            <Card>
              <NuxtImg
                src="/998.png"
                class="rounded-t-lg object-cover w-full h-48"
              />
              <CardContent class="p-4">
                <h3 class="text-xl font-bold mb-2">{{ mem.name }}</h3>
                <div class="flex items-center justify-between">
                  <div class="text-2xl font-bold">{{ mem.words }}</div>
                  <Button @click="navigateTo('/member/' + mem.id)">info</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const supabase = useSupabaseClient();
import type { Database, Tables, Enums, Json } from "~/database.types";

const {
  data: members,
  error: user_error,
  refresh: user_refresh,
} = useAsyncData("Member", async () => {
  const { data, error } = await supabase.from("Member").select(`*`);
  return data;
});

onMounted(async () => {
  await user_refresh();
});
</script>
