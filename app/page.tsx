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
  Star,
  Clock,
  Users2,
  ArrowRight,
  Layers,
  User,
  Calendar,
  GraduationCap,
  FileText,
} from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)

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

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("course-scroll-container")
      if (!container) return

      const courseElements = container.querySelectorAll('[id^="course-"]')
      if (courseElements.length === 0) return

      // Find the course element that's most visible in the viewport
      let mostVisibleCourse = null
      let maxVisibleHeight = 0

      courseElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        // Calculate how much of the element is visible in the container
        const visibleTop = Math.max(rect.top, containerRect.top)
        const visibleBottom = Math.min(rect.bottom, containerRect.bottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          mostVisibleCourse = element
        }
      })

      if (mostVisibleCourse) {
        const courseId = (mostVisibleCourse as HTMLElement).id.replace("course-", "")

        // Update active state for all buttons
        const buttons = document.querySelectorAll("[data-course-button]")
        buttons.forEach((btn) => {
          btn.classList.remove("bg-[#84BC54]/20", "text-[#84BC54]")
          btn.classList.add("hover:bg-white/10", "text-white/80")
        })

        // Set active state for the button corresponding to the visible course
        const activeButton = document.querySelector(`[data-course-id="${courseId}"]`)
        if (activeButton) {
          activeButton.classList.remove("hover:bg-white/10", "text-white/80")
          activeButton.classList.add("bg-[#84BC54]/20", "text-[#84BC54]")
        }
      }
    }

    const container = document.getElementById("course-scroll-container")
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      quote:
        "This mentorship program transformed my career! The guidance and support I received were truly invaluable.",
      author: "Prangya Priyadarsini",
      role: "Senior Motion Graphics Designer",
      image: "/testimonials/prangya.png",
      noOfStars: 5,
    },
    {
      quote:
        "The hands-on projects made even the most complex concepts easy to understand and apply in real-world scenarios.",
      author: "Tofan Behera",
      role: "Principal Motion Graphics Designer",
      image: "/testimonials/tofan.png",
      noOfStars: 4,
    },
    {
      quote:
        "Personalized mentorship gave me the clarity and confidence to excel. The experience was truly life-changing!",
      author: "Arpita Nayak",
      role: "Software Intern",
      image: "/testimonials/arpita.png",
      noOfStars: 5,
    },
    {
      quote:
        "The depth of knowledge and one-on-one guidance I received helped me sharpen my skills and grow professionally.",
      author: "Prakash Ranjan Swain",
      role: "Content Developer",
      image: "/testimonials/prakash.png",
      noOfStars: 5,
    },
  ]

  const stats = [
    { icon: Users, label: "Students Enrolled", value: "100+" },
    { icon: Code2, label: "Projects Completed", value: "3+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
    { icon: BookOpen, label: "Program Hours", value: "100+" },
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
        role: "Business Development Lead",
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
  }

  const courses = [
    {
      id: "tech-bootcamp",
      icon: Code2,
      title: "Tech Skills Bootcamp",
      description: "Master the latest tech skills with hands-on projects and real-world applications.",
      duration: "12 weeks",
      level: "Tech" as "Tech" | "Marketing" | "Trainer",
      topics: ["Full-Stack Development", "Data Science & AI", "Cloud Computing", "Cybersecurity"],
      progress: 88,
      students: 2500,
      image: "/tech.jpg",
      instructors: ["Aman Jaiswal", "Ayush Sharma", "Ankit Raj"],
      schedule: "Weekends (Sat-Sun, 10 AM - 1 PM)",
      prerequisites: ["Basic programming knowledge", "Familiarity with web technologies", "Problem-solving aptitude"],
      projects: [
        "Build a full-stack web application",
        "Develop a machine learning model",
        "Create a cloud-based microservice architecture",
      ],
      outcomes: [
        "Proficiency in modern programming languages",
        "Portfolio of real-world projects",
        "Industry-ready technical skills",
        "Ability to architect scalable solutions",
      ],
      testimonial: {
        quote:
          "The Tech Skills Bootcamp transformed my career trajectory completely. The hands-on approach and expert mentorship helped me land my dream job!",
        author: "Rahul Sharma",
        role: "Software Engineer at Amazon",
      },
      faqs: [
        {
          question: "Is this program suitable for beginners?",
          answer:
            "While some basic programming knowledge is helpful, we have designed the curriculum to accommodate learners with varying levels of experience. We provide additional resources for beginners to catch up.",
        },
        {
          question: "Will I receive a certificate upon completion?",
          answer:
            "Yes, all participants who successfully complete the program will receive a certificate of completion that can be shared with potential employers.",
        },
        {
          question: "How much time should I dedicate outside of class hours?",
          answer:
            "We recommend allocating 10-15 hours per week for assignments, projects, and self-study to get the most out of the program.",
        },
      ],
    },
    {
      id: "business-development",
      icon: Briefcase,
      title: "Business Development Program",
      description: "Learn essential business strategies and sales techniques to drive growth.",
      duration: "10 weeks",
      level: "Marketing" as "Tech" | "Marketing" | "Trainer",
      topics: ["Sales & Negotiation", "Digital Marketing & Branding", "Financial Literacy", "Growth Hacking"],
      progress: 90,
      students: 1800,
      image: "/marketing.jpg",
      instructors: ["Bana Bihari Kar", "Sibabrata Choudhury"],
      schedule: "Weekends (Sat-Sun, 2 PM - 5 PM)",
      prerequisites: [
        "Basic understanding of business concepts",
        "Interest in marketing and sales",
        "Communication skills",
      ],
      projects: [
        "Develop a comprehensive marketing strategy",
        "Create and execute a sales campaign",
        "Build a business growth plan",
      ],
      outcomes: [
        "Strategic business development skills",
        "Proficiency in digital marketing tools",
        "Sales negotiation expertise",
        "Financial planning abilities",
      ],
      testimonial: {
        quote:
          "The Business Development Program gave me practical skills I could immediately apply to grow my startup. The mentorship was invaluable!",
        author: "Priya Malhotra",
        role: "Founder & CEO, GrowthTech",
      },
      faqs: [
        {
          question: "Do I need prior business experience?",
          answer:
            "No prior business experience is required. The program is designed to build your skills from the ground up while also providing value to those with some experience.",
        },
        {
          question: "Will this program help me start my own business?",
          answer:
            "The program covers essential aspects of business development, marketing, and financial planning that are crucial for entrepreneurs.",
        },
        {
          question: "Is there networking opportunity with industry professionals?",
          answer:
            "Yes, we regularly invite guest speakers from the industry and organize networking events to help you build valuable connections.",
        },
      ],
    },
    {
      id: "teacher-grooming",
      icon: Users,
      title: "Teacher Grooming & Leadership",
      description: "Develop essential teaching methodologies and leadership skills for effective education.",
      duration: "8 weeks",
      level: "Trainer" as "Tech" | "Marketing" | "Trainer",
      topics: [
        "Classroom Management",
        "Student Engagement Techniques",
        "EdTech Integration",
        "Leadership in Education",
      ],
      progress: 85,
      students: 1200,
      image: "/advance.jpg",
      instructors: ["Sushant Mahapatra", "Pragati Jaipuriar", "Sulgna Dash"],
      schedule: "Weekends (Sat-Sun, 9 AM - 12 PM)",
      prerequisites: ["Passion for education", "Basic teaching experience or interest", "Willingness to innovate"],
      projects: [
        "Design an innovative lesson plan",
        "Develop a student engagement strategy",
        "Create a technology integration plan for classrooms",
      ],
      outcomes: [
        "Advanced teaching methodologies",
        "Classroom management expertise",
        "Educational leadership skills",
        "EdTech integration capabilities",
      ],
      testimonial: {
        quote:
          "This program revolutionized my teaching approach. I've seen remarkable improvement in student engagement and learning outcomes in my classroom.",
        author: "Anjali Desai",
        role: "Senior Teacher, Delhi Public School",
      },
      faqs: [
        {
          question: "Is this program only for current teachers?",
          answer:
            "No, the program is designed for both current educators and those aspiring to enter the teaching profession. We welcome anyone passionate about education.",
        },
        {
          question: "Will I learn about the latest educational technologies?",
          answer:
            "Yes, a significant portion of the curriculum focuses on integrating modern educational technologies into traditional teaching methods.",
        },
        {
          question: "How will this program help advance my career in education?",
          answer:
            "The program equips you with advanced teaching methodologies, leadership skills, and technology integration capabilities that are highly valued in educational institutions.",
        },
      ],
    },
  ]

  type CourseLevel = "Tech" | "Marketing" | "Trainer"

  const recommendedCourses: Record<
    CourseLevel,
    Array<{
      id: string
      title: string
      duration: string
      description: string
      image: string
      instructor: string
      rating: number
      students: number
      details: string
      link: string
      externalUrl?: string
    }>
  > = {
    Trainer: [
      {
        id: "intro-programming",
        title: "Introduction to Programming",
        duration: "6 weeks",
        description: "Perfect starting point for those new to coding",
        image: "/placeholder.svg",
        instructor: "Aman Jaiswal",
        rating: 4.8,
        students: 850,
        details:
          "Learn the fundamentals of programming logic, basic syntax, and problem-solving approaches that form the foundation of all coding languages.",
        link: "/courses/introduction-to-programming",
        externalUrl: "https://www.udemy.com/course/complete-python-bootcamp/",
      },
      {
        id: "fundamentals-business",
        title: "Fundamentals of Business",
        duration: "4 weeks",
        description: "Learn the basics of business operations and strategy",
        image: "/placeholder.svg",
        instructor: "Bana Bihari Kar",
        rating: 4.7,
        students: 720,
        details:
          "Understand core business concepts including market analysis, basic accounting principles, and organizational structures for entrepreneurial success.",
        link: "/courses/fundamentals-of-business",
        externalUrl: "https://www.udemy.com/course/the-business-intelligence-analyst-course-2018/",
      },
      {
        id: "teaching-essentials",
        title: "Teaching Essentials",
        duration: "5 weeks",
        description: "Core teaching methodologies for new educators",
        image: "/placeholder.svg",
        instructor: "Sushant Mahapatra",
        rating: 4.9,
        students: 630,
        details:
          "Master fundamental teaching techniques, classroom management strategies, and student engagement methods for effective educational delivery.",
        link: "/courses/teaching-essentials",
        externalUrl: "https://www.udemy.com/course/teaching-online/",
      },
      {
        id: "educational-psychology",
        title: "Educational Psychology",
        duration: "7 weeks",
        description: "Understanding how students learn and develop",
        image: "/placeholder.svg",
        instructor: "Dr. Meena Sharma",
        rating: 4.6,
        students: 520,
        details:
          "Explore cognitive development, learning theories, and motivation strategies to create more effective and engaging learning environments.",
        link: "/courses/educational-psychology",
        externalUrl: "https://www.coursera.org/learn/educational-psychology",
      },
      {
        id: "classroom-management",
        title: "Classroom Management Mastery",
        duration: "4 weeks",
        description: "Strategies for effective classroom control",
        image: "/placeholder.svg",
        instructor: "Rajiv Mehta",
        rating: 4.7,
        students: 780,
        details:
          "Learn proven techniques for maintaining discipline, creating positive learning environments, and handling challenging student behaviors.",
        link: "/courses/classroom-management",
        externalUrl: "https://www.edx.org/learn/education/classroom-management",
      },
    ],
    Marketing: [
      {
        id: "web-development",
        title: "Web Development Bootcamp",
        duration: "8 weeks",
        description: "Build responsive websites with modern frameworks",
        image: "/placeholder.svg",
        instructor: "Ayush Sharma",
        rating: 4.8,
        students: 1250,
        details:
          "Create dynamic, responsive websites using HTML5, CSS3, JavaScript, and popular frameworks like React while implementing industry best practices.",
        link: "/courses/web-development-bootcamp",
        externalUrl: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing Mastery",
        duration: "6 weeks",
        description: "Advanced strategies for online brand growth",
        image: "/placeholder.svg",
        instructor: "Sibabrata Choudhury",
        rating: 4.7,
        students: 980,
        details:
          "Develop comprehensive digital marketing campaigns across multiple platforms, utilizing data analytics to optimize performance and drive conversions.",
        link: "/courses/digital-marketing-mastery",
        externalUrl: "https://www.udemy.com/course/complete-digital-marketing-course/",
      },
      {
        id: "classroom-tech",
        title: "Classroom Technology Integration",
        duration: "7 weeks",
        description: "Enhance learning with educational technology",
        image: "/placeholder.svg",
        instructor: "Pragati Jaipuriar",
        rating: 4.6,
        students: 870,
        details:
          "Implement cutting-edge educational technologies to create engaging, interactive learning experiences that improve student outcomes and participation.",
        link: "/courses/classroom-technology-integration",
        externalUrl: "https://www.coursera.org/learn/teaching-with-technology",
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing Strategy",
        duration: "5 weeks",
        description: "Master social platforms for business growth",
        image: "/placeholder.svg",
        instructor: "Priya Malhotra",
        rating: 4.8,
        students: 1450,
        details:
          "Learn to create engaging content, build communities, and drive conversions through strategic social media campaigns across all major platforms.",
        link: "/courses/social-media-marketing",
        externalUrl: "https://www.udemy.com/course/complete-social-media-marketing-course/",
      },
      {
        id: "seo-fundamentals",
        title: "SEO Fundamentals & Strategy",
        duration: "6 weeks",
        description: "Drive organic traffic through search optimization",
        image: "/placeholder.svg",
        instructor: "Vikram Singh",
        rating: 4.7,
        students: 920,
        details:
          "Master the technical and content aspects of search engine optimization to improve rankings, increase visibility, and drive qualified traffic to your website.",
        link: "/courses/seo-fundamentals",
        externalUrl: "https://www.udemy.com/course/seo-training/",
      },
    ],
    Tech: [
      {
        id: "data-structures",
        title: "Mastering Data Structures & Algorithms using C and C++",
        duration: "12 weeks",
        description: "Learn, Analyse and Implement Data Structure using C and C++. Learn Recursion and Sorting.",
        image: "/courses/dsa.jpg",
        instructor: "Abdul Bari",
        rating: 4.9,
        students: 1450,
        details:
          "Build complete web applications from database design to user interface, including authentication, API development, and deployment strategies.",
        link: "/courses/mastering-data-structures-and-algorithms",
        externalUrl: "https://www.udemy.com/course/datastructurescncpp/",
      },
      {
        id: "python-bootcamp",
        title: "100 Days of Code: The Complete Python Pro Bootcamp",
        duration: "15 weeks",
        description:
          "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
        image: "/courses/python.webp",
        instructor: "Angela Yu",
        rating: 4.8,
        students: 1120,
        details:
          "Apply advanced analytics and innovative growth strategies to rapidly scale businesses, optimize conversion funnels, and maximize customer acquisition.",
        link: "/courses/100-days-of-code",
        externalUrl: "https://www.udemy.com/course/100-days-of-code/",
      },
      {
        id: "sql-beginners",
        title: "SQL for Beginners: Learn SQL using MySQL and Database Design",
        duration: "9 weeks",
        description:
          "Understand SQL using the MySQL database. Learn Database Design and Data Analysis with Normalization and Relationships",
        image: "/courses/sql.jpg",
        instructor: "Tim Buchalka",
        rating: 4.7,
        students: 890,
        details:
          "Develop the leadership skills needed to guide educational institutions, including curriculum development, staff management, and institutional vision setting.",
        link: "/courses/sql-beginners",
        externalUrl: "https://www.udemy.com/course/sql-for-beginners-course/",
      },
      {
        id: "javascript-complete",
        title: "The Complete JavaScript Course 2024",
        duration: "10 weeks",
        description: "Master JavaScript with the most comprehensive course on the market",
        image: "/placeholder.svg",
        instructor: "Jonas Schmedtmann",
        rating: 4.8,
        students: 1680,
        details:
          "From fundamentals to advanced topics like OOP, asynchronous JavaScript, and modern tooling. Build real-world projects including games and applications.",
        link: "/courses/javascript-complete",
        externalUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
      },
      {
        id: "react-complete",
        title: "React - The Complete Guide 2024",
        duration: "11 weeks",
        description: "Master React.js from beginner to advanced",
        image: "/placeholder.svg",
        instructor: "Maximilian Schwarzmüller",
        rating: 4.7,
        students: 1520,
        details:
          "Learn React.js from scratch! Hooks, Redux, React Router, Next.js and way more! Build powerful, fast, user-friendly and reactive web apps.",
        link: "/courses/react-complete",
        externalUrl: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      },
    ],
  }

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
            className="text-4xl font-bold text-center text-white mb-12"
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

      {/* Courses Section - REDESIGNED */}
      <section id="courses" className="py-20 bg-gradient-to-b from-[#D4EBC1] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#070823] mb-4">Explore Our Program Catalog</h2>
            <p className="text-[#7C7D87] max-w-2xl mx-auto">
              Accelerate your career with our specialized weekend programs designed to fit your busy schedule
            </p>
          </motion.div>

          <div className="space-y-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#84BC54] to-transparent rounded-full hidden md:block" />

                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Left side - Course image and basic info */}
                  <div className="md:col-span-5 lg:col-span-4">
                    <div className="relative overflow-hidden rounded-2xl group">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <Badge className="bg-[#84BC54] hover:bg-[#84BC54]/90 mb-3">{course.level}</Badge>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                          <span className="mx-1">•</span>
                          <Users2 className="w-4 h-4" />
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Course details */}
                  <div className="md:col-span-7 lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#84BC54]/20 p-2 rounded-lg">
                        <course.icon className="w-5 h-5 text-[#84BC54]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#070823]">{course.title}</h3>
                    </div>

                    <p className="text-[#7C7D87] mb-6 text-lg">{course.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#070823] font-medium">Program Rating</span>
                        <span className="text-[#84BC54] font-medium">{course.progress}%</span>
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

                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#070823] mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#84BC54]" />
                        Key Topics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-white border-[#84BC54]/30 text-[#070823] hover:bg-[#84BC54]/10"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white rounded-full px-6">
                            Recommended Courses
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                          <div className="flex flex-col md:flex-row h-[600px] max-h-[80vh]">
                            {/* Left sidebar with course categories */}
                            <div className="bg-[#070823] text-white p-6 w-full md:w-64 flex-shrink-0">
                              <DialogTitle className="text-xl font-bold mb-6 text-white">
                                Recommended for {course.level}
                              </DialogTitle>
                              <DialogDescription className="text-white/70 mb-6">
                                Courses that complement {course.title}
                              </DialogDescription>

                              <div className="space-y-1 mt-8">
                                {recommendedCourses[course.level]?.map((rec, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      const element = document.getElementById(`course-${rec.id}`)
                                      if (element) {
                                        element.scrollIntoView({ behavior: "smooth" })
                                        // Update active state for all buttons
                                        const buttons = document.querySelectorAll("[data-course-button]")
                                        buttons.forEach((btn) =>
                                          btn.classList.remove("bg-[#84BC54]/20", "text-[#84BC54]"),
                                        )
                                        buttons.forEach((btn) =>
                                          btn.classList.add("hover:bg-white/10", "text-white/80"),
                                        )
                                        // Set active state for clicked button
                                        const clickedButton = document.querySelector(`[data-course-id="${rec.id}"]`)
                                        if (clickedButton) {
                                          clickedButton.classList.remove("hover:bg-white/10", "text-white/80")
                                          clickedButton.classList.add("bg-[#84BC54]/20", "text-[#84BC54]")
                                        }
                                      }
                                    }}
                                    data-course-button
                                    data-course-id={rec.id}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                      idx === 0 ? "bg-[#84BC54]/20 text-[#84BC54]" : "hover:bg-white/10 text-white/80"
                                    }`}
                                  >
                                    {rec.title.length > 20 ? `${rec.title.substring(0, 20)}...` : rec.title}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Right content area with course details */}
                            <div className="flex-1 overflow-y-auto" id="course-scroll-container">
                              <div className="p-6">
                                {recommendedCourses[course.level]?.map((rec, idx) => (
                                  <div key={idx} id={`course-${rec.id}`} className="mb-8 last:mb-0 group">
                                    <div className="relative overflow-hidden rounded-xl mb-4">
                                      <div className="aspect-video relative">
                                        <Image
                                          src={rec.image || "/placeholder.svg"}
                                          alt={rec.title}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                          <div className="flex justify-between items-end">
                                            <div>
                                              <Badge className="bg-[#84BC54] hover:bg-[#84BC54]/90 mb-2">
                                                {course.level}
                                              </Badge>
                                              <h3 className="text-xl font-bold text-white group-hover:text-[#84BC54] transition-colors">
                                                {rec.title}
                                              </h3>
                                            </div>
                                            <div className="flex items-center gap-1 text-white/90 bg-black/30 px-3 py-1 rounded-full">
                                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                              <span className="font-medium">{rec.rating}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                      <div className="md:col-span-2">
                                        <p className="text-[#070823] mb-3">{rec.description}</p>
                                        <p className="text-[#070823] text-sm">{rec.details}</p>
                                      </div>

                                      <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-[#7C7D87]">
                                          <Clock className="w-4 h-4 text-[#84BC54]" />
                                          <span>{rec.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#7C7D87]">
                                          <Users2 className="w-4 h-4 text-[#84BC54]" />
                                          <span>{rec.students.toLocaleString()} students</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#7C7D87]">
                                          <User className="w-4 h-4 text-[#84BC54]" />
                                          <span>{rec.instructor}</span>
                                        </div>

                                        <a
                                          href={rec.externalUrl || "#"}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block w-full mt-4"
                                        >
                                          <Button className="w-full bg-[#84BC54]/10 hover:bg-[#84BC54]/20 text-[#84BC54] border-none">
                                            View Course <ArrowRight className="w-4 h-4 ml-2" />
                                          </Button>
                                        </a>
                                      </div>
                                    </div>

                                    {idx < recommendedCourses[course.level].length - 1 && (
                                      <div className="h-px bg-gray-200 my-8" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-[#84BC54] text-[#84BC54] hover:bg-[#84BC54]/10 hover:text-[#84BC54] rounded-full px-6"
                            onClick={() => setSelectedCourse(course)}
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                          <div className="max-h-[80vh] overflow-y-auto">
                            {/* Course Header */}
                            <div className="relative h-48 md:h-64">
                              <Image
                                src={course.image || "/placeholder.svg"}
                                alt={course.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <Badge className="bg-[#84BC54] hover:bg-[#84BC54]/90 mb-3">{course.level}</Badge>
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{course.title}</h2>
                                <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{course.duration}</span>
                                  <span className="mx-1">•</span>
                                  <Users2 className="w-4 h-4" />
                                  <span>{course.students.toLocaleString()} students</span>
                                </div>
                              </div>
                            </div>

                            {/* Course Details */}
                            <div className="p-6">
                              <Tabs defaultValue="overview" className="w-full">
                                <TabsList className="grid grid-cols-4 mb-6">
                                  <TabsTrigger value="overview">Overview</TabsTrigger>
                                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                                  <TabsTrigger value="instructors">Instructors</TabsTrigger>
                                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                                </TabsList>

                                <TabsContent value="overview" className="space-y-6">
                                  <div>
                                    <h3 className="text-lg font-semibold text-[#070823] mb-2">About This Course</h3>
                                    <p className="text-[#7C7D87]">{course.description}</p>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-[#F9F9F9] p-4 rounded-lg">
                                      <h4 className="font-medium text-[#070823] mb-3 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[#84BC54]" />
                                        Schedule
                                      </h4>
                                      <p className="text-[#7C7D87]">{course.schedule}</p>
                                    </div>

                                    <div className="bg-[#F9F9F9] p-4 rounded-lg">
                                      <h4 className="font-medium text-[#070823] mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4 text-[#84BC54]" />
                                        Prerequisites
                                      </h4>
                                      <ul className="text-[#7C7D87] space-y-1">
                                        {course.prerequisites.map((prereq, i) => (
                                          <li key={i} className="flex items-start gap-2">
                                            <span className="text-[#84BC54] mt-1">•</span>
                                            <span>{prereq}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h3 className="text-lg font-semibold text-[#070823] mb-3">What You'll Learn</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                      {course.outcomes.map((outcome, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                          <CheckCircle className="w-5 h-5 text-[#84BC54] flex-shrink-0 mt-0.5" />
                                          <span className="text-[#7C7D87]">{outcome}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Testimonial */}
                                  <div className="bg-[#84BC54]/10 p-5 rounded-lg border border-[#84BC54]/20">
                                    <div className="flex flex-col items-center text-center">
                                      <p className="text-[#070823] italic mb-4">"{course.testimonial.quote}"</p>
                                      <p className="font-semibold text-[#070823]">{course.testimonial.author}</p>
                                      <p className="text-sm text-[#7C7D87]">{course.testimonial.role}</p>
                                    </div>
                                  </div>

                                  <div className="flex justify-center pt-4">
                                    <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white rounded-full px-8 py-6">
                                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>
                                </TabsContent>

                                <TabsContent value="curriculum" className="space-y-6">
                                  <h3 className="text-lg font-semibold text-[#070823] mb-4">Course Projects</h3>
                                  <div className="space-y-4">
                                    {course.projects.map((project, i) => (
                                      <div key={i} className="bg-[#F9F9F9] p-4 rounded-lg">
                                        <div className="flex items-start gap-3">
                                          <div className="bg-[#84BC54]/20 p-2 rounded-full">
                                            <FileText className="w-5 h-5 text-[#84BC54]" />
                                          </div>
                                          <div>
                                            <h4 className="font-medium text-[#070823]">Project {i + 1}</h4>
                                            <p className="text-[#7C7D87]">{project}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="flex justify-center pt-4">
                                    <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white rounded-full px-8 py-6">
                                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>
                                </TabsContent>

                                <TabsContent value="instructors" className="space-y-6">
                                  <h3 className="text-lg font-semibold text-[#070823] mb-4">Meet Your Instructors</h3>
                                  <div className="grid gap-6">
                                    {course.instructors.map((instructor, i) => {
                                      // Find the instructor in the team data
                                      // Define instructor data type that matches the team member structure
                                      type InstructorData = {
                                        name: string;
                                        role: string;
                                        bio: string;
                                        specialties: string[];
                                        image: string;
                                      };
                                      
                                      let instructorData: InstructorData | null = null;
                                      
                                      // Loop through all team categories to find the instructor
                                      for (const category of Object.values(team)) {
                                        const found = category.find((member) => member.name === instructor);
                                        if (found) {
                                          instructorData = {
                                            name: found.name,
                                            role: found.role,
                                            bio: found.bio,
                                            specialties: found.specialties,
                                            image: found.image
                                          };
                                          break;
                                        }
                                      }

                                      return (
                                        <div key={i} className="bg-[#F9F9F9] p-4 rounded-lg">
                                          <div className="flex items-center gap-4">
                                            <Image
                                              src={instructorData?.image || "/placeholder.svg"}
                                              alt={instructor}
                                              width={64}
                                              height={64}
                                              className="rounded-full"
                                            />
                                            <div>
                                              <h4 className="font-medium text-[#070823]">{instructor}</h4>
                                              <p className="text-[#84BC54]">{instructorData?.role || "Instructor"}</p>
                                              {instructorData && (
                                                <p className="text-[#7C7D87] text-sm mt-1">{instructorData.bio}</p>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    })}
                                  </div>

                                  <div className="flex justify-center pt-4">
                                    <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white rounded-full px-8 py-6">
                                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>
                                </TabsContent>

                                <TabsContent value="faq" className="space-y-6">
                                  <h3 className="text-lg font-semibold text-[#070823] mb-4">
                                    Frequently Asked Questions
                                  </h3>
                                  <div className="space-y-4">
                                    {course.faqs.map((faq, i) => (
                                      <div key={i} className="bg-[#F9F9F9] p-4 rounded-lg">
                                        <h4 className="font-medium text-[#070823] mb-2">{faq.question}</h4>
                                        <p className="text-[#7C7D87]">{faq.answer}</p>
                                      </div>
                                    ))}
                                  </div>

                                  <div className="flex justify-center pt-4">
                                    <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white rounded-full px-8 py-6">
                                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
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
            className="text-4xl font-bold text-center text-[#070823] mb-12"
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
                {category === "softSkills" && "Teachers Trainer"}
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1f4d] p-8 rounded-xl shadow-lg border border-[#84BC54]/20"
            >
              <iframe
                src="https://app.nocodb.com/#/nc/form/d5089d09-f289-400a-bb3e-b52f26791769"
                className="w-full min-h-[800px] border-none"
                title="Aveti Learning Internship Programs Application Form"
              />
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

