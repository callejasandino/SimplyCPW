import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useBusinessEventsStore = defineStore('business-events', () => {
  const businessEvents = ref([])
  const businessEvent = ref(null)
  const error = ref(null)
  const pagination = ref(null)

  async function fetchBusinessEvents(page = 1) {
    error.value = null

    try {
      const response = await axios.get(`client/business-events?page=${page}`)
      businessEvents.value = response.data.business_events.data
      pagination.value = {
        current_page: response.data.business_events.current_page,
        from: response.data.business_events.from,
        to: response.data.business_events.to,
        total: response.data.business_events.total,
        per_page: response.data.business_events.per_page,
        links: response.data.business_events.links,
        prev_page_url: response.data.business_events.prev_page_url,
        next_page_url: response.data.business_events.next_page_url
      }
    } catch (err) {
      error.value = err.message
    }
  }

  async function fetchBusinessEvent(slug) {
    error.value = null

    try {
      const response = await axios.get(`client/business-events/${slug}`)
      businessEvent.value = response.data.business_event
    } catch (err) {
      error.value = err.message
    }
  }
  return {
    // State
    businessEvents,
    businessEvent,
    error,
    pagination,

    // Actions
    fetchBusinessEvents,
    fetchBusinessEvent
  }
})
