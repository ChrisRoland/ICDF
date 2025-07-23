<template>
  <div class="space-y-6 lg:w-96 ml-auto">
    <!-- Cardholder Name -->
    <FormInput
      id="cardholder-name"
      label="Cardholder Name"
      v-model="formData.cardholderName"
      placeholder="e.g. Jane Appleseed"
      :error="errors.cardholderName"
    />

    <!-- Card Number -->
    <FormInput
      id="card-number"
      label="Card Number"
      :model-value="formData.cardNumber"
      @update:model-value="handleCardNumberInput"
      placeholder="e.g. 1234 5678 9123 0000"
      :maxlength="19"
      :error="errors.cardNumber"
      :is-mono="true"
    />

    <!-- Expiry Date and CVC Row -->
    <div class="flex space-x-4">
      <!-- Expiry Date -->
      <div class="flex-1">
        <label
          class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide"
        >
          Exp. Date (MM/YY)
        </label>
        <div class="flex space-x-2">
          <input
            id="exp-month"
            type="text"
            :value="formData.expMonth"
            @input="(e) => handleExpiryInput('expMonth', (e.target as HTMLInputElement).value)"
            placeholder="MM"
            maxlength="2"
            :class="expiryInputClasses"
          />
          <input
            id="exp-year"
            type="text"
            :value="formData.expYear"
            @input="(e) => handleExpiryInput('expYear', (e.target as HTMLInputElement).value)"
            placeholder="YY"
            maxlength="2"
            :class="expiryInputClasses"
          />
        </div>
        <div
          v-if="errors.expMonth || errors.expYear"
          class="text-red-500 text-xs mt-2"
        >
          {{ errors.expMonth || errors.expYear }}
        </div>
      </div>

      <!-- CVC -->
      <div class="flex-1">
        <FormInput
          id="cvc"
          label="CVC"
          :model-value="formData.cvc"
          @update:model-value="handleCVCInput"
          placeholder="e.g. 123"
          :maxlength="3"
          :error="errors.cvc"
          :is-mono="true"
        />
      </div>
    </div>

    <!-- Submit Button -->
    <button
      @click="handleSubmit"
      class="w-full bg-[#21092fff] text-white py-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
    >
      Confirm
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import FormInput from "./FormInput.vue";
import type { CardFormData, FormErrors } from "@/types";

interface Props {
  formData: CardFormData;
  errors: FormErrors;
}

interface Emits {
  (e: "update:cardholderName", value: string): void;
  (e: "update:cardNumber", value: string): void;
  (e: "update:expMonth", value: string): void;
  (e: "update:expYear", value: string): void;
  (e: "update:cvc", value: string): void;
  (e: "submit"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

// Computed classes for expiry inputs
const expiryInputClasses = computed(() => [
  "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-center transition-colors",
  props.errors.expMonth || props.errors.expYear
    ? "border-red-500"
    : "border-gray-300 hover:border-gray-400",
]);

// Input handlers
const handleCardNumberInput = (value: string) => {
  emit("update:cardNumber", value);
};

const handleExpiryInput = (field: "expMonth" | "expYear", value: string) => {
  if (field === "expMonth") {
    emit("update:expMonth", value);
  } else {
    emit("update:expYear", value);
  }
};

const handleCVCInput = (value: string) => {
  emit("update:cvc", value);
};

const handleSubmit = () => {
  emit("submit");
};
</script>
