"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Code2, Users, Trophy, Target, Rocket, Brain, Heart } from "lucide-react"
import { useRef } from "react"

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

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Computer Science Mentor",
      bio: "Ph.D. in Computer Science with 15+ years of industry experience at top tech companies.",
      specialties: ["Algorithms", "System Design", "Machine Learning"],
    },
    {
      name: "Mark Rodriguez",
      role: "Senior Programming Instructor",
      bio: "Former Google engineer specializing in algorithms and system design.",
      specialties: ["Data Structures", "C++", "Python"],
    },
    {
      name: "Emily Watson",
      role: "Curriculum Director",
      bio: "EdTech specialist with a focus on creating engaging learning experiences.",
      specialties: ["Course Design", "Learning Science", "Assessment"],
    },
  ]

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
      {/* Hero Section with Parallax */}
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

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-gradient-to-b from-[#070823] to-[#0f1235]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1f4d] p-6 rounded-xl text-center border border-[#84BC54]/20 backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#84BC54]" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-[#7C7D87]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-[#0f1235] to-[#070823]">
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

      {/* Team Section with Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-[#070823] to-[#0f1235]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Meet Our Expert Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1f4d] p-6 rounded-xl border border-[#84BC54]/20"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#84BC54]/20 rounded-full" />
                  <div className="absolute inset-2 bg-[#84BC54]/30 rounded-full" />
                  <div className="absolute inset-4 bg-[#84BC54]/40 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-[#84BC54] mb-4 text-center">{member.role}</p>
                <p className="text-[#7C7D87] text-center mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="px-3 py-1 bg-[#84BC54]/20 text-[#84BC54] text-sm rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}