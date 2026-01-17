const Skills = () => {
  const education = [
    {
      institution: "Djuanda University",
      degree: "Bachelor's Degree - Computer Science",
      period: "2022 - Now",
      isCurrent: true,
    },
    {
      institution: "SMK Amaliah 1 Ciawi",
      degree: "Vocational High School - Computer & Engineering",
      period: "2018 - 2022",
      isCurrent: false,
    },
    {
      institution: "SMPN 1 Caringin",
      degree: "Middle School",
      period: "2015 - 2018",
      isCurrent: false,
    },
  ];

  const skillListLeft = ["HTML / CSS", "PHP", "Laravel", "JavaScript"];
  const skillListRight = ["Python", "Machine Learning", "SQL", "Video Editing"];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800/50 py-24 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-widest text-sm">
            Learning Path
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Skills & Education
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Sisi Kiri: Timeline Pendidikan */}
          <div className="space-y-0">
            {education.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-blue-600 shrink-0 shadow-[0_0_0_4px_rgba(37,99,235,0.2)] ${item.isCurrent ? 'animate-pulse' : ''}`}></div>
                  {/* Garis vertikal: jangan tampilkan di item terakhir */}
                  <div className={`w-0.5 h-full ${index === education.length - 1 ? 'bg-transparent' : 'bg-blue-200 dark:bg-gray-700'}`}></div>
                </div>
                <div className="pb-12">
                  <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {item.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">{item.degree}</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 text-sm bg-blue-50 dark:bg-blue-900/20 inline-block px-3 py-1 rounded-full">
                    {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sisi Kanan: Card Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              Over the past five years, I have learned and developed a wide range of skills, starting with
              both front-end and back-end development. This journey has equipped me with valuable expertise in
              various technologies.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {/* Kolom Skill 1 */}
              <ul className="space-y-5">
                {skillListLeft.map((skill, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
              {/* Kolom Skill 2 */}
              <ul className="space-y-5">
                {skillListRight.map((skill, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;