<template>
  <div>hello world</div>
  <NuxtImg src="/998.png" />
  <Select>
    <SelectTrigger className="w-[100px]">
      <SelectValue placeholder="Members" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="七卡">七卡</SelectItem>
      <SelectItem value="企鵝">企鵝</SelectItem>
      <SelectItem value="冷漠">冷漠</SelectItem>
    </SelectContent>
  </Select>
  <Button @click="navigateTo('/member')">About</Button>
</template>

<script>
import SelectContent from "~/components/ui/select/SelectContent.vue";
</script>
