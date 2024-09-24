<template>
  <div>
    <div class="fixed top-0 right-0 bottom-0 left-0 w-full h-full z-[10] flex items-center justify-center">
      <div class="max-w-[450px] min-w-[320px] p-[30px] rounded-[20px] pb-[100px] bg-white" :style="{boxShadow: '0 0 10px 3px red'}">
        <div class="text-center">
          <a-image src="/images/logo.jpg" alt="" :width="200" :height="100" :preview="false" />
        </div>
        <NuxtPage />
        <div class="flex mt-3 justify-center space-x-4 items-center">
          <GooglePlusOutlined class="text-[30px] text-[red]" />
          <InstagramOutlined class="text-[30px] text-[red]" />
          <TwitterOutlined class="text-[30px] text-[red]" />
        </div>
        <div class="text-center text-[red] underline mt-2 cursor-pointer">
          Quên Mật Khẩu
        </div>
      </div>
    </div>
  </div>
</template>
