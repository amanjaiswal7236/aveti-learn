"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, BookOpen, Users, Trophy, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function Courses() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const courses = [
    {
      icon: Code2,
      title: "Tech Skills Bootcamp",
      description: "Master the latest tech skills with hands-on projects and real-world applications.",
      duration: "12 weeks",
      level: "Advanced",
      topics: ["Full-Stack Development", "Data Science & AI", "Cloud Computing", "Cybersecurity"],
      progress: 88,
      students: 2500,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop",
    },
    {
      icon: Briefcase,
      title: "Business Development Program",
      description: "Learn essential business strategies and sales techniques to drive growth.",
      duration: "10 weeks",
      level: "Intermediate",
      topics: ["Sales & Negotiation", "Digital Marketing & Branding", "Financial Literacy", "Growth Hacking"],
      progress: 90,
      students: 1800,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Teacher Grooming & Leadership",
      description: "Develop essential teaching methodologies and leadership skills for effective education.",
      duration: "8 weeks",
      level: "Beginner",
      topics: ["Classroom Management", "Student Engagement Techniques", "EdTech Integration", "Leadership in Education"],
      progress: 85,
      students: 1200,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2872&auto=format&fit=crop",
    },
  ];
  

  const stats = [
    { icon: BookOpen, value: "50+", label: "Courses" },
    { icon: Users, value: "10,000+", label: "Active Students" },
    { icon: Trophy, value: "95%", label: "Completion Rate" },
  ]

  return (
    <div className="bg-[#070823]" ref={containerRef}>
      {/* Hero Section with Parallax - Dark Theme */}
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
              Explore Our <span className="text-[#84BC54]">Course Catalog</span>
            </h1>
            <p className="text-xl text-[#7C7D87]">
              Comprehensive courses designed to take you from beginner to professional. Learn at your own pace with
              personalized mentorship.
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

      {/* Stats Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-[#070823] to-[#0f1235]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1f4d] p-8 rounded-xl text-center border border-[#84BC54]/20"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#84BC54]" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#7C7D87]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid - Light Theme */}
      <section className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">{course.duration}</span>
                      <span className="px-2 py-1 bg-[#84BC54] text-white text-sm rounded-full">{course.level}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[#070823] mb-4">{course.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#070823]">Course Rating</span>
                      <span className="text-[#84BC54]">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#84BC54]/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#84BC54]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#070823]">Key Topics:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-[#7C7D87]">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-[#7C7D87]">
                      <Users className="w-4 h-4 inline-block mr-1" />
                      {course.students} students
                    </span>
                  </div> */}

                  <Link
                    href={`/courses/${index}`}
                    className="inline-block w-full text-center bg-[#84BC54] text-white py-2 rounded-full hover:bg-[#84BC54]/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course - Light Theme */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=2940&auto=format&fit=crop"
                alt="Featured Course"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#070823]">Advanced System Architecture</h2>
              <p className="text-[#7C7D87]">
                Master the art of designing and implementing scalable systems. Learn from industry experts and work on
                real-world projects that will prepare you for senior engineering roles.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#070823]">20+</h3>
                  <p className="text-[#7C7D87]">Hands-on Projects</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#070823]">16</h3>
                  <p className="text-[#7C7D87]">Weeks Duration</p>
                </div>
              </div>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#84BC54] text-white px-6 py-2 rounded-full"
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#070823] text-white px-6 py-2 rounded-full"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Path - Light Theme */}
      <section className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#070823]">Your Learning Journey</h2>
            <p className="text-[#7C7D87]">A structured path to success in programming</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                alt="Learning Path"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {[
                {
                  step: "1",
                  title: "Foundation",
                  description: "Start with C programming fundamentals and basic algorithms",
                },
                {
                  step: "2",
                  title: "Core Concepts",
                  description: "Master data structures and advanced programming techniques",
                },
                {
                  step: "3",
                  title: "Specialization",
                  description: "Choose your path: system design, web development, or advanced algorithms",
                },
                {
                  step: "4",
                  title: "Real-world Projects",
                  description: "Apply your knowledge through comprehensive projects",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="bg-[#84BC54] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#070823] mb-2">{phase.title}</h3>
                    <p className="text-[#7C7D87]">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}