"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Code2, Users, Trophy, Target, Rocket, Brain, Heart, Megaphone, Palette } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "10,000+" },
    { icon: Code2, label: "Projects Completed", value: "25,000+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
    { icon: BookOpen, label: "Course Hours", value: "1,000+" },
  ]

  const team = {
    tech: [
      {
        name: "Aman Jaiswal",
        role: "Lead Computer Science Mentor",
        bio: "Ph.D. in Computer Science with 15+ years of industry experience at top tech companies.",
        specialties: ["Algorithms", "System Design", "Machine Learning"],
        image: "/team/team-1.avif",
      },
      {
        name: "Punit Kumar",
        role: "Senior Programming Instructor",
        bio: "Former Google engineer specializing in algorithms and system design.",
        specialties: ["Data Structures", "C++", "Python"],
        image: "/team/punit-kumar.jpg",
      },
      {
        name: "Ankit Raj",
        role: "Software Development Mentor",
        bio: "Full-stack developer with experience in scalable web applications.",
        specialties: ["JavaScript", "React", "Node.js"],
        image: "/team/ankit-raj.jpg",
      },
      {
        name: "Shubhendra Khuswah",
        role: "AI & ML Instructor",
        bio: "Machine learning engineer with expertise in deep learning models.",
        specialties: ["Deep Learning", "NLP", "TensorFlow"],
        image: "/team/shubhendra-khuswah.jpg",
      },
      {
        name: "Ayush Sharma",
        role: "Cloud Computing Expert",
        bio: "Certified AWS and Azure architect with experience in DevOps and security.",
        specialties: ["AWS", "Kubernetes", "DevOps"],
        image: "/team/ayush-sharma.jpg",
      },
      {
        name: "Biswajit Nayak",
        role: "Cybersecurity Specialist",
        bio: "Ethical hacker and security consultant with experience in penetration testing.",
        specialties: ["Network Security", "Ethical Hacking", "Cyber Threat Analysis"],
        image: "/team/biswajit-nayak.jpg",
      },
    ],
    marketing: [
      {
        name: "Bana Bihari Kar",
        role: "Digital Marketing Specialist",
        bio: "Expert in SEO and content marketing with a focus on tech education.",
        specialties: ["SEO", "Content Strategy", "Social Media"],
        image: "/team/bana-bihari-kar.jpg",
      },
      {
        name: "Sibabrata Choudhury",
        role: "Brand Manager",
        bio: "Creative professional with experience in tech startup branding.",
        specialties: ["Brand Strategy", "Visual Design", "Market Research"],
        image: "/team/sibabrata-choudhury.jpg",
      },
      {
        name: "Bikas Kumar",
        role: "Growth Marketing Lead",
        bio: "Performance marketing specialist with expertise in user acquisition.",
        specialties: ["Google Ads", "Social Media Advertising", "Data Analytics"],
        image: "/team/bikas-kumar.jpg",
      },
    ],
    softSkills: [
      {
        name: "Sushant Mahapatra",
        role: "Curriculum Director",
        bio: "EdTech specialist with a focus on creating engaging learning experiences.",
        specialties: ["Course Design", "Learning Science", "Assessment"],
        image: "/team/sushant-mahapatra.jpg",
      },
      {
        name: "Sulgana Dash",
        role: "Career Coach",
        bio: "Experienced career counselor specializing in tech industry transitions.",
        specialties: ["Interview Prep", "Resume Building", "Networking"],
        image: "/team/sulgana-dash.jpg",
      },
      {
        name: "Pragati Jaipuriar",
        role: "Soft Skills Trainer",
        bio: "Expert in communication skills, leadership training, and workplace etiquette.",
        specialties: ["Public Speaking", "Leadership Training", "Emotional Intelligence"],
        image: "/team/pragati-jaipuriar.jpg",
      },
    ],
  };
  

  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description:
        "We maintain the highest standards in programming education through continuous improvement and innovation.",
    },
    {
      icon: Brain,
      title: "Personalized Learning",
      description:
        "Every student receives individualized attention and guidance tailored to their learning style and goals.",
    },
    {
      icon: Rocket,
      title: "Practical Application",
      description: "We emphasize hands-on experience through real-world projects and industry-relevant assignments.",
    },
    {
      icon: Heart,
      title: "Community Support",
      description:
        "Our vibrant community of learners and mentors provides continuous support and networking opportunities.",
    },
  ]

  return (
    <div className="bg-[#070823]" ref={containerRef}>
      {/* Hero Section with Parallax - Dark */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#84BC54]/20 to-transparent" />
          <div className="absolute inset-0 bg-[#070823]/80" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl text-white font-bold mb-6">
              Transforming Lives Through <span className="text-[#84BC54]">Quality Education</span>
            </h1>
            <p className="text-xl text-[#7C7D87]">
              We're dedicated to providing world-class computer science education that empowers individuals to achieve
              their dreams in tech.
            </p>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#84BC54] rounded-full flex justify-center">
            <div className="w-2 h-2 bg-[#84BC54] rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Counter Animation - Light */}
      <section className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl text-center border border-[#84BC54]/20 shadow-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#84BC54]" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                  className="text-3xl font-bold text-[#070823] mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#7C7D87]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Cards - Dark */}
      <section className="py-20 bg-[#070823]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1f4d] p-6 rounded-xl border border-[#84BC54]/20 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#84BC54]/20 p-3 rounded-lg group-hover:bg-[#84BC54]/30 transition-colors">
                    <value.icon className="w-6 h-6 text-[#84BC54]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#84BC54] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-[#7C7D87]">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Interactive Cards - Light */}
      <section className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-[#070823] mb-12"
          >
            Meet Our Expert Team
          </motion.h2>

          {/* Tech Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#070823] mb-8 flex items-center">
              <Code2 className="w-6 h-6 mr-2 text-[#84BC54]" />
              Tech Experts
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {team.tech.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Marketing Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#070823] mb-8 flex items-center">
              <Megaphone className="w-6 h-6 mr-2 text-[#84BC54]" />
              Marketing Specialists
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {team.marketing.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Soft Skills Team */}
          <div>
            <h3 className="text-2xl font-bold text-[#070823] mb-8 flex items-center">
              <Palette className="w-6 h-6 mr-2 text-[#84BC54]" />
              Soft Skills Mentors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {team.softSkills.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-[#070823]">{member.name}</h3>
          <p className="text-[#84BC54]">{member.role}</p>
        </div>
      </div>
      <p className="text-[#7C7D87] mb-4">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.specialties.map((specialty, i) => (
          <span key={i} className="px-3 py-1 bg-[#84BC54]/20 text-[#84BC54] text-sm rounded-full">
            {specialty}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

