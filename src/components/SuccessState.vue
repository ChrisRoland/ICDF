<template>
  <div class="text-center mt-20 lg:mt-auto">
    <!-- Success Icon -->
    <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <img 
            src="/src/assets/images/icon-complete.svg" 
            alt="Success Icon" 
            class=""
          />
    </div>

    <!-- Success Message -->
    <h2 class="text-2xl font-medium text-gray-900 mb-4 uppercase tracking-wider">
      Thank You!
    </h2>
    
    <p class="text-gray-500 mb-8">
      We've added your card details
    </p>

    <!-- Continue Button -->
    <button
      @click="$emit('continue')"
      class="w-full bg-[#21092fff] text-white py-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
    >
      Continue
    </button>
  </div>
</template>

<script setup lang="ts">
interface Emits {
  (e: 'continue'): void
}

defineEmits<Emits>()
</script>