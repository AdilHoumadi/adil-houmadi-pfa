import {
  Code,
  Terminal,
  Zap,
  Activity,
  Server,
  Boxes,
  Layers,
  FileJson,
  Settings,
  Database,
  HardDrive,
  Cloud,
  Container,
  Network,
  Package,
  GitBranch,
  Cpu,
  Globe,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ExpertiseSectionProps {
  visibleSections: Set<string>;
}

interface ColorScheme {
  icon: string;
  iconBg: string;
  iconBgHover: string;
  border: string;
  borderHover: string;
  shadow: string;
  gradient: string;
  gradientHover: string;
  text: string;
  tagBorder: string;
  tagText: string;
  divider: string;
}

const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    icon: 'text-blue-400',
    iconBg: 'bg-blue-600/10',
    iconBgHover: 'group-hover:bg-blue-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-blue-600/50',
    shadow: 'hover:shadow-blue-600/20',
    gradient: 'from-blue-600/0 to-blue-600/0',
    gradientHover: 'group-hover:from-blue-600/5',
    text: 'text-blue-400',
    tagBorder: 'group-hover:border-blue-600/30',
    tagText: 'group-hover:text-blue-400',
    divider: 'via-blue-600/50',
  },
  green: {
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-600/10',
    iconBgHover: 'group-hover:bg-emerald-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-emerald-600/50',
    shadow: 'hover:shadow-emerald-600/20',
    gradient: 'from-emerald-600/0 to-emerald-600/0',
    gradientHover: 'group-hover:from-emerald-600/5',
    text: 'text-emerald-400',
    tagBorder: 'group-hover:border-emerald-600/30',
    tagText: 'group-hover:text-emerald-400',
    divider: 'via-emerald-600/50',
  },
  orange: {
    icon: 'text-orange-400',
    iconBg: 'bg-orange-600/10',
    iconBgHover: 'group-hover:bg-orange-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-orange-600/50',
    shadow: 'hover:shadow-orange-600/20',
    gradient: 'from-orange-600/0 to-orange-600/0',
    gradientHover: 'group-hover:from-orange-600/5',
    text: 'text-orange-400',
    tagBorder: 'group-hover:border-orange-600/30',
    tagText: 'group-hover:text-orange-400',
    divider: 'via-orange-600/50',
  },
  cyan: {
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-600/10',
    iconBgHover: 'group-hover:bg-cyan-600/20',
    border: 'border-gray-800',
    borderHover: 'hover:border-cyan-600/50',
    shadow: 'hover:shadow-cyan-600/20',
    gradient: 'from-cyan-600/0 to-cyan-600/0',
    gradientHover: 'group-hover:from-cyan-600/5',
    text: 'text-cyan-400',
    tagBorder: 'group-hover:border-cyan-600/30',
    tagText: 'group-hover:text-cyan-400',
    divider: 'via-cyan-600/50',
  },
};

