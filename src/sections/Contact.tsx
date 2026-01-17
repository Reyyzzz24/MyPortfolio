const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Let's work together
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Kolom Kiri: Form (Order-2 di Mobile, Order-1 di Desktop) */}
          <div className="contact-left order-2 lg:order-1">
            <form action="https://formspree.io/f/xrbgknkv" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    name="name" 
                    required
                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-700 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    name="email" 
                    required
                    className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-700 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows={6} 
                  placeholder="How can I help you?" 
                  required
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-700 focus:ring-4 focus:ring-blue-600/10 outline-none transition-all duration-300 resize-none text-gray-900 dark:text-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-blue-600/20"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Info Kontak (Order-1 di Mobile, Order-2 di Desktop) */}
          <div className="contact-right space-y-12 order-1 lg:order-2">

            {/* Address */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Address</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  Caringin, Bogor Regency, <br /> West Java 16730
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M5 3.461c0 .978.001 16.224 0 17.213-.002 2.214 3.508 3.326 7.014 3.326 3.495 0 6.986-1.105 6.986-3.326v-17.213c0-2.348-3.371-3.461-6.805-3.461-3.563 0-7.195 1.199-7.195 3.461zm7-1.461c.276 0 .5.223.5.5 0 .276-.224.5-.5.5s-.5-.224-.5-.5c0-.277.224-.5.5-.5zm0 20c-.552 0-1-.448-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .552-.448 1-1 1zm5-3h-10v-15h10v15z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Phone</h4>
                <a href="tel:+6285885978036" className="text-gray-600 dark:text-gray-400 mt-2 block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +62 858-8597-8036
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Email</h4>
                <a href="mailto:revayuliansatria@gmail.com" className="text-gray-600 dark:text-gray-400 mt-2 block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  revayuliansatria@gmail.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;