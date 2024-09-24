<template>
  <a-row
    :gutter="[
      width < REPONSIVE_SCREEN.MD ? 10 : 30,
      width < REPONSIVE_SCREEN.MD ? 5 : 50,
    ]"
  >
    <a-col
      v-for="e in data"
      :key="e.key"
      :span="12"
      :sm="12"
      :md="8"
      :lg="6"
      :xl="6"
    >
      <CardBase :hoverAction="true" :infoProduct="e" />
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { REPONSIVE_SCREEN } from "~/common/common";

defineProps<{
  data: any;
}>();
const [width] = useWindowSize();

watchEffect(()=>{
  console.log(width);
  
})
</script>
