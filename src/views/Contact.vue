<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="relative py-32 md:py-52 water-gradient">
        <div class="absolute inset-0 bg-primary opacity-20">
            <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div class="container mx-auto relative z-10">
            <div class="text-center text-white slide-up">
                <h1 class="font-bold mb-6">Contact Us</h1>
                <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                    Get in touch with us for any questions or inquiries
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Contact Information -->
          <div class="lg:w-1/3">
            <h2 class="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Phone</h3>
                  <p class="text-gray-600">{{ companyPhone }}</p>
                  <p class="text-sm text-gray-500">{{ getOperatingDaysAndHours() }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Email</h3>
                  <p class="text-gray-600">{{ companyEmail }}</p>
                  <p class="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary text-white p-3 rounded-lg mr-4">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Address</h3>
                  <p class="text-gray-600">{{ companyAddress }}</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="mt-8">
              <h3 class="font-semibold text-lg mb-4">Connect With Us</h3>
              <div class="flex space-x-4">
                <a :href="companyFacebook" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a :href="companyInstagram" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a :href="companyTwitter" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>

                <a :href="companyLinkedin" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300"> 
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a :href="companyYoutube" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>  
                </a>
                <a :href="companyTiktok" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a :href="companyPinterest" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">  
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.744-1.378l-.628 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Business Hours -->
            <div class="mt-8 bg-gray-100 p-5 rounded-lg" v-if="businessHours">
              <h3 class="font-semibold text-lg mb-3">Business Hours</h3>
              <ul class="space-y-2">
                <li class="flex justify-between" v-if="businessHours.monday">
                  <span class="text-gray-600">Monday:</span>
                  <span class="font-medium">{{ businessHours.monday.isOpen ? formatTime(businessHours.monday.openTime) + ' - ' + formatTime(businessHours.monday.closeTime) : 'Closed' }}</span>
                </li>
                <li class="flex justify-between" v-if="businessHours.tuesday">
                  <span class="text-gray-600">Tuesday:</span>
                  <span class="font-medium">{{ businessHours.tuesday.isOpen ? formatTime(businessHours.tuesday.openTime) + ' - ' + formatTime(businessHours.tuesday.closeTime) : 'Closed' }}</span>
                </li>
                <li class="flex justify-between" v-if="businessHours.wednesday">
                  <span class="text-gray-600">Wednesday:</span>
                  <span class="font-medium">{{ businessHours.wednesday.isOpen ? formatTime(businessHours.wednesday.openTime) + ' - ' + formatTime(businessHours.wednesday.closeTime) : 'Closed' }}</span>
                </li>
                <li class="flex justify-between" v-if="businessHours.thursday">
                  <span class="text-gray-600">Thursday:</span>
                  <span class="font-medium">{{ businessHours.thursday.isOpen ? formatTime(businessHours.thursday.openTime) + ' - ' + formatTime(businessHours.thursday.closeTime) : 'Closed' }}</span>
                </li>
                
                <li class="flex justify-between" v-if="businessHours.friday">
                  <span class="text-gray-600">Friday:</span>
                  <span class="font-medium">{{ businessHours.friday.isOpen ? formatTime(businessHours.friday.openTime) + ' - ' + formatTime(businessHours.friday.closeTime) : 'Closed' }}</span>
                </li>
                 <li class="flex justify-between" v-if="businessHours.saturday">
                  <span class="text-gray-600">Saturday:</span>
                  <span class="font-medium">{{ businessHours.saturday.isOpen ? formatTime(businessHours.saturday.openTime) + ' - ' + formatTime(businessHours.saturday.closeTime) : 'Closed' }}</span>
                </li>
                 <li class="flex justify-between" v-if="businessHours.sunday">
                  <span class="text-gray-600">Sunday:</span>
                  <span class="font-medium">{{ businessHours.sunday.isOpen ? formatTime(businessHours.sunday.openTime) + ' - ' + formatTime(businessHours.sunday.closeTime) : 'Closed' }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <h2 class="text-2xl font-bold mb-6 text-primary">Request a Free Quote</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    @input="formatPhoneNumber"
                    v-model="form.phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  v-model="form.address"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Services Needed *</label>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div v-for="service in services" :key="service.id" class="flex items-center">
                    <input
                      type="checkbox"
                      :id="service.id"
                      :value="service.id"
                      v-model="form.servicesNeeded"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label :for="service.id" class="ml-2 text-sm text-gray-700">{{ service.name }}</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea 
                  id="message" 
                  v-model="form.additionalInfo"
                  rows="5"
                  placeholder="Please provide any additional information that may be helpful for us to know."
                  maxlength="255"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                ></textarea>
              </div>
              
              <div class="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  v-model="form.agreedToTerms"
                  class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  required
                />
                <label for="terms" class="ml-2 text-sm text-gray-700">
                  I agree to the <button class="text-primary hover:underline" @click.prevent="showTermsAndCondition = true">Terms and Conditions</button> and <button class="text-primary hover:underline" @click.prevent="showPrivacyPolicy = true">Privacy Policy</button>.
                </label>
              </div>

              <div class="flex items-start">
                <input
                  id="optIn"
                  type="checkbox"
                  v-model="form.optIn"
                  class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                />
                <label for="optIn" class="ml-2 text-sm text-gray-700">
                  I would like to receive updates and promotions from Simply CPW.
                </label>
              </div>

              <!-- recaptcha -->
              <div class="g-recaptcha" :data-sitekey="siteKey"></div>
              <input type="hidden" name="gRecaptchaResponse" v-model="form.gRecaptchaResponse" required>

              <div>
                <button 
                  type="submit"
                  class="btn btn-primary w-full md:w-auto px-8 py-3"
                  :disabled="submitting"
                >
                  <span v-if="submitting">Sending...</span>
                  <span v-else>Submit Request</span>
                </button>
              </div>
            </form>
            
            <!-- Success Message -->
            <div v-if="error" class="mt-6 p-4 bg-red-100 text-red-700 rounded-md">
              <div class="flex">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M12 3v1m0 16H9m3 0h3m-3-13h.01M12 18h.01M12 12h.01M3 12h.01M12 3a9 9 0 110 18 9 9 0 010-18z"></path>
                </svg>
                <p>{{ error }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 text-center text-primary">Our Location</h2>
        
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <!-- Map Placeholder -->
          <div class="h-96 bg-gray-300 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <svg class="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p class="mt-2 text-gray-500">Interactive Map Placeholder</p>
                <p class="text-sm text-gray-400">(An actual map would be integrated here)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 text-center text-primary">Areas We Serve</h2>
        <p class="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          We provide pressure washing services throughout the following communities and surrounding areas
        </p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div class="text-center p-4 rounded-lg hover:bg-gray-100" v-for="area in areasServed" :key="area.id">
            <h3 class="font-semibold text-primary">{{ area }}</h3>
          </div>
        </div>
        
        <p class="text-center text-gray-600 mt-8">
          Don't see your area listed? Contact us to check if we service your location!
        </p>
      </div>
    </section>

    <!-- Emergency Service CTA -->
    <section class="py-10 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-white mb-4 md:mb-0">
            <h3 class="text-xl font-bold">Need Emergency Service?</h3>
            <p>We offer priority scheduling for urgent situations!</p>
          </div>
          <a href="tel:5551234567" class="btn bg-white text-primary hover:bg-gray-100">
            Call Now: {{ companyPhone }}
          </a>
        </div>
      </div>
    </section>

    <PrivacyPolicy :show="showPrivacyPolicy" @close="showPrivacyPolicy = false" />
    <TermsAndCondition :show="showTermsAndCondition" @close="showTermsAndCondition = false" />
  </div>
</template>

<script>
import { useServiceStore } from '@/store/service'
import { useSettingsStore } from '@/store/settings'
import { useBusinessHoursStore } from '@/store/business-hours'
import { useQuoteStore } from '@/store/quote'
import { formatPhoneNumber } from '@/utils/phonenumber'
import PrivacyPolicy from '../components/modals/PrivacyPolicy.vue'
import TermsAndCondition from '../components/modals/TermsAndCondition.vue'
export default {
  name: 'Contact',
  components: {
    PrivacyPolicy,
    TermsAndCondition
  },
  data() {
    return {
      servicesStore: useServiceStore(),
      settingsStore: useSettingsStore(),
      businessHoursStore: useBusinessHoursStore(),
      quotesStore: useQuoteStore(),
      submitting: false,
      submitted: false,
      companyPhone: null,
      companyEmail: null,
      companyFacebook: null,
      companyInstagram: null,
      companyTwitter: null,
      companyLinkedin: null,
      companyYoutube: null,
      companyTiktok: null,
      companyPinterest: null,
      companyAddress: null,
      businessHours: null,
      areasServed: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        servicesNeeded: [],
        additionalInfo: '',
        agreedToTerms: false,
        optIn: false,
        gRecaptchaResponse: ''
      },
      services: [],
      error: null,
      submitted: false,
      siteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,
      showPrivacyPolicy: false,
      showTermsAndCondition: false
    }
  },
  methods: {

    async submitForm() {

      const response = grecaptcha.getResponse()

      if (!response) {
        showToast('Please complete the CAPTCHA', 'error')
        return
      }

      this.error = null
      this.submitting = true
      this.form.gRecaptchaResponse = response
      await this.quotesStore.addQuote(this.form)
      if (this.quotesStore.error) {
        this.submitting = false
        this.error = this.quotesStore.error
      } else {
        this.submitted = true
        this.submitting = false
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          servicesNeeded: [],
          additionalInfo: '',
          agreedToTerms: false,
          optIn: false,
          gRecaptchaResponse: ''
        }
      }

      setTimeout(() => {
        this.submitted = false
      }, 3000)
    },

    formatPhoneNumber(event) {
      this.form.phone = formatPhoneNumber(event.target.value)
    },

    formatTime(time) {
      if (!time) return '';
      
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      
      return `${displayHour}:${minutes} ${ampm}`;
    },
    
    getOperatingDaysAndHours() {
      if (!this.businessHours) return 'Mon-Fri: 8am - 6pm';
      
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
      // Find open days
      const openDays = [];
      for (let i = 0; i < days.length; i++) {
        const day = this.businessHours[days[i]];
        if (day && day.isOpen) {
          openDays.push({
            index: i,
            name: dayNames[i],
            openTime: day.openTime,
            closeTime: day.closeTime
          });
        }
      }
      
      if (openDays.length === 0) return 'Closed';
      
      // Find most common hours
      const hoursMap = {};
      openDays.forEach(day => {
        const timeRange = `${this.formatTime(day.openTime)} - ${this.formatTime(day.closeTime)}`;
        if (!hoursMap[timeRange]) {
          hoursMap[timeRange] = [];
        }
        hoursMap[timeRange].push(day);
      });
      
      // Get the most common time range
      const mostCommonHours = Object.keys(hoursMap).reduce((a, b) => 
        hoursMap[a].length > hoursMap[b].length ? a : b
      );
      
      // Format day range
      let dayRange = '';
      if (openDays.length === 7) {
        dayRange = 'Every day';
      } else if (this.isConsecutiveDays(openDays)) {
        dayRange = `${openDays[0].name}-${openDays[openDays.length - 1].name}`;
      } else {
        // Non-consecutive days
        if (openDays.length <= 3) {
          dayRange = openDays.map(d => d.name).join(', ');
        } else {
          dayRange = openDays.map(d => d.name).join(', ');
        }
      }
      
      return `${dayRange}: ${mostCommonHours}`;
    },
    
    isConsecutiveDays(openDays) {
      if (openDays.length <= 1) return true;
      
      for (let i = 1; i < openDays.length; i++) {
        const prevIndex = openDays[i - 1].index;
        const currentIndex = openDays[i].index;
        
        // Handle wrap-around (Sunday after Saturday)
        const diff = currentIndex === 0 && prevIndex === 6 ? 1 : currentIndex - prevIndex;
        
        if (diff !== 1) return false;
      }
      return true;
    }
  },
  mounted() {
    // Set business hours and services
    this.businessHours = this.businessHoursStore.businessHours?.[0]?.hours || []
    this.services = this.servicesStore.services
    
    // Set company information with defaults
    const settings = this.settingsStore
    const defaultSocials = {
      phone: '555-123-4567',
      email: 'info@example.com',
      address: '123 Main St, Anytown, USA',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
      twitter: 'https://www.twitter.com/example',
      linkedin: 'https://www.linkedin.com/example',
      youtube: 'https://www.youtube.com/example',
      tiktok: 'https://www.tiktok.com/example',
      pinterest: 'https://www.pinterest.com/example'
    }
    
    // Apply settings with fallbacks to defaults
    this.companyPhone = settings.companyPhone || defaultSocials.phone
    this.companyEmail = settings.companyEmail || defaultSocials.email
    this.companyAddress = settings.companyAddress || defaultSocials.address
    this.companyFacebook = settings.companyFacebook || defaultSocials.facebook
    this.companyInstagram = settings.companyInstagram || defaultSocials.instagram
    this.companyTwitter = settings.companyTwitter || defaultSocials.twitter
    this.companyLinkedin = settings.companyLinkedin || defaultSocials.linkedin
    this.companyYoutube = settings.companyYoutube || defaultSocials.youtube
    this.companyTiktok = settings.companyTiktok || defaultSocials.tiktok
    this.companyPinterest = settings.companyPinterest || defaultSocials.pinterest
    
    // Parse areas served or use empty array
    this.areasServed = settings.areasServed ? JSON.parse(settings.areasServed) : []

    const script = document.createElement('script')
    script.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    document.head.appendChild(script)
  }

}
</script>