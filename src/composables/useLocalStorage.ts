import { ref, watch } from 'vue'

export default function useLocalStorage(key, initialValue) {
  const storedValue = ref(JSON.parse(localStorage.getItem(key)) || initialValue)

  const setStoredValue = (value) => {
    storedValue.value = value
    localStorage.setItem(key, JSON.stringify(value))
  }

  watch(storedValue, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  })

  return { storedValue, setStoredValue }
}
