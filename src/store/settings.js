import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSettingsStore = defineStore('settings', () => {
  const error = ref(null)
  const loading = ref(false)
  const companyName = ref([])
  const companyAddress = ref([])
  const companyPhone = ref([])
  const companyEmail = ref([])
  const companyLogo = ref([])
  const companyDescription = ref([])
  const companyFacebook = ref([])
  const companyInstagram = ref([])
  const companyTwitter = ref([])
  const companyLinkedin = ref([])
  const companyYoutube = ref([])
  const companyTiktok = ref([])
  const companyPinterest = ref([])
  const companyStory = ref([])
  const companyMission = ref([])
  const companyVision = ref([])
  const areasServed = ref([])
  const faqs = ref([])

  async function fetchSettings() {
    error.value = null
    loading.value = true
    
    try {
      const response = await axios.get(`client/settings`)
      companyName.value = response.data.settings.company_name
      companyAddress.value = response.data.settings.company_address
      companyPhone.value = response.data.settings.company_phone
      companyEmail.value = response.data.settings.company_email
      companyLogo.value = response.data.settings.company_logo
      companyDescription.value = response.data.settings.company_description
      companyFacebook.value = response.data.settings.company_facebook
      companyInstagram.value = response.data.settings.company_instagram
      companyTwitter.value = response.data.settings.company_twitter
      companyLinkedin.value = response.data.settings.company_linkedin
      companyYoutube.value = response.data.settings.company_youtube
      companyTiktok.value = response.data.settings.company_tiktok
      companyPinterest.value = response.data.settings.company_pinterest
      companyStory.value = response.data.settings.company_story
      companyMission.value = response.data.settings.company_mission
      companyVision.value = response.data.settings.company_vision
      areasServed.value = response.data.settings.areas_served
      faqs.value = response.data.settings.faqs
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    companyName,
    companyAddress,
    companyPhone,
    companyEmail,
    companyLogo,
    companyDescription,
    companyFacebook,
    companyInstagram,
    companyTwitter,
    companyLinkedin,
    companyYoutube,
    companyTiktok,
    companyPinterest,
    companyStory,
    companyMission,
    companyVision,
    areasServed,
    faqs,
    error,
    loading,
    // Actions
    fetchSettings,
  }
})
