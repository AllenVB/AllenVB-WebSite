// ==========================================
// UYGULAMA AYARLARI VE DEĞIŞKENLER
// ==========================================

const pages = {
    home: `
    <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in-up">
            <h1 class="text-5xl md:text-6xl font-bold text-blue-400 mb-6">Merhaba 👋</h1>
            <p class="text-xl text-slate-300 mb-4" data-tr="home-subtitle">Yazılım Mühendisi ve Web Developer</p>
            <p class="text-lg text-slate-400 mb-8">Modern teknolojiler ile yaratıcı çözümler üretiyorum</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition hover:scale-105 transform duration-200" data-page="about">
                <i class="bi bi-info-circle me-2"></i>Hakkımda
              </button>
              <button class="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition hover:scale-105 transform duration-200" data-page="projects">
                <i class="bi bi-folder me-2"></i>Projelerim
              </button>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="border-4 border-blue-400 rounded-lg overflow-hidden shadow-2xl hover:shadow-blue-400/50 transition-shadow duration-300 animate-slide-in-down">
              <img src="ben1.jpeg" alt="Süleyman Emre Arlı" class="w-full h-full object-cover rounded-lg" style="max-width: 400px; height: auto;">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

    about: `
    <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 class="text-5xl md:text-6xl font-bold text-blue-400 mb-12" data-tr="nav-about">Hakkımda</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg mb-6 hover:border-blue-400 transition">
              <h3 class="text-2xl font-bold text-blue-400 mb-4" data-tr="about-title">Kişisel Bilgiler</h3>
              <p class="text-slate-300 mb-4" data-tr="about-description">
                Merhaba! Ben Süleyman Emre Arlı, 21 yaşındayım ve Bandırma Onyedi Eylül Üniversitesinde Yazılım Mühendisliği öğrencisiyim. 
                Web tasarımı, yazılım geliştirme ve teknolojiye olan merakım beni bu alana itmiştir.
              </p>
              <p class="text-slate-300" data-tr="about-description2">
                Modern teknolojiler ile projeler geliştirmeyi severim. Özellikle responsive tasarım, backend geliştirme ve 
                veritabanı yönetimi konularında kendimi geliştirmekteyim.
              </p>
            </div>

            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg mb-6 hover:border-blue-400 transition">
              <h3 class="text-2xl font-bold text-blue-400 mb-6" data-tr="skills">Yetenekler</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 class="text-lg font-bold text-blue-300 mb-3">Frontend</h5>
                  <ul class="space-y-2">
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>HTML5 & CSS3</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>JavaScript</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>Tailwind CSS</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>Responsive Tasarım</li>
                  </ul>
                </div>
                <div>
                  <h5 class="text-lg font-bold text-blue-300 mb-3">Backend</h5>
                  <ul class="space-y-2">
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>Java</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>Spring</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>PostgreSQL</li>
                    <li class="text-slate-300"><i class="bi bi-check-circle text-green-400 me-2"></i>API Geliştirme</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h3 class="text-2xl font-bold text-blue-400 mb-4" data-tr="education">Eğitim</h3>
              <h5 class="text-lg font-bold text-blue-300">Bandırma Onyedi Eylül Üniversitesi</h5>
              <p class="text-slate-400">Yazılım Mühendisliği - 3. Sınıf (2025-Devam Ediyor)</p>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-24 bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h3 class="text-2xl font-bold text-blue-400 mb-6" data-tr="contact-info">İletişim</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="bi bi-envelope text-blue-400 me-3 mt-1 flex-shrink-0"></i>
                  <a href="mailto:suleymanarli0666@gmail.com" class="text-slate-300 hover:text-blue-300 transition">suleymanarli0666@gmail.com</a>
                </li>
                <li class="flex items-start">
                  <i class="bi bi-telephone text-blue-400 me-3 mt-1 flex-shrink-0"></i>
                  <a href="tel:+905444530125" class="text-slate-300 hover:text-blue-300 transition">+90 544 453 0125</a>
                </li>
                <li class="flex items-start">
                  <i class="bi bi-geo-alt text-blue-400 me-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-300">Bandırma, Balıkesir, Türkiye</span>
                </li>
              </ul>
              <div class="mt-6 pt-6 border-t border-slate-700">
                <h5 class="text-lg font-bold text-blue-400 mb-3" data-tr="social">Sosyal Ağlar</h5>
                <div class="flex gap-4">
                  <a href="https://github.com/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                    <i class="bi bi-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/SleymanEmreArl1" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://instagram.com/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                    <i class="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

    projects: `
    <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 class="text-5xl md:text-6xl font-bold text-blue-400 mb-12" data-tr="nav-projects">Projelerim</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.1s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <i class="bi bi-globe text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 1</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-blue-500 text-white text-sm rounded">HTML</span>
                <span class="px-3 py-1 bg-blue-500 text-white text-sm rounded">CSS</span>
                <span class="px-3 py-1 bg-blue-500 text-white text-sm rounded">JS</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-green-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.2s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <i class="bi bi-lightning text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 2</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-green-500 text-white text-sm rounded">React</span>
                <span class="px-3 py-1 bg-green-500 text-white text-sm rounded">Node.js</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.3s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <i class="bi bi-code-slash text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 3</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-purple-500 text-white text-sm rounded">Python</span>
                <span class="px-3 py-1 bg-purple-500 text-white text-sm rounded">Database</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-red-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.4s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <i class="bi bi-palette text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 4</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-red-500 text-white text-sm rounded">Design</span>
                <span class="px-3 py-1 bg-red-500 text-white text-sm rounded">Frontend</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-yellow-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.5s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
              <i class="bi bi-chat text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 5</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-yellow-500 text-white text-sm rounded">Chat App</span>
                <span class="px-3 py-1 bg-yellow-500 text-white text-sm rounded">WebSocket</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.6s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
              <i class="bi bi-shop text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 6</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-cyan-500 text-white text-sm rounded">E-commerce</span>
                <span class="px-3 py-1 bg-cyan-500 text-white text-sm rounded">Payment</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-pink-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.7s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
              <i class="bi bi-camera text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 7</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-pink-500 text-white text-sm rounded">Gallery</span>
                <span class="px-3 py-1 bg-pink-500 text-white text-sm rounded">Media</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-indigo-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.8s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
              <i class="bi bi-graph-up text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 8</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-500 text-white text-sm rounded">Analytics</span>
                <span class="px-3 py-1 bg-indigo-500 text-white text-sm rounded">Dashboard</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

          <div class="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-400 hover:scale-105 transition transform duration-300" style="animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.9s; opacity: 0;">
            <div class="h-32 bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
              <i class="bi bi-robot text-white" style="font-size: 3rem;"></i>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-bold text-blue-400 mb-2">Proje 9</h5>
              <p class="text-slate-400 mb-4">Proje açıklaması buraya gelecek. Teknolojiler ve özellikler hakkında bilgi ekleyebilirsiniz.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-orange-500 text-white text-sm rounded">AI</span>
                <span class="px-3 py-1 bg-orange-500 text-white text-sm rounded">Automation</span>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition">
                <i class="bi bi-github me-2"></i>Detaylar
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,

    contact: `
    <section class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 class="text-5xl md:text-6xl font-bold text-blue-400 mb-12" data-tr="nav-contact">İletişim & Görüşleriniz</h2>
        
        <!-- Üst Kısım: Form ve Mesajlar -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Sol Kolon: İletişim Formu -->
          <div class="bg-slate-800 border border-slate-700 p-8 rounded-lg hover:border-blue-400 transition">
            <h3 class="text-2xl font-bold text-blue-400 mb-6" data-tr="get-in-touch">Benimle İletişime Geçin</h3>
            <form id="contactForm">
              <div class="mb-4">
                <label for="contactName" class="block text-slate-300 font-semibold mb-2" data-tr="name">Adınız</label>
                <input type="text" class="w-full bg-slate-700 border border-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-400 transition" id="contactName" required>
              </div>
              <div class="mb-4">
                <label for="contactEmail" class="block text-slate-300 font-semibold mb-2" data-tr="email">E-posta</label>
                <input type="email" class="w-full bg-slate-700 border border-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-400 transition" id="contactEmail" required>
              </div>
              <div class="mb-4">
                <label for="contactSubject" class="block text-slate-300 font-semibold mb-2" data-tr="subject">Konu</label>
                <input type="text" class="w-full bg-slate-700 border border-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-400 transition" id="contactSubject" required>
              </div>
              <div class="mb-6">
                <label for="contactMessage" class="block text-slate-300 font-semibold mb-2" data-tr="message">Mesaj</label>
                <textarea class="w-full bg-slate-700 border border-slate-600 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-400 transition h-32" id="contactMessage" required></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition" data-tr="send">Gönder</button>
            </form>
          </div>

          <!-- Sağ Kolon: Alınan Mesajlar -->
          <div>
            <h3 class="text-2xl font-bold text-blue-400 mb-6">Alınan Mesajlar</h3>
            <div id="messageList" class="space-y-4 max-h-96 overflow-y-auto">
              <p class="text-slate-400 text-center py-8">Henüz mesaj yok</p>
            </div>
          </div>
        </div>

        <!-- Alt Kısım: İletişim Bilgileri -->
        <div class="border-t border-slate-700 pt-12">
          <h3 class="text-3xl font-bold text-blue-400 mb-8">İletişim Bilgileri</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- E-posta -->
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h4 class="text-lg font-bold text-blue-400 mb-3">
                <i class="bi bi-envelope me-2"></i>E-posta
              </h4>
              <p class="text-slate-300"><a href="mailto:suleymanarli0666@gmail.com" class="hover:text-blue-300 transition">suleymanarli0666@gmail.com</a></p>
            </div>

            <!-- Telefon -->
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h4 class="text-lg font-bold text-blue-400 mb-3">
                <i class="bi bi-telephone me-2"></i>Telefon
              </h4>
              <p class="text-slate-300"><a href="tel:+905444530125" class="hover:text-blue-300 transition">+90 544 453 0125</a></p>
            </div>

            <!-- Konum -->
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h4 class="text-lg font-bold text-blue-400 mb-3">
                <i class="bi bi-geo-alt me-2"></i>Konum
              </h4>
              <p class="text-slate-300">Bandırma, Balıkesir, Türkiye</p>
            </div>

            <!-- Sosyal Ağlar -->
            <div class="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-blue-400 transition">
              <h4 class="text-lg font-bold text-blue-400 mb-4" data-tr="social">Sosyal Ağlar</h4>
              <div class="flex gap-4">
                <a href="https://github.com/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://linkedin.com/in/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/SleymanEmreArl1" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="https://instagram.com/suleymanemrearlii" target="_blank" class="text-slate-400 hover:text-blue-300 transition text-2xl">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

// Çeviriler
const translations = {
    tr: {
        "nav-home": "Anasayfa",
        "nav-about": "Hakkımda",
        "nav-projects": "Projelerim",
        "nav-contact": "İletişim",
        "welcome": "Hoş Geldiniz",
        "home-subtitle": "Yazılım Mühendisi ve Web Developer",
        "quick-links": "Hızlı Bağlantılar",
        "contact-info": "İletişim Bilgileri",
        "location": "Balıkesir, Bandırma, Türkiye",
        "social": "Sosyal Ağlar",
        "rights": "Tüm Hakları Saklıdır",
        "about-title": "Kişisel Bilgiler",
        "about-description": "Merhaba! Ben Süleyman Emre Arlı, 21 yaşındayım ve Bandırma Onyedi Eylül Üniversitesinde Yazılım Mühendisliği öğrencisiyim.",
        "about-description2": "Modern teknolojiler ile projeler geliştirmeyi severim. Özellikle responsive tasarım, backend geliştirme ve veritabanı yönetimi konularında kendimi geliştirmekteyim.",
        "skills": "Yetenekler",
        "education": "Eğitim",
        "get-in-touch": "Benimle İletişime Geçin",
        "name": "Adınız",
        "email": "E-posta",
        "subject": "Konu",
        "message": "Mesaj",
        "send": "Gönder"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "welcome": "Welcome",
        "home-subtitle": "Software Engineer and Web Developer",
        "quick-links": "Quick Links",
        "contact-info": "Contact Information",
        "location": "Balikesir, Bandirma, Turkey",
        "social": "Social Networks",
        "rights": "All Rights Reserved",
        "about-title": "About Me",
        "about-description": "Hello! I'm Suleyman Emre Arli, 21 years old and a Software Engineering student at Bandirma Onyedi Eylul University.",
        "about-description2": "I love developing projects with modern technologies. Especially I'm improving myself in responsive design, backend development and database management.",
        "skills": "Skills",
        "education": "Education",
        "get-in-touch": "Get In Touch",
        "name": "Your Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "send": "Send"
    }
};

// ==========================================
// BAŞLAT - DOM YÜKLENDİĞİNDE ÇALIŞAN FONKSİYON
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Tema tercihini kontrol et ve ayarla
    initializeTheme();

    // Dil tercihini kontrol et ve ayarla
    initializeLanguage();

    // Sayfa yükleme sistemini başlat
    initializeRouter();

    // İletişim formu dinleyicisini ekle
    setupFormListeners();

    // Mobile menu öğesini ayarla
    setupMobileMenu();
});