export function ExpertiseSection({ visibleSections }: ExpertiseSectionProps) {
  const { t } = useTranslation();

  const programmingSkills = [
    {
      name: 'Java',
      icon: <Code className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.java.desc'),
      tags: ['Spring Boot', 'Microservices', 'JVM'],
    },
    {
      name: 'Golang',
      icon: <Zap className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.golang.desc'),
      tags: ['Concurrency', 'CLI', 'Performance'],
    },
    {
      name: 'Python',
      icon: <Terminal className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.python.desc'),
      tags: ['Automation', 'Data', 'Scripting'],
    },
    {
      name: 'Node.js',
      icon: <Activity className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.nodejs.desc'),
      tags: ['Real-time', 'Events', 'APIs'],
    },
    {
      name: 'Unix/Linux & Bash',
      icon: <Terminal className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.linux.desc'),
      tags: ['DevOps', 'Automation', 'Systems'],
    },
    {
      name: 'C & Perl',
      icon: <Code className="w-7 h-7" />,
      level: 'Proficient',
      description: t('expertise.skills.c.desc'),
      tags: ['Systems', 'Legacy', 'Performance'],
    },
  ];

  const backendSkills = [
    {
      name: 'Spring Boot',
      icon: <Server className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.spring.desc'),
      tags: ['REST', 'Security', 'JPA'],
    },
    {
      name: 'Microservices',
      icon: <Boxes className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.microservices.desc'),
      tags: ['Architecture', 'Distributed', 'APIs'],
    },
    {
      name: 'ReactJS & Redux',
      icon: <Layers className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.react.desc'),
      tags: ['Components', 'State', 'Hooks'],
    },
    {
      name: 'JavaScript (ES6+)',
      icon: <FileJson className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.javascript.desc'),
      tags: ['ES6+', 'Async', 'Functional'],
    },
    {
      name: 'HTML/CSS',
      icon: <Code className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.html.desc'),
      tags: ['Responsive', 'A11y', 'Modern'],
    },
    {
      name: 'Cypress',
      icon: <Settings className="w-7 h-7" />,
      level: 'Proficient',
      description: t('expertise.skills.cypress.desc'),
      tags: ['Testing', 'Automation', 'CI/CD'],
    },
  ];

  const dataSkills = [
    {
      name: 'Apache Kafka',
      icon: <Activity className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.kafka.desc'),
      tags: ['Streaming', 'Events', 'Real-time'],
    },
    {
      name: 'PostgreSQL',
      icon: <Database className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.postgres.desc'),
      tags: ['SQL', 'ACID', 'Performance'],
    },
    {
      name: 'MySQL',
      icon: <Database className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.mysql.desc'),
      tags: ['Relational', 'HA', 'Indexing'],
    },
    {
      name: 'MongoDB',
      icon: <FileJson className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.mongodb.desc'),
      tags: ['NoSQL', 'Documents', 'Sharding'],
    },
    {
      name: 'Redis',
      icon: <Zap className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.redis.desc'),
      tags: ['Cache', 'Pub/Sub', 'In-Memory'],
    },
    {
      name: 'Elasticsearch',
      icon: <Activity className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.elastic.desc'),
      tags: ['Search', 'Analytics', 'Logs'],
    },
    {
      name: 'RocksDB',
      icon: <HardDrive className="w-7 h-7" />,
      level: 'Proficient',
      description: t('expertise.skills.rocksdb.desc'),
      tags: ['KV Store', 'Embedded', 'LSM'],
    },
    {
      name: 'Cassandra',
      icon: <Database className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.cassandra.desc'),
      tags: ['NoSQL', 'Distributed', 'Scale'],
    },
    {
      name: 'Oracle & SQL Server',
      icon: <Database className="w-7 h-7" />,
      level: 'Proficient',
      description: t('expertise.skills.oracle.desc'),
      tags: ['Enterprise', 'Legacy', 'Transactions'],
    },
  ];

  const cloudSkills = [
    {
      name: 'Kubernetes',
      icon: <Boxes className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.k8s.desc'),
      tags: ['Orchestration', 'K8s', 'Cloud-Native'],
    },
    {
      name: 'Docker',
      icon: <Container className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.docker.desc'),
      tags: ['Containers', 'Images', 'DevOps'],
    },
    {
      name: 'Terraform & Terragrunt',
      icon: <Code className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.terraform.desc'),
      tags: ['IaC', 'Automation', 'Provisioning'],
    },
    {
      name: 'AWS Compute',
      icon: <Server className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.aws_compute.desc'),
      tags: ['EC2', 'ECS', 'EKS'],
    },
    {
      name: 'AWS Storage',
      icon: <HardDrive className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.aws_storage.desc'),
      tags: ['S3', 'RDS', 'Backup'],
    },
    {
      name: 'AWS Networking',
      icon: <Network className="w-7 h-7" />,
      level: 'Expert',
      description: t('expertise.skills.aws_network.desc'),
      tags: ['VPC', 'ALB', 'CloudFront'],
    },
    {
      name: 'AWS MSK & SQS',
      icon: <Activity className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.aws_msk.desc'),
      tags: ['MSK', 'SQS', 'Messaging'],
    },
    {
      name: 'Helm',
      icon: <Package className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.helm.desc'),
      tags: ['K8s', 'Packaging', 'Charts'],
    },
    {
      name: 'ArgoCD & Tekton',
      icon: <GitBranch className="w-7 h-7" />,
      level: 'Advanced',
      description: t('expertise.skills.gitops.desc'),
      tags: ['GitOps', 'CD', 'Pipelines'],
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-gray-900/50 relative overflow-hidden" data-section="expertise">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div
            className={`inline-block px-4 py-2 bg-teal-600/10 border border-teal-600/30 rounded-full mb-6 transition-all duration-700 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="text-teal-400 font-semibold text-sm">{t('expertise.badge')}</span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
              {t('expertise.title')}
            </span>
          </h2>
          <p
            className={`text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {t('expertise.description')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Programming Languages */}
          <div
            className={`transition-all duration-700 delay-300 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${colorSchemes.blue.divider} to-transparent`} />
              <div className="flex items-center px-6">
                <div className={`p-3 bg-gradient-to-br from-blue-600/20 to-blue-600/5 rounded-2xl border border-blue-600/30 shadow-lg shadow-blue-600/10`}>
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('expertise.categories.languages')}
                </h3>
              </div>
              <div className={`flex-1 h-px bg-gradient-to-r from-blue-600/50 via-transparent to-transparent`} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl ${colorSchemes.blue.border} ${colorSchemes.blue.borderHover} transition-all duration-300 hover:shadow-2xl ${colorSchemes.blue.shadow} overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes.blue.gradient} ${colorSchemes.blue.gradientHover} group-hover:to-transparent transition-all duration-300`} />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 ${colorSchemes.blue.iconBg} rounded-xl ${colorSchemes.blue.icon} ${colorSchemes.blue.iconBgHover} group-hover:scale-110 transition-all duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                          <span className={`text-xs font-semibold ${colorSchemes.blue.text}`}>{skill.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs text-gray-400 ${colorSchemes.blue.tagBorder} ${colorSchemes.blue.tagText} transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Web Technologies */}
          <div
            className={`transition-all duration-700 delay-400 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${colorSchemes.green.divider} to-transparent`} />
              <div className="flex items-center px-6">
                <div className={`p-3 bg-gradient-to-br from-emerald-600/20 to-emerald-600/5 rounded-2xl border border-emerald-600/30 shadow-lg shadow-emerald-600/10`}>
                  <Globe className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('expertise.categories.backend')}
                </h3>
              </div>
              <div className={`flex-1 h-px bg-gradient-to-r from-emerald-600/50 via-transparent to-transparent`} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl ${colorSchemes.green.border} ${colorSchemes.green.borderHover} transition-all duration-300 hover:shadow-2xl ${colorSchemes.green.shadow} overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes.green.gradient} ${colorSchemes.green.gradientHover} group-hover:to-transparent transition-all duration-300`} />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 ${colorSchemes.green.iconBg} rounded-xl ${colorSchemes.green.icon} ${colorSchemes.green.iconBgHover} group-hover:scale-110 transition-all duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                          <span className={`text-xs font-semibold ${colorSchemes.green.text}`}>{skill.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs text-gray-400 ${colorSchemes.green.tagBorder} ${colorSchemes.green.tagText} transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Storage & Streaming */}
          <div
            className={`transition-all duration-700 delay-500 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${colorSchemes.orange.divider} to-transparent`} />
              <div className="flex items-center px-6">
                <div className={`p-3 bg-gradient-to-br from-orange-600/20 to-orange-600/5 rounded-2xl border border-orange-600/30 shadow-lg shadow-orange-600/10`}>
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('expertise.categories.data')}
                </h3>
              </div>
              <div className={`flex-1 h-px bg-gradient-to-r from-orange-600/50 via-transparent to-transparent`} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl ${colorSchemes.orange.border} ${colorSchemes.orange.borderHover} transition-all duration-300 hover:shadow-2xl ${colorSchemes.orange.shadow} overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes.orange.gradient} ${colorSchemes.orange.gradientHover} group-hover:to-transparent transition-all duration-300`} />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 ${colorSchemes.orange.iconBg} rounded-xl ${colorSchemes.orange.icon} ${colorSchemes.orange.iconBgHover} group-hover:scale-110 transition-all duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                          <span className={`text-xs font-semibold ${colorSchemes.orange.text}`}>{skill.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs text-gray-400 ${colorSchemes.orange.tagBorder} ${colorSchemes.orange.tagText} transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div
            className={`transition-all duration-700 delay-600 ${visibleSections.has('expertise') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${colorSchemes.cyan.divider} to-transparent`} />
              <div className="flex items-center px-6">
                <div className={`p-3 bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 rounded-2xl border border-cyan-600/30 shadow-lg shadow-cyan-600/10`}>
                  <Cloud className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {t('expertise.categories.cloud')}
                </h3>
              </div>
              <div className={`flex-1 h-px bg-gradient-to-r from-cyan-600/50 via-transparent to-transparent`} />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl ${colorSchemes.cyan.border} ${colorSchemes.cyan.borderHover} transition-all duration-300 hover:shadow-2xl ${colorSchemes.cyan.shadow} overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes.cyan.gradient} ${colorSchemes.cyan.gradientHover} group-hover:to-transparent transition-all duration-300`} />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`p-3 ${colorSchemes.cyan.iconBg} rounded-xl ${colorSchemes.cyan.icon} ${colorSchemes.cyan.iconBgHover} group-hover:scale-110 transition-all duration-300`}>
                          {skill.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-bold text-white mb-1">{skill.name}</h4>
                          <span className={`text-xs font-semibold ${colorSchemes.cyan.text}`}>{skill.level}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-1 bg-gray-800/50 border border-gray-700 rounded-md text-xs text-gray-400 ${colorSchemes.cyan.tagBorder} ${colorSchemes.cyan.tagText} transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
