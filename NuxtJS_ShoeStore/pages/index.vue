<template>
  <div class="mt-[85px]">
    <a-carousel draggable autoplay>
      <div
        v-for="e in banner"
        :key="e.key"
        @click="() => handleRedirectLink(e.link)"
        class="w-full h-[280px] xl:h-[650px]"
      >
        <a-image
          alt=""
          :src="e.thumnail"
          height="100%"
          width="100%"
          :preview="false"
        />
      </div>
    </a-carousel>
    <div class="w-full xl:w-[1280px] m-[auto] px-2 md:px-5 py-10">
      <div class="my-[30px]">
        <div class="text-[20px] xl:text-[25px] underline mb-2 font-bold">
          Sản Phẩm Nổi Bật
        </div>
        <ProductNew :data="product" />
      </div>
      <div v-if="categorys.length" class="mt-[150px]">
        <h3 class="font-bold text-[30px] text-center">Thể Loại</h3>
        <a-carousel draggable :pause-on-hover="false" autoplay @afterChange="changeDot">
          <div
            v-for="(category, i) in categorys"
            class="!flex justify-center p-[30px]"
            :key="category.key"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-[100px] md:w-[180px] h-[100px] md:h-[180px] flex items-center justify-center rounded-full"
                :class="{
                  boxShadow:
                    dot === i && categorys.length > 4
                      ? '0 0 3px 3px #07c2b2'
                      : '',
                }"
              >
                <div
                  class="w-[65px] h-[65px] md:w-[120px] border-solid border-[1px] md:h-[120px] overflow-hidden flex justify-center items-center rounded-full"
                  :class="[
                    {
                      transform:
                        dot === i && categorys.length > 4
                          ? 'scale(1.5)'
                          : 'scale(1)',
                    },
                    { transition: 'all 0.3s ease' },
                  ]"
                >
                  <a-image
                    :src="category.image"
                    class="w-full h-full"
                    alt="category"
                    :preview="false"
                  />
                </div>
              </div>
              <div class="mt-[30px] font-bold">{{ category.name }}</div>
            </div>
          </div>
        </a-carousel>
      </div>

      <div class="mt-[50px]">
        <div class="text-[20px] xl:text-[25px] underline mb-2 font-bold">
          Sản Phẩm Khác
        </div>
        <a-row
          :gutter="[
            width < REPONSIVE_SCREEN.MD ? 10 : 20,
            width < REPONSIVE_SCREEN.MD ? 5 : 30,
          ]"
        >
          <a-col
            v-for="e in product"
            :span="12"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="6"
            :key="e.key"
          >
            <CardBase  :hoverAction="true" :infoProduct="e" />
          </a-col>
        </a-row>
        <div class="text-center mt-5">
          <a-button size="large"> Xem Thêm </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { REPONSIVE_SCREEN } from "~/common/common";
import { categorys } from "~/data/category";
import { product } from "~/data/product";

const router = useRouter();
const [width] = useWindowSize();
const dot = ref(0);

const banner = [
  {
    key: 3,
    thumnail: "/images/anh1.jpg",
    link: "/",
  },
  {
    key: 1,
    thumnail: "/images/anh2.jpg",
    link: "/",
  },
  {
    key: 2,
    thumnail: "/images/anh3.jpg",
    link: "/",
  },
];

const handleRedirectLink = (link: string) => {
  router.push(link);
};

const changeDot = (value: number) => {
  dot.value = value;
};
</script>
