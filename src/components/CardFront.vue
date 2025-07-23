<template>
  <div class="relative w-80 h-40 lg:w-[26rem] lg:h-[14rem]">
    <!-- Card background image -->
    <div 
      class="absolute inset-0 rounded-lg shadow-2xl overflow-hidden bg-[url('/src/assets/images/bg-card-front.png')] bg-cover bg-center">
      <!-- Card content overlay -->
      <div class="relative w-full h-full p-4 lg:p-6 text-white">
        <div class="absolute top-4 lg:top-6 left-4 lg:left-6">
          <img 
            src="/card-logo.svg" 
            alt="Card Logo" 
            class="w-16 h-8 lg:w-20 lg:h-10"
          />
        </div>
        
        <!-- Card number -->
        <div class="absolute bottom-16 lg:bottom-20 left-4 lg:left-6 right-4 lg:right-6">
          <div class="text-lg lg:text-xl font-mono tracking-wider">
            {{ cardNumber }}
          </div>
        </div>
        
        <!-- Cardholder name and expiry -->
        <div class="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 flex justify-between items-end text-xs lg:text-sm">
          <div class="uppercase tracking-wide">
            {{ cardholderName }}
          </div>
          <div class="font-mono">
            {{ expiry }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cardNumber: string
  cardholderName: string
  expiry: string
}

defineProps<Props>()
</script>