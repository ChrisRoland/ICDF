<template>
  <div class="relative max-w-md mx-auto lg:mx-0 lg:mt-20">
    <!-- Card Back (positioned) -->
    <div class="absolute top-0 right-0 lg:top-64 lg:-right-48">
      <CardBack :cvc="cvc" />
    </div>

    <!-- Card Front (positioned in front) -->
    <div class="absolute z-20 mt-3 lg:mt-0 top-20 lg:top-0 lg:-right-28">
      <CardFront 
        :card-number="cardNumber"
        :cardholder-name="cardholderName"
        :expiry="expiry"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardFront from '@/components/CardFront.vue'
import CardBack from '@/components/CardBack.vue'

interface Props {
  cardNumber: string
  cardholderName: string
  expiry: string
  cvc: string
}

defineProps<Props>()
</script>