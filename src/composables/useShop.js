import { computed } from 'vue'
import { useRoute } from 'vue-router'

export function useShop() {
  const route = useRoute()

  const shopUuid = computed(() => route?.params?.shop_uuid ?? null)

  return {
    shopUuid,
  }
}
