<template>
  <div
    class="fixed top-0 left-0 right-0 z-[1000] bg-[white] flex justify-center px-5 xl:px-0"
    :style="{
      boxShadow: '0 0 10px 5px #999',
    }"
  >
    <div class="w-[1280px] flex justify-between items-center">
      <div class="block" @click="home">
        <a-image
          class="cursor-poniter max-w-[160px] max-h-[50px] md:max-h-[80px]"
          src="/images/logo.jpg"
          alt="logo"
          :preview="false"
        />
      </div>
      <div class="flex justify-center items-center space-x-2">
        <a-input
          size="large"
          class="w-[150px] md:w-[400px]"
          placeholder="Tìm kiếm ..."
        />
        <a-button class="flex items-center justify-center" size="large"
          ><SearchOutlined
        /></a-button>
      </div>
      <div class="flex items-center space-x-3 md:space-x-6">
        <a-badge :count="10">
          <ShoppingCartOutlined class="text-[25px]" @click="cart" />
        </a-badge>
        <a-popover :title="false" placement="bottom">
          <template #content>
            <div class="px-5 cursor-pointer font-semibold" @click="logout">
              Logout
            </div>
          </template>
          <div class="flex items-center space-x-2">
            <a-avatar class="cursor-pointer">T</a-avatar>
            <span>Thanh</span>
          </div>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const cart = () => {
  router.push("/cart");
};

const home = () => {
  router.push("/");
};

const logout = () => {
  router.push("/login");
};
</script>
