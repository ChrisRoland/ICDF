<template>
  <div class="min-h-screen lg:flex">
    <!-- Left Section - Cards Display -->
    <div class="bg-[url('/src/assets/images/bg-main-mobile.png')] h-[220px] lg:h-auto lg:bg-[url('/src/assets/images/bg-main-desktop.png')] bg-cover bg-center lg:w-1/3 relative py-6 px-4 lg:p-12">
      <CardsDisplay 
        :card-number="displayCardNumber"
        :cardholder-name="displayCardholderName"
        :expiry="displayExpiry"
        :cvc="displayCVC"
      />
    </div>

    <!-- Right Section - Form & Success -->
    <div class="lg:w-2/3 flex items-center justify-center py-6 px-4 lg:p-12 lg:bg-gray-100">
      <div class="w-full max-w-md">
        <!-- Form State -->
        <CardForm
        class="mt-16 lg:mt-0"
          v-if="!isCompleted"
          :form-data="formData"
          :errors="errors"
          @update:cardholder-name="formData.cardholderName = $event"
          @update:card-number="handleCardNumberInput"
          @update:exp-month="(value) => handleExpiryInput('expMonth', value)"
          @update:exp-year="(value) => handleExpiryInput('expYear', value)"
          @update:cvc="handleCVCInput"
          @submit="submitForm"
        />

        <!-- Success State -->
        <SuccessState
          v-else
          @continue="resetForm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardsDisplay from '@/components/CardDisplay.vue'
import CardForm from '@/components/CardForm.vue'
import SuccessState from '@/components/SuccessState.vue'
import { useCardForm } from '@/composables/useCardForm'

// Initialize form composable
const {
  formData,
  errors,
  isCompleted,
  displayCardNumber,
  displayCardholderName,
  displayExpiry,
  displayCVC,
  submitForm,
  resetForm,
  handleCardNumberInput,
  handleExpiryInput,
  handleCVCInput
} = useCardForm()
</script>