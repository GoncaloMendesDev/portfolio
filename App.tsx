import React, { useState, useEffect } from 'react';
import { Code2, Github, Linkedin, Mail, MenuIcon, Moon, Sun, Terminal, X, Rocket, Star, Award, Download } from 'lucide-react';

const PROJECTS = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js. Features real-time data processing and interactive visualizations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "An innovative mobile-first design system with advanced animations and state management.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "Tailwind", "React"],
    github: "https://github.com/yourusername/project2"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'cv'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV PDF file URL
    const cvUrl = '/your-cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'yourCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">DevSpace</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`nav-link hover:text-purple-500 transition-colors duration-300 ${activeSection === 'home' ? 'text-purple-500' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`nav-link hover:text-purple-500 transition-colors duration-300 ${activeSection === 'about' ? 'text-purple-500' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`nav-link hover:text-purple-500 transition-colors duration-300 ${activeSection === 'projects' ? 'text-purple-500' : ''}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('cv')}
                className={`nav-link hover:text-purple-500 transition-colors duration-300 ${activeSection === 'cv' ? 'text-purple-500' : ''}`}
              >
                CV
              </button>
              <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('cv')}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`
              }}
            ></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Terminal className="h-20 w-20 mx-auto mb-8 text-purple-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I'm <span className="text-purple-500">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Full Stack Developer | Space Enthusiast | Code Explorer
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                Welcome to my corner of the digital universe! I'm a passionate developer with a love for creating elegant solutions to complex problems. My journey in tech began [your story here], and since then, I've been on an exciting mission to push the boundaries of what's possible with code.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Code2 className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                  <p>Writing maintainable, efficient, and elegant code is my passion.</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Star className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p>Always exploring new technologies and pushing boundaries.</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Award className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p>Committed to delivering high-quality, production-ready solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-purple-500">
                    <Github className="h-5 w-5 mr-2" />
                    <span>View on GitHub</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Curriculum Vitae</h2>
          <div className="bg-gray-700 rounded-lg p-8 shadow-xl">
            <div className="flex justify-center mb-8">
              <button
                onClick={handleDownloadCV}
                className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </button>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-500">Experience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold">Senior Developer</h4>
                  <p className="text-gray-400">Company Name • 2020 - Present</p>
                  <p className="mt-2">Led development of multiple full-stack applications, mentored junior developers, and implemented best practices.</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-xl font-semibold">Full Stack Developer</h4>
                  <p className="text-gray-400">Previous Company • 2018 - 2020</p>
                  <p className="mt-2">Developed and maintained various web applications using modern technologies.</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-500">Education</h3>
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold">BSc in Computer Science</h4>
                <p className="text-gray-400">University Name • 2014 - 2018</p>
                <p className="mt-2">Focus on software engineering and web technologies.</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-500">Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="text-gray-300">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="text-gray-300">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <ul className="text-gray-300">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}

export default App;