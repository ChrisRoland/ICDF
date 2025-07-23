<template>
  <div class="space-y-2">
    <label 
      :for="id"
      class="block text-sm font-medium text-gray-700 uppercase tracking-wide"
    >
      {{ label }}
    </label>
    
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :class="inputClasses"
      @input="handleInput"
      @blur="$emit('blur')"
    />
    
    <div v-if="error" class="text-red-500 text-xs">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id: string
  label: string
  modelValue: string
  type?: string
  placeholder?: string
  maxlength?: number
  error?: string
  isMono?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  maxlength: undefined,
  error: '',
  isMono: false
})

const emit = defineEmits<Emits>()

const inputClasses = computed(() => [
  'w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors',
  props.isMono ? 'font-mono' : '',
  props.error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>