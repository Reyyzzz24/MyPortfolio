const Services = () => {
  return (
     <section id="services" className="bg-gray-50 dark:bg-gray-800/50 py-24 transition-colors">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
                <h3 className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Services</h3>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">Specialized In</h1>
                <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div
                    className="bg-white dark:bg-gray-800 p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105">
                    <div
                        className="w-20 h-20 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Web Development</h4>
                    <p className="text-gray-600 dark:text-gray-400">Creating responsive and user-friendly websites with
                        modern technologies.</p>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105">
                    <div
                        className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M24 5c-3.923 3.265-5.623 4.716-7.15 4.716-2.44 0-3.681-3.675-4.85-7.716-1.165 4.028-2.41 7.715-4.853 7.715-1.513 0-3.168-1.404-7.147-4.715 3.321 7.018 3 14.292 3 17h18c0-1.718-.478-9.65 3-17z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Machine Learning</h4>
                    <p className="text-gray-600 dark:text-gray-400">Developing intelligent algorithms and data-driven
                        solutions.</p>
                </div>
                <div
                    className="bg-white dark:bg-gray-800 p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:scale-105">
                    <div
                        className="w-20 h-20 bg-purple-50 dark:bg-purple-900/30 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                            <path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Video Editing</h4>
                    <p className="text-gray-600 dark:text-gray-400">Crafting compelling visual stories through creative
                        techniques.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;