<template>
    <Modal
        :show="show"
        title="Terms and Conditions"
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
          Welcome to Simply Clean Pressure Washing. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">1. Services Offered</h3>
        <p class="mb-4">
          Simply Clean Pressure Washing provides exterior cleaning services, including pressure washing for homes, driveways, sidewalks, and commercial properties. The website also offers:
        </p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Quotation requests</li>
          <li>Service scheduling</li>
          <li>Viewing of FAQs, gallery, and blog</li>
          <li>Access to promotional events and business updates</li>
        </ul>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">2. Use of Website</h3>
        <p class="mb-2">You agree to use this website only for lawful purposes. You shall not:</p>
        <ul class="list-disc list-inside mb-4 space-y-1">
          <li>Misuse or attempt to interfere with the site's functionality</li>
          <li>Transmit any harmful or malicious software</li>
          <li>Submit false or misleading information</li>
        </ul>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">3. Quotes and Promotions</h3>
        <p class="mb-4">
          When you submit a quotation or participate in a promotional event, you agree to provide accurate and truthful information. We reserve the right to reject or cancel quotes or promotions if misuse or fraudulent activity is suspected.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">4. Chat and Communication</h3>
        <p class="mb-4">
          Our chat system is provided for support and service inquiries. Any abusive, offensive, or inappropriate language may result in termination of communication and possible blocking of your IP.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">5. Intellectual Property</h3>
        <p class="mb-4">
          All content on this website, including text, images, branding, and layout, is the property of Simply Clean Pressure Washing and may not be copied, reproduced, or distributed without our written consent.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">6. Liability Disclaimer</h3>
        <p class="mb-4">
          While we strive for accuracy, Simply Clean Pressure Washing does not guarantee the completeness, reliability, or availability of website content. We are not liable for any direct or indirect damage arising from your use of this website.
        </p>

        <h3 class="text-lg font-semibold text-neutral-dark mt-6 mb-3">7. Changes to Terms</h3>
        <p class="mb-4">
          We reserve the right to update these terms at any time. Changes will be posted here with an updated effective date.
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