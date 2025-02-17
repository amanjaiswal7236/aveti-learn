"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  GitBranch,
  BookOpen,
  Users,
  Trophy,
  Target,
  Rocket,
  Brain,
  Heart,
  Briefcase,
  Megaphone,
  Palette,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
//import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  role: z.string({
    required_error: "Please select your role",
  }),
  experience: z.string({
    required_error: "Please select your experience level",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission
  }

  const features = [
    {
      title: "Transform Your Skills with Personalized Mentorship and Real-World Projects ",
      description:
        "Our program emphasizes practical experience to ensure mastery of technology and business fundamentals. Gain hands-on expertise in coding, data analytics, digital marketing, and entrepreneurship.",
      action: "Join",
      link: "#join-us",
    },
    {
      title: "Unlock Your Potential with One-on-One Mentorship Tailored to You",
      description:
        "Receive personalized guidance from experienced mentors in tech, leadership, and business strategy to fast-track your career growth. ",
      action: "Learn",
      link: "#courses",
    },
    {
      title: "Engage in Real-World Projects to Solidify Your Learning Experience",
      description:
        "Apply your knowledge through hands-on projects that mirror industry challenges—from building scalable apps to creating business growth strategies.",
      action: "Explore",
      link: "#courses",
    },
  ]

  const testimonials = [
    {
      quote: "This mentorship program transformed my career! The guidance and support I received were truly invaluable.",
      author: "Prangya Priyadarsini",
      role: "Senior Motion Graphics Designer",
      image: "/testimonials/prangya.png",
      noOfStars: 5,
    },
    {
      quote: "The hands-on projects made even the most complex concepts easy to understand and apply in real-world scenarios.",
      author: "Tofan Behera",
      role: "Principal Motion Graphics Designer",
      image: "/testimonials/tofan.png",
      noOfStars: 4,
    },
    {
      quote: "Personalized mentorship gave me the clarity and confidence to excel. The experience was truly life-changing!",
      author: "Arpita Nayak",
      role: "Software Intern",
      image: "/testimonials/arpita.png",
      noOfStars: 5,
    },
    {
      quote: "The depth of knowledge and one-on-one guidance I received helped me sharpen my skills and grow professionally.",
      author: "Prakash Ranjan Swain",
      role: "Content Developer",
      image: "/testimonials/prakash.png",
      noOfStars: 5,
    },
  ];
  

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "10,000+" },
    { icon: Code2, label: "Projects Completed", value: "25,000+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
    { icon: BookOpen, label: "Course Hours", value: "1,000+" },
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

  const team = {
    tech: [
      {
        name: "Aman Jaiswal",
        role: "Lead Computer Science Mentor",
        bio: "Passionate educator with expertise in C programming, DSA, and CS fundamentals, dedicated to mentoring aspiring engineers.",
        specialties: ["Computer Science Fundamentals", "C Programming", "Data Structures & Algorithms"],
        image: "/team/aman.jpg",
      },
      {
        name: "Punit Kumar",
        role: "Software Development Engineer",
        bio: "Backend specialist with experience in building scalable systems and architecting distributed applications.",
        specialties: ["Backend Development", "Scalability", "Distributed Systems"],
        image: "/team/punit.png",
      },
      {
        name: "Ayush Sharma",
        role: "Software Development Engineer",
        bio: "Full-stack developer with a strong focus on modern web technologies and user-centric applications.",
        specialties: ["Full-Stack Development", "React.js", "Node.js"],
        image: "/team/ayush.png",
      },
      {
        name: "Ankit Raj",
        role: "Software Development Engineer",
        bio: "Competitive programmer and system design enthusiast, passionate about solving complex algorithmic challenges.",
        specialties: ["Competitive Programming", "C++", "System Design"],
        image: "/team/ankit.png",
      },
      {
        name: "Shubhendra Khuswah",
        role: "Senior Member of Technical Staff",
        bio: "Software architect with expertise in performance optimization and designing secure applications.",
        specialties: ["Software Architecture", "Performance Optimization", "Security"],
        image: "/team/shubhendra.png",
      },
      {
        name: "Biswajit Nayak",
        role: "Co-Founder",
        bio: "Technology strategist with a vision for innovation and experience in leading high-performing engineering teams.",
        specialties: ["Product Engineering", "Tech Strategy", "Leadership"],
        image: "/team/biswajit.png",
      },
    ],
    marketing: [
      {
        name: "Bana Bihari Kar",
        role: "Sales Lead",
        bio: "Dynamic sales leader with a proven track record of driving revenue growth in the EdTech industry.",
        specialties: ["Sales Strategy", "Lead Generation", "Market Analysis"],
        image: "/team/bana.png",
      },
      {
        name: "Sibabrata Choudhury",
        role: "Co-Founder & CEO",
        bio: "Entrepreneur with deep expertise in business development, branding, and scaling tech-driven ventures.",
        specialties: ["Business Development", "Branding", "Growth Strategy"],
        image: "/team/siba_sir.png",
      },
      {
        name: "Bikas Kumar",
        role: "Operations Manager",
        bio: "Operations expert focused on process efficiency, automation, and team collaboration for smooth business execution.",
        specialties: ["Operational Efficiency", "Process Automation", "Team Coordination"],
        image: "/team/bikash.png",
      },
    ],
    softSkills: [
      {
        name: "Sushant Mahapatra",
        role: "Co-Founder & CAO",
        bio: "Educational leader committed to revolutionizing learning experiences through innovative pedagogy and e-learning.",
        specialties: ["Educational Leadership", "E-Learning Platforms", "Student Engagement"],
        image: "/team/sushant_sir.png",
      },
      {
        name: "Pragati Jaipuriar",
        role: "SME Consultant for Science",
        bio: "Science educator with a passion for curriculum development and making STEM learning engaging for students.",
        specialties: ["Science Education", "Curriculum Development", "STEM Learning"],
        image: "/team/pragati.png",
      },
      {
        name: "Sulgna Dash",
        role: "Senior STEM Content Developer",
        bio: "Content developer specializing in interactive learning materials, pedagogy, and effective assessment strategies.",
        specialties: ["Interactive Content", "Pedagogy", "Assessment Design"],
        image: "/team/sulagna.png",
      },
    ],
  };
    

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
      image: "/tech.jpg",
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
      image: "/marketing.jpg",
    },
    {
      icon: Users,
      title: "Teacher Grooming & Leadership",
      description: "Develop essential teaching methodologies and leadership skills for effective education.",
      duration: "8 weeks",
      level: "Beginner",
      topics: [
        "Classroom Management",
        "Student Engagement Techniques",
        "EdTech Integration",
        "Leadership in Education",
      ],
      progress: 85,
      students: 1200,
      image: "/advance.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const floatingIcons = [
    { Icon: Code2, delay: 0 },
    { Icon: Database, delay: 0.2 },
    { Icon: GitBranch, delay: 0.4 },
  ]

  return (
    <div className="bg-[#070823] text-white overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#84BC54]/20 to-transparent" />
          <div className="absolute inset-0 bg-[#070823]/80" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 pt-32 pb-20 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight">
                Invest your weekends,
                <span className="text-[#84BC54]"> accelerate your career!</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-[#7C7D87]">
                Master industry-relevant skills in a structured weekend program while balancing your work or studies.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-4">
                <motion.a
                  href="#join-us"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#84BC54] text-[#070823] px-8 py-3 rounded-full font-medium flex items-center gap-2"
                >
                  Join the Waitlist <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>

            {/* Animated Code Elements */}
            <div className="relative h-[500px]">
              {floatingIcons.map(({ Icon, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    delay,
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 30}%`,
                    left: `${20 + index * 20}%`,
                  }}
                >
                  <div className="bg-[#D4EBC1] p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-[#070823]" />
                  </div>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-[#84BC54]/20"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-[#FFE084]/20"
              />
            </div>
          </div>
        </motion.div>

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

      {/* Stats Section */}
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#070823] mb-12"
          >
            Experience the Power of Hands-On <br /> Learning in Tech & Business!
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#D4EBC1] p-6 rounded-xl"
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={`/feature${index + 1}.jpg`}
                    alt={feature.title}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#070823] mb-2">{feature.title}</h3>
                <p className="text-[#7C7D87] mb-4">{feature.description}</p>
                {/* <Link href={feature.link} className="inline-flex items-center text-[#84BC54] hover:underline">
                  {feature.action} <ChevronRight className="w-4 h-4 ml-1" />
                </Link> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#070823]">
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

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-[#070823] mb-12"
          >
            Explore Our Course Catalog
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
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
                      <span className="text-[#070823]">Program Rating</span>
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

                  <button className="w-full text-center bg-[#84BC54] text-white py-2 rounded-full hover:bg-[#84BC54]/90 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-[#070823] mb-12"
          >
            Meet Our Expert Team
          </motion.h2>

          {Object.entries(team).map(([category, members], categoryIndex) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-[#070823] mb-8 flex items-center">
                {category === "tech" && <Code2 className="w-6 h-6 mr-2 text-[#84BC54]" />}
                {category === "marketing" && <Megaphone className="w-6 h-6 mr-2 text-[#84BC54]" />}
                {category === "softSkills" && <Palette className="w-6 h-6 mr-2 text-[#84BC54]" />}
                {category === "tech" && "Tech Experts"}
                {category === "marketing" && "Marketing Specialists"}
                {category === "softSkills" && "Soft Skills Mentors"}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    className="bg-[#D4EBC1] p-6 rounded-xl shadow-lg"
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
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="success" className="py-20 bg-[#D4EBC1]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-[#070823]">Learner Feedback</h2>
            <p className="text-[#7C7D87]">Transformative experience that changed my career path.</p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#84BC54] p-6 rounded-xl flex flex-col items-center text-center max-w-2xl mx-auto"
                    >
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-32 h-32 rounded-full object-cover mb-6"
                      />

                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.noOfStars)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>

                      <p className="text-white mb-6 text-lg">{testimonial.quote}</p>

                      {/* Testimonial User Info */}
                      <div>
                        <p className="font-semibold text-white text-xl">{testimonial.author}</p>
                        <p className="text-sm text-white/80">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-[#84BC54]" : "bg-[#84BC54]/30"}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-20 bg-[#070823]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Join Our Learning Community
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1f4d] p-8 rounded-xl shadow-lg border border-[#84BC54]/20"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-[#D4EBC1] border-[#84BC54]/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-[#D4EBC1] border-[#84BC54]/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.doe@example.com"
                              {...field}
                              className="bg-[#D4EBC1] border-[#84BC54]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (555) 000-0000"
                              {...field}
                              className="bg-[#D4EBC1] border-[#84BC54]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">I want to join as</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#D4EBC1] border-[#84BC54]/20">
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="mentor">Mentor</SelectItem>
                              <SelectItem value="partner">Partner</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Experience Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-[#D4EBC1] border-[#84BC54]/20">
                                <SelectValue placeholder="Select your experience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Tell us about yourself</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your goals and what you hope to achieve..."
                            className="min-h-[120px] bg-[#D4EBC1] border-[#84BC54]/20"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-[#7C7D87]">
                          Tell us about your background, interests, and what motivates you to join our community.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-[#84BC54] hover:bg-[#84BC54]/90">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#070823] to-[#0f1235]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Join Us?</h2>
            <div className="space-y-6">
              {[
                "Access to expert mentors and industry professionals",
                "Hands-on learning with real-world projects",
                "Flexible learning schedule that fits your lifestyle",
                "Career guidance and networking opportunities",
                "Certificate of completion for all courses",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-[#1a1f4d] p-4 rounded-xl border border-[#84BC54]/20"
                >
                  <CheckCircle className="w-6 h-6 text-[#84BC54] flex-shrink-0" />
                  <p className="text-white">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

