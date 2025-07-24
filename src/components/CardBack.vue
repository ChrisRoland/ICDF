<template>
  <div class="relative w-[18rem] h-40 lg:w-[26rem] lg:h-[14rem]">
    <!-- Card background image -->
    <div 
      class="absolute inset-0 rounded-lg shadow-2xl overflow-hidden bg-[url('/src/assets/images/bg-card-back.png')] bg-cover bg-center">
      <!-- CVC overlay -->
      <div class="relative w-full h-full">
        <!-- CVC positioned on the signature strip area -->
        <div class="absolute top-1/2 right-8 lg:right-10 transform -translate-y-1/2">
          <div class="px-3 py-1 rounded text-xs lg:text-sm font-mono text-gray-100 min-w-[3rem] text-center">
            {{ cvc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cvc: string
}

defineProps<Props>()
</script>