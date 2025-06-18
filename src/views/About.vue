<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="relative py-32 md:py-52 water-gradient">
      <div class="absolute inset-0 bg-primary opacity-20">
          <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto relative z-10">
          <div class="text-center text-white slide-up">
              <h1 class="font-bold mb-6">About Us</h1>
              <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                  Learn more about our company and the services we offer
              </p>
          </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Story</h2>
            <p class="text-gray-700 mb-10">
              {{ companyStory }}
            </p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
            <p class="text-gray-700 mb-10">
              {{ companyMission }}
            </p>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision</h2>
            <p class="text-gray-700">
              {{ companyVision }}
            </p>
          </div>
          <div class="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Our Team" 
              class="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Our Core Values</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Quality</h3>
            <p class="text-gray-600">
              We never compromise on the quality of our work. Using professional-grade equipment and proven techniques, we deliver results that stand the test of time.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Customer Service</h3>
            <p class="text-gray-600">
              From the first phone call to the final walkthrough, we prioritize clear communication, respect for your property, and exceeding your expectations.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Environmental Responsibility</h3>
            <p class="text-gray-600">
              We use eco-friendly cleaning solutions and water conservation practices to minimize our environmental impact while effectively cleaning your property.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Innovation</h3>
            <p class="text-gray-600">
              We continuously research and adopt new techniques, equipment, and solutions to provide the most effective and efficient pressure washing services available.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">Meet Our Team</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our experienced professionals are dedicated to delivering exceptional results for every project
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="team-member bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-2" v-for="member in members" :key="member.id">
            <div class="relative h-72">
              <img 
                :src="member.image" 
                :alt="member.name" 
                class="w-full h-full object-cover"
              />
            </div>  
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-primary">{{ member.name }}</h3>
              <h4 class="text-gray-600">Email: {{ member.email }}</h4>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="md:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Why Choose Simply Clean Power WashingPro?</h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="bg-secondary rounded-full p-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-bold text-lg text-primary">Experienced Professionals</h3>
                  <p class="text-gray-700">Our team brings years of specialized knowledge and training to every project, ensuring optimal results without damage to your property.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="bg-secondary rounded-full p-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-bold text-lg text-primary">Satisfaction Guaranteed</h3>
                  <p class="text-gray-700">We stand behind our work with a 100% satisfaction guarantee. If you're not happy with the results, we'll return to address your concerns.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="bg-secondary rounded-full p-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-bold text-lg text-primary">Fully Insured</h3>
                  <p class="text-gray-700">We carry comprehensive insurance coverage for your peace of mind, protecting both our team and your property throughout the service process.</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <div class="bg-secondary rounded-full p-1">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-bold text-lg text-primary">Advanced Equipment</h3>
                  <p class="text-gray-700">We invest in professional-grade pressure washing equipment that delivers superior cleaning power while allowing precise control for different surfaces.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/6195254/pexels-photo-6195254.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Professional Pressure Washing" 
              class="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Affiliations -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">Our Certifications & Affiliations</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We maintain the highest industry standards through professional certifications and memberships
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-center font-semibold text-primary">PWNA Certified</h3>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 class="text-center font-semibold text-primary">EPA Certified</h3>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-center font-semibold text-primary">Chamber of Commerce</h3>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg class="w-14 h-14 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="text-center font-semibold text-primary">Better Business Bureau</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary water-gradient text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Contact our team today to schedule your free consultation and estimate.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link to="/contact" class="btn btn-accent text-lg">
            Get a Free Quote
          </router-link>
          <a :href="`tel:${companyPhone}`" class="btn bg-white text-primary hover:bg-gray-100 text-lg">
            Call {{ companyPhone }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { useMembersStore } from '@/store/members'

export default {
  name: 'About',
  data() {
    return {
      settingsStore: useSettingsStore(),
      membersStore: useMembersStore(),
      companyStory: '',
      companyMission: '',
      companyVision: '',
      members: [],
      companyPhone: ''
    }
  },
  mounted() {
    this.members = this.membersStore.members
    this.companyStory = this.settingsStore.companyStory
    this.companyMission = this.settingsStore.companyMission
    this.companyVision = this.settingsStore.companyVision
    this.companyPhone = this.settingsStore.companyPhone
    console.log(this.members)
  }

}
</script>