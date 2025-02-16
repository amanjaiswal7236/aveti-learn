"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Code2, Database, GitBranch } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function Home() {
  //const [scrollY, setScrollY] = useState(0)
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

  const features = [
    {
      title: "Transform Your Skills with Personalized Mentorship and Real-World Projects ",
      description: "Our program emphasizes practical experience to ensure mastery of technology and business fundamentals. Gain hands-on expertise in coding, data analytics, digital marketing, and entrepreneurship.",
      action: "Join",
      link: "#",
    },
    {
      title: "Unlock Your Potential with One-on-One Mentorship Tailored to You",
      description: "Receive personalized guidance from experienced mentors in tech, leadership, and business strategy to fast-track your career growth. ",
      action: "Learn",
      link: "#",
    },
    {
      title: "Engage in Real-World Projects to Solidify Your Learning Experience",
      description: "Apply your knowledge through hands-on projects that mirror industry challenges—from building scalable apps to creating business growth strategies.",
      action: "Explore",
      link: "#",
    },
  ]

  const testimonials = [
    {
      quote: "The mentorship program was a game changer for me!",
      author: "Prangya",
      role: "Data Analyst, Infosys",
      image: "/testimonials/test-1.avif",
      noOfStars: 5,
    },
    {
      quote: "Hands-on projects made complex concepts easy to grasp.",
      author: "Tofan",
      role: "Student, IIT Bombay",
      image: "/testimonials/tofan.jpg",
      noOfStars: 4,
    },
    {
      quote: "The one-on-one mentorship was invaluable to my growth.",
      author: "Arpita",
      role: "Software Engineer, Google",
      image: "/testimonials/arpita.jpg",
      noOfStars: 5,
    },
  ];
  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY)
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

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
    <div className="min-h-screen bg-[#070823] text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold leading-tight">
              Invest your weekends,
              <span className="text-[#84BC54]"> accelerate your career!</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-[#7C7D87]">
              Master industry-relevant  skills in a structured weekend program while balancing your work or studies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#84BC54] text-[#070823] px-8 py-3 rounded-full font-medium flex items-center gap-2"
              >
                Join the Waitlist  <ChevronRight className="w-4 h-4" />
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#7C7D87] px-8 py-3 rounded-full font-medium hover:bg-[#7C7D87]/10 transition-colors"
              >
                Learn More
              </motion.button> */}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { label: "Active Students", value: "500+" },
            { label: "Expert Mentors", value: "50+" },
            { label: "Success Rate", value: "95%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#7C7D87]/10 p-8 rounded-2xl border border-[#7C7D87]/20 text-center"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="text-4xl font-bold text-[#84BC54]"
              >
                {stat.value}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="text-[#7C7D87] mt-2"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="min-h-screen bg-[#D4EBC1]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image src="/aveti-6.avif" alt="Learning Experience" width={500} height={500} className="rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-[#070823]">Upskill, Network, and Succeed </h1>
              <p className="text-[#7C7D87]">
                Join a community of tech and business enthusiasts, learn from expert mentors, and prepare for high-growth careers.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#070823]">45%</h3>
                  <p className="text-[#7C7D87]">of professionals who upskill see a salary increase within a year </p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#070823]">70%</h3>
                  <p className="text-[#7C7D87]">of employees report higher job satisfaction after learning new tech skills.</p>
                </div>
              </div>
              {/* <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#84BC54] text-white px-6 py-2 rounded-full"
                >
                  Button
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#070823] text-white px-6 py-2 rounded-full"
                >
                  Button
                </motion.button>
              </div> */}
            </motion.div>
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
              Experience the Power of Hands-On <br/> Learning in Tech & Business!
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
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#070823] mb-2">{feature.title}</h3>
                  <p className="text-[#7C7D87] mb-4">{feature.description}</p>
                  <Link href={feature.link} className="inline-flex items-center text-[#84BC54] hover:underline">
                    {feature.action} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#D4EBC1]">
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
      </div>
    </div>
  )
}