// ==========================================
// TEMA YÖNETİMİ
// ==========================================

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeBtn = document.getElementById('themeToggle');

    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light-theme' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');

    body.classList.remove('light-theme');
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-fill');

    if (theme === 'light-theme') {
        body.classList.add('light-theme');
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    }
}

// ==========================================
// DİL YÖNETİMİ
// ==========================================

function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(savedLang);

    // Dil seçimi dinleyicilerini ekle
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    // Sayfadaki çevrilecek öğeleri güncelle
    document.querySelectorAll('[data-tr]').forEach(element => {
        const key = element.getAttribute('data-tr');
        if (translations[lang] && translations[lang][key]) {
            // Placeholder ise placeholder'ı güncelle
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Dil göstergesini güncelle
    const langDisplay = document.getElementById('langDisplay');
    if (langDisplay) {
        langDisplay.textContent = lang.toUpperCase();
    }

    // Aktif dil seçeneğini vurgula
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('active');
        }
    });

    // Dil tercihini kaydet
    localStorage.setItem('preferredLanguage', lang);
}

// ==========================================
// DİNAMİK SAYFA YÜKLEMESİ (SPA)
// ==========================================

function initializeRouter() {
    const container = document.getElementById('app-container');

    // Başlangıç sayfasını yükle
    loadPage('home');

    // Menü linklerine tıklama dinleyicisi ekle
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.getAttribute('data-page');
            loadPage(page);
        });
    });
}

