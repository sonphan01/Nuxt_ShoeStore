<template>
  <div>
    <div class="my-5 font-[500] text-center text-[30px]">Đăng Nhập</div>
    <a-input size="large" placeholder="Email" class="round-[15px]" />
    <a-input-password size="large" class="my-5" placeholder="Mật khẩu" />
    <a-button
      class="!my-2 !font-medium !rounded-[20px] w-full"
      size="large"
      @click="home"
    >
      Đăng Nhập
    </a-button>
    <span
      class="block text-right text-primary underline underline-offset-1 cursor-pointer font-medium"
      @click="redirectRegister"
    >
      Đăng kí tài khoản
    </span>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "login",
});

const router = useRouter();

const redirectRegister = () => {
  router.push("/register");
};

const home = () => {
  router.push("/");
}
</script>
