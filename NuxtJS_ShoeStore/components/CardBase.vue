<template>
  <a-card
    :title="false"
    :bodyStyle="{
      padding: 0,
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      overflow: 'hidden',
      cursor: 'pointer',
    }"
    :bordered="false"
    :class="{ 'container-card': hoverAction }"
    :style="{ boxShadow: '0 0 5px 3px #eaeaea' }"
    @click="detailProduct"
  >
    <div class="w-full overflow-hidden">
      <img
        :src="infoProduct?.image"
        alt=""
        :class="`w-full h-[200px] ${hoverAction ? 'image-card' : ''}`"
      />
    </div>
    <div class="px-5">
      <div
        class="text-[14px] lg:text-[16px] font-bold h-[30px] lg:h-[40px] leading-[1.3] truncate-2 mt-2"
      >
        {{ infoProduct.name }}
      </div>
      <div class="flex justify-between items-end mb-5">
        <span class="text-[#999] text-[12px]"
          >Số lượng: <span class="text-[#ff7b0f]">18</span></span
        >
        <span class="text-[red] text-[13px] lg:text-[15px] font-bold">
          {{ formatMoney(infoProduct.price) }} đ
        </span>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
import { REPONSIVE_SCREEN, formatMoney } from "~/common/common";

const props = defineProps<{
  infoProduct?: any;
  height?: any;
  hoverAction?: any;
}>();

const router = useRouter();
const [width] = useWindowSize();

const detailProduct = () => {
  router.push(`/detail/1`);
};

const heightCard = computed(() => {
  if (width < REPONSIVE_SCREEN.MD) return "240px";
  if (props.height) return props.height;
  return "380px";
});
</script>