function loadPage(pageName) {
    const container = document.getElementById('app-container');

    // Sayfanın var olup olmadığını kontrol et
    if (!pages[pageName]) {
        pageName = 'home';
    }

    // Fade out animasyonu
    container.style.opacity = '0';

    setTimeout(() => {
        container.innerHTML = pages[pageName];

        // Yeni sayfa yüklendiğinde çeviriler güncelle
        const currentLang = localStorage.getItem('preferredLanguage') || 'tr';
        changeLanguage(currentLang);

        // Sayfa içindeki butonlara dinleyici ekle
        container.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.getAttribute('data-page');
                loadPage(page);
            });
        });

        // Contact sayfasıysa mesaj listesini göster
        if (pageName === 'contact') {
            displayMessages();
        }

        // Fade in animasyonu
        container.style.opacity = '1';

        // Sayfanın üstüne scroll et
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// ==========================================
// FORM YÖNETİMİ
// ==========================================

function setupFormListeners() {
    // Dinamik olarak yüklenecek form için event delegation kullan
    document.addEventListener('submit', (e) => {
        if (e.target.id === 'contactForm') {
            handleContactForm(e);
        }
    });
}

function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Basit doğrulama
    if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    // Mesaj objesini oluştur
    const contactMessage = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString('tr-TR')
    };

    // LocalStorage'da messages arrayını al
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.unshift(contactMessage); // Yenileri başa ekle
    localStorage.setItem('messages', JSON.stringify(messages));

    // Başarı mesajı
    alert('Mesajınız başarıyla kaydedildi, teşekkür ederim!');

    // Formu temizle
    e.target.reset();

    // Mesaj listesini güncelle
    displayMessages();
}

