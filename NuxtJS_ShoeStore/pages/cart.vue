<template>
  <div class="flex justify-center">
    <div class="mb-[100px] mt-[120px] w-[1280px] relative px-2 sm:px-0">
      <div class="flex items-center justify-center mb-5">
        <div class="flex items-center">
          <span class="text-[40px] font-semibold">Giỏ Hàng</span>
        </div>
      </div>
      <a-button danger class="my-2 float-right"> Xoá Sản Phẩm </a-button>
      <a-table
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'image'">
            <img :src="record.image ?? ''" alt="img" class="w-[60px] h-[60px] min-w-[60px] min-h-[60px]" />
          </template>
          <template v-if="column.key === 'price'">
            <span>{{ formatMoney(record.price) }}đ</span>
          </template>
        </template>
      </a-table>
      <div
        class="sticky bottom-0 h-[140px] bg-white border-t-[2px] flex flex-col items-end justify-center"
      >
        <span>
          Tổng Tiền:
          <span class="text-primary text-[20px] font-bold">
            {{ formatMoney(100000) }}đ
          </span>
        </span>
        <a-button class="!px-[30px] mt-[10px]" size="large">
          Mua Hàng
        </a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatMoney } from "~/common/common";

defineProps<{
  detail: any;
}>();

const columns = [
  {
    title: "Tên Sản Phẩm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ảnh",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Số Lượng",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Giá",
    dataIndex: "price",
    key: "price",
  },
];

const data = [
  {
    name: "Nike Air Force 1 Crater Flyknit",
    image: "/images/image1.jpg",
    quantity: 4,
    price: 100000,
  },
  {
    name: "Nike Air Force 1 Crater Flyknit",
    image: "/images/image2.jpg",
    quantity: 4,
    price: 100000,
  },
  {
    name: "Nike Air Force 1 Crater Flyknit",
    image: "/images/image3.webp",
    quantity: 4,
    price: 100000,
  },
];

const rowSelection = ref({
  checkStrictly: false,
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record: any, selected: boolean, selectedRows: any[]) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: boolean, selectedRows: any[], changeRows: any[]) => {
    console.log(selected, selectedRows, changeRows);
  },
});
</script>
