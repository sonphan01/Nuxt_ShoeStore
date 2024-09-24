import { REPONSIVE_SCREEN } from '~/common/common';
<template>
  <div class="flex justify-center">
    <div class="mb-[100px] mt-[50px] lg:mt-[120px] w-full xl:w-[1280px]">
      <div class="flex items-start justify-center">
        <a-row :gutter="20" class="w-full">
          <a-col :span="24" :lg="14">
            <a-carousel draggable autoplay>
              <div v-for="e in images" class="lg:px-[30px]" :key="e">
                <a-image :height="350" width="100%" class="object-cover h-[250px] w-full" alt="" :src="e" />
              </div>
            </a-carousel>
          </a-col>
          <a-col :span="24" :lg="10" class="flex flex-col justify-between h-auto xl:h-[400px]">
            <div class="px-2 sm:px-0">
              <div class="text-[20px] xl:text-[25px] font-semibold truncate-2">
                {{ detail?.name }}
              </div>
              <br class="hidden sm:block" />
              <span class="text-[red] underline text-[16px] xl:text-[18px] font-bold">
                {{ formatMoney(detail?.price ?? 0) }}đ
              </span>
              <br class="hidden sm:block" />
              <span class="block mt-2">
                Thể Loại:{{ " " }}
                <span class="text-primary">{{ detail?.category }}</span>
              </span>
              <br class="hidden sm:block" />
              <span class="block mt-2">Số Lượng: {{ detail?.quantity ?? 0 }}</span>
              <br class="hidden sm:block" />
              <br class="hidden sm:block" />
              <span class="text-[red] font-semibold italic text-[12px]">
                Note:
              </span>
              <div class="bg-[red] text-[red] bg-opacity-[0.2] p-4">
                {{ detail?.note }}
              </div>
            </div>
            <div class="flex space-x-4 justify-center md:justify-start mt-5 md:mt-0">
              <a-button size="large" class="flex items-center">
                Thêm Vào Giỏ Hàng
                <ShoppingCartOutlined />
              </a-button>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="bg-[#333] bg-opacity-5 mt-8">
        <div class="px-5 bg-[#333] bg-opacity-[0.7] text-white font-bold text-[20px] py-2">
          Chi Tiết Sản Phẩm
        </div>
        <div class="px-5 py-1 text-[#666] break-all" v-html="detail?.description">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { REPONSIVE_SCREEN, formatMoney } from "~/common/common";
import { detail, images } from "~/data/detail";
const [width] = useWindowSize();
</script>