function displayMessages() {
    const messageList = document.getElementById('messageList');
    if (!messageList) return;

    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    if (messages.length === 0) {
        messageList.innerHTML = '<p class="text-slate-400 text-center py-8">Henüz mesaj yok</p>';
        return;
    }

    messageList.innerHTML = messages.map(msg => `
        <div class="bg-slate-700 border border-slate-600 p-4 rounded hover:border-blue-400 transition">
            <div class="flex justify-between items-start mb-2">
                <h5 class="font-bold text-blue-400">${msg.name}</h5>
                <span class="text-xs text-slate-400">${msg.timestamp}</span>
            </div>
            <p class="text-xs text-slate-400 mb-1">Konu: <strong>${msg.subject}</strong></p>
            <p class="text-xs text-slate-400 mb-2">${msg.email}</p>
            <p class="text-slate-300">${msg.message}</p>
        </div>
    `).join('');
}


// ==========================================
// MOBİL MENU YÖNETİMİ
// ==========================================

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!mobileMenuBtn || !mobileMenu) return;

    // Mobile menü butonuna tıklama dinleyicisi ekle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Menü linklerine tıklandığında menüyü kapat
    mobileMenu.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ==========================================
// DİNAMİK OPSİYONEL FONKSİYONLAR
// ==========================================

// URL hash'ini izle ve sayfa değiş
window.addEventListener('hashchange', () => {
    const hash = location.hash.slice(1) || 'home';
    if (pages[hash]) {
        loadPage(hash);
    }
});

// Başlangıç için hash kontrolü
window.addEventListener('load', () => {
    const hash = location.hash.slice(1) || 'home';
    if (pages[hash] && hash !== 'home') {
        loadPage(hash);
    }
});
