<template>
    <div>
      <div className="my-5 font-[500] text-center text-[30px]">Đăng Ký Khoản</div>
      <a-input size="large" placeholder="Tên" />
      <a-input-password size="large" class="mt-5" placeholder="Mật khẩu" />
      <a-input-password size="large" class="my-5" placeholder="Nhập lại mật khẩu" />
        <a-button
          class="w-full !my-3"
          size="large"
        >
          Đăng kí
        </a-button>
        <span
          className="block text-right underline cursor-pointer underline-offset-1 text-primary font-medium"
          @click="redirectLogin"
        >
          Đăng nhập
        </span>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "login",
});

const router = useRouter();

const redirectLogin = () => {
  router.push("/login");
};
</script>
