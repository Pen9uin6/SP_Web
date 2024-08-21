<template>
  <header
    class="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between"
  >
    <div
      v-if="selectedMember && selectedMember.length > 0"
      class="flex items-center gap-2"
    >
      <span class="text-xl font-bold">{{ selectedMember[0].name }}</span>
    </div>
    <nav class="hidden md:flex items-center gap-6">
      <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
      <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
      <NuxtLink class="hover:underline" to="/member">Member</NuxtLink>
      <NuxtLink class="hover:underline" to="/journey">Journey</NuxtLink>
      <NuxtLink class="hover:underline" to="/other">Other</NuxtLink>
    </nav>
  </header>
  <div v-if="selectedMember" class="bg-card min-h-screen p-10">
    <div class="max-w-4xl mx-auto space-y-6 bg-card p-6 rounded-lg border">
      <div class="flex flex-col md:flex-row gap-5">
        <NuxtImg
          src="/998.png"
          alt="House Image"
          class="w-full h-64 object-cover md:w-1/2 rounded-lg"
        />
        <div class="flex flex-col w-1/2 gap-3">
          <div class="text-4xl font-bold">{{ selectedMember[0].name }}</div>

          <div class="flex flex-col">
            <div class="text-lg mb-2 font-bold">
              {{ selectedMember[0].nickname }}
            </div>
            <div
              class="text-gray-500 dark:text-gray-400 mb-3 break-words max-w-full"
            >
              {{ selectedMember[0].place }}
            </div>
          </div>

          <div class="flex flex-row gap-5 mt-auto">
            <div class="text-2xl font-bold">Rating</div>
          </div>
          <div class="flex flex-row justify-between">
            <div class="text-3xl font-bold">{{ selectedMember[0].rating }}</div>
            <div class="flex flex-row gap-2 items-end pb-[2px]">
              <div class="font-bold">入坑時間</div>
              <div class="text-gray-500 dark:text-gray-400">
                {{ selectedMember[0].time }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NamepLate -->

    <div class="max-w-4xl mx-auto mt-5 space-y-3 flex flex-col">
      <Card class="h-full">
        <CardHeader>
          <CardTitle>
            <div class="flex w-full items-center gap-3">Maimai Card</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-row">
            <div class="flex flex-col flex-1">
              <p>
                <NuxtImg :src="`/998.png`" />
              </p>
            </div>
            <div class="flex flex-col flex-1">
              <div v-if="selectedMember[0].plate[0] != '0'">
                <div
                  class="mb-2 mx-auto"
                  v-for="nameplate in selectedMember[0].plate"
                >
                  <NuxtImg :src="`/${nameplate}.png`" width="320" height="52" />
                </div>
              </div>
              <div v-else>
                <p class="text-3xl font-bold">努力中～</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Personal Info -->

    <div class="max-w-4xl mx-auto mt-5 space-y-3 flex flex-col">
      <Card class="h-full">
        <CardHeader>
          <CardTitle>
            <div class="flex w-full items-center gap-3">想說的話</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-row">
            <div class="flex flex-col flex-1">
              <p class="text-xl font-bold mb-5">
                {{ selectedMember[0].words }}
              </p>
              <p>
                <Icon name="line-md:phone-call-loop" class="mr-2" />
                phone
              </p>
              <p>
                <Icon name="octicon:mail-16" class="mr-2" />
                <NuxtLink class="hover:underline" :to="selectedMember[0].fb">
                  Facebook
                </NuxtLink>
              </p>
            </div>
            <div class="flex flex-col flex-1">123</div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
const supabase = useSupabaseClient();
const route = useRoute();
const {
  data: selectedMember,
  error: user_error,
  refresh: user_refresh,
} = useAsyncData("Member", async () => {
  const { data, error } = await supabase
    .from("Member")
    .select(`*`)
    .eq("id", route.params.id);
  return data;
});

onMounted(async () => {
  await user_refresh();
});
</script>
