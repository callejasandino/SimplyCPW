<template>
    <Modal
        :show="show"
        title="Privacy Policy"
        @close="closeModal"
        maxWidth="max-w-7xl"
        maxHeight="h-full"
    >
    <div class="p-6 h-[900px] overflow-y-auto">
      <div class="prose prose-sm max-w-none">
        <p class="text-sm text-gray-600 mb-4">
          <strong>Effective Date:</strong> June 20, 2025
        </p>
        
        <p class="mb-4">
          Simply Clean Pressure Washing is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">1. Information We Collect</h3>
        <p class="mb-2">We may collect the following information:</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Name, email address, phone number (via quote and contact forms)</li>
          <li>Address and service location (when booking a service)</li>
          <li>Chat content (for quality assurance)</li>
          <li>IP address and browser information (for security and analytics)</li>
        </ul>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">2. How We Use Your Data</h3>
        <p class="mb-2">Your information is used to:</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Process service requests and provide quotations</li>
          <li>Communicate with you via email, chat, or phone</li>
          <li>Offer promotions or updates (only with your consent)</li>
          <li>Improve website performance and customer experience</li>
        </ul>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">3. Data Sharing</h3>
        <p class="mb-2">We do not sell or rent your data. Your data may only be shared with:</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Our internal team (for service fulfillment)</li>
          <li>Third-party services we use for website hosting, chat, or email communication (all compliant with data protection laws)</li>
        </ul>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">4. Cookies and Tracking</h3>
        <p class="mb-4">
          Our website uses cookies to improve user experience and track usage anonymously. You can disable cookies in your browser settings.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">5. Data Security</h3>
        <p class="mb-4">
          We implement reasonable technical and organizational safeguards to protect your data against unauthorized access, alteration, or disclosure.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">6. Your Rights</h3>
        <p class="mb-2">You have the right to:</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of promotional communications at any time</li>
        </ul>
        <p class="mb-4">
          To make any data-related requests, please contact us at info@simplycpw.com.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">7. Updates to This Policy</h3>
        <p class="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
    import Modal from '../ui/Modal.vue'
    export default {
        components: {
            Modal
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>