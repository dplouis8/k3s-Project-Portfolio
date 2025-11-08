import { Github, Linkedin, Mail, Phone, ArrowRight, FileDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-0 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
              DANIEL PIERRE-LOUIS | Ansible-Automated Kubernetes (k3s) Deployment
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Provisioning a secure, multi-node cluster from bare-metal to application deployment, fully automated.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="aspect-video w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1134780154?badge=0&autopause=0&player_id=0&app_id=58479"
              title="K3S DEPLOYMENT VIDEO"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* Primary Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <a
              href="https://vimeo.com/1134780154?fl=pl&fe=sh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>View Complete Demo</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="https://github.com/dplouis8/Ansible-Automated-Kubernetes-Deployment-k3s-"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Github size={20} />
              <span>View Source Code</span>
            </a>
            <a
              href="https://raw.githubusercontent.com/dplouis8/Ansible-Automated-Kubernetes-Deployment-k3s-/1cf3728a4b95d36cce6db7a0634285a5c13b43d0/DanielPierre-Louis_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <FileDown size={20} />
              <span>Download Professional Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Breakdown Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Project Overview */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Project Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build a repeatable, fully automated Infrastructure-as-Code solution for a container orchestration platform.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Key Skills Demonstrated
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  'Ansible',
                  'Kubernetes (k3s)',
                  'Infrastructure-as-Code',
                  'Python',
                  'Docker',
                  'Multi-Node Deployment',
                  'HA Configuration',
                  'Linux Administration'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white rounded-lg px-4 py-3 text-center border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all"
                  >
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4-Step Automation Flow */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The 4-Step Automation Flow
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'IaC Kickoff: Provision Control Node & Deploy Ansible',
                  description: 'The main script handles all dependencies and sets up the Ansible control node environment.'
                },
                {
                  step: '02',
                  title: 'Ansible Execution: Install k3s Cluster Software',
                  description: 'Ansible roles are executed to securely install k3s on all nodes and configure the cluster.'
                },
                {
                  step: '03',
                  title: 'Cluster Status Verification: All Nodes READY',
                  description: 'Proof of a healthy, multi-node cluster configured for production workloads.'
                },
                {
                  step: '04',
                  title: 'Ansible Deploys HA Application via kubectl',
                  description: 'The final automation step deploys the HA Nginx service, verified via the NodePort.'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="w-1 h-24 bg-blue-200 mt-4"></div>
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Next Steps Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold">
            Ready to Automate Your Infrastructure
          </h2>

          {/* LinkedIn CTA */}
          <a
            href="https://www.linkedin.com/in/danielpierre-louis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>

          {/* Contact Footer */}
          <div className="pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-lg">
              <span className="font-semibold">Daniel Pierre-Louis</span>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                <a href="mailto:dplouis8@gmail.com">dplouis8@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                <a href="tel:+14048388273">(404) 838-8273</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
