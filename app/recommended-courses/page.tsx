"use client"
import {
    ArrowRight,
    BookOpen,
    Calendar,
    CheckCircle,
    Clock,
    Code2,
    ExternalLink,
    GraduationCap,
    Layers,
    LightbulbIcon,
    ListChecks,
    Star,
    User,
    Users2,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function CourseRecommendation() {
    const [selectedCourseId, setSelectedCourseId] = useState("data-structures")

    const recommendedCourses = [
        {
            id: "data-structures",
            title: "Mastering Data Structures & Algorithms using C and C++",
            duration: "12 weeks",
            description: "Learn, Analyse and Implement Data Structure using C and C++. Learn Recursion and Sorting.",
            image: "/courses/dsa.jpg",
            instructor: "Abdul Bari",
            rating: 4.9,
            students: 1450,
            price: "₹490",
            level: "Intermediate",
            category: "Programming",
            details:
                "Build a strong foundation in data structures and algorithms with this comprehensive course. Master essential concepts that will prepare you for technical interviews and real-world programming challenges.",
            link: "/courses/mastering-data-structures-and-algorithms",
            externalUrl: "https://www.udemy.com/course/datastructurescncpp/",
            topics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Sorting Algorithms", "Recursion"],
            prerequisites: ["Basic C/C++ knowledge", "Understanding of programming fundamentals", "Problem-solving aptitude"],
            outcomes: [
                "Implement complex data structures from scratch",
                "Analyze algorithm efficiency using Big O notation",
                "Apply data structures to solve real-world problems",
                "Optimize code for better performance",
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An exceptional course for building a strong foundation in DSA with clear explanations and practical examples.",
                strengths: [
                    "Exceptional visual explanations of complex concepts",
                    "Comprehensive coverage from basics to advanced topics",
                    "Strong focus on implementation details",
                    "Clear explanations of time and space complexity",
                ],
                weaknesses: [
                    "Some sections could benefit from more practice problems",
                    "Limited coverage of advanced graph algorithms",
                    "C/C++ focus may not be ideal for those primarily using other languages",
                ],
                idealFor: [
                    "Computer Science students preparing for technical interviews",
                    "Self-taught programmers looking to fill knowledge gaps",
                    "Professionals wanting to improve algorithm efficiency skills",
                ],
                howToUse: [
                    "Complete all coding exercises, don't just watch lectures",
                    "Implement each data structure from scratch without looking at the solution first",
                    "Supplement with additional practice problems from platforms like LeetCode",
                    "Form study groups to discuss complex topics and alternative implementations",
                    "Review difficult concepts multiple times with breaks in between",
                ],
                complementaryCourses: [
                    "Dynamic Programming Masterclass",
                    "Advanced C++ Programming",
                    "System Design for Software Engineers",
                ],
            },
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
            price: "$19.99",
            level: "Beginner to Advanced",
            category: "Programming",
            details:
                "A comprehensive Python course that takes you from beginner to advanced through daily projects. Perfect for building a portfolio while learning.",
            link: "/courses/100-days-of-code",
            externalUrl: "https://www.udemy.com/course/100-days-of-code/",
            topics: ["Python Basics", "Web Development", "Data Science", "Automation", "Game Development", "Web Scraping"],
            prerequisites: ["No prior programming experience required", "Basic computer skills"],
            outcomes: [
                "Build 100 Python projects from simple to complex",
                "Master Python programming from beginner to advanced",
                "Create websites, games, apps and automation tools",
                "Understand data science and machine learning fundamentals",
            ],
            schedule: "Self-paced (recommended: 1-2 hours daily)",
            ourTake: {
                summary:
                    "An excellent project-based approach to learning Python that keeps students engaged through practical applications.",
                strengths: [
                    "Project-based learning approach maintains motivation",
                    "Covers an impressive breadth of Python applications",
                    "Beginner-friendly with gradual progression to advanced topics",
                    "Builds a substantial portfolio of projects",
                ],
                weaknesses: [
                    "Some projects could go deeper into advanced concepts",
                    "Later projects may require more time than a single day",
                    "Limited coverage of software architecture principles",
                ],
                idealFor: [
                    "Complete beginners to programming",
                    "Those who learn best through hands-on projects",
                    "Career changers building a portfolio",
                    "Students who struggle with maintaining consistent practice",
                ],
                howToUse: [
                    "Commit to a consistent schedule, even if not daily",
                    "Don't skip the coding challenges - they reinforce learning",
                    "Extend projects with your own features after completing the lessons",
                    "Join the course community to share progress and get feedback",
                    "Document your journey to showcase your growth",
                ],
                complementaryCourses: [
                    "Python for Data Science and Machine Learning",
                    "Advanced Python: Design Patterns",
                    "Flask Web Development",
                ],
            },
        },
        {
            id: "javascript-complete",
            title: "The Complete JavaScript Course 2024",
            duration: "10 weeks",
            description: "Master JavaScript with the most comprehensive course on the market",
            image: "/courses/js.webp",
            instructor: "Jonas Schmedtmann",
            rating: 4.8,
            students: 1680,
            price: "$19.99",
            level: "Beginner to Advanced",
            category: "Web Development",
            details:
                "From fundamentals to advanced topics like OOP, asynchronous JavaScript, and modern tooling. Build real-world projects including games and applications.",
            link: "/courses/javascript-complete",
            externalUrl: "https://www.udemy.com/course/the-complete-javascript-course/",
            topics: ["JavaScript Fundamentals", "DOM Manipulation", "OOP", "Asynchronous JS", "Modern JS (ES6+)", "Tooling"],
            prerequisites: ["Basic HTML and CSS knowledge", "No JavaScript experience required"],
            outcomes: [
                "Build complex applications with vanilla JavaScript",
                "Understand JavaScript from core principles to advanced patterns",
                "Work with modern JavaScript features and best practices",
                "Implement real-world projects from scratch",
            ],
            schedule: "Self-paced",
            ourTake: {
                summary: "A thorough and well-structured JavaScript course that balances theory with practical application.",
                strengths: [
                    "Exceptional explanation of JavaScript fundamentals",
                    "Real-world projects that demonstrate practical applications",
                    "Clear explanations of complex topics like closures and prototypes",
                    "Modern JavaScript features and best practices",
                ],
                weaknesses: [
                    "Some sections on older JavaScript approaches could be condensed",
                    "Limited coverage of testing frameworks",
                    "Could include more on TypeScript integration",
                ],
                idealFor: [
                    "Web development beginners wanting a solid JavaScript foundation",
                    "Developers transitioning from other programming languages",
                    "Self-taught developers with knowledge gaps",
                ],
                howToUse: [
                    "Code along with every example - don't just watch",
                    "Complete all challenges before checking solutions",
                    "Take notes on core concepts, especially closures and async patterns",
                    "Build your own variations of the projects to reinforce learning",
                    "Review the final projects' code structure multiple times",
                ],
                complementaryCourses: [
                    "Advanced JavaScript Concepts",
                    "React - The Complete Guide",
                    "Testing JavaScript Applications",
                ],
            },
        },
    ]

    const selectedCourse = recommendedCourses.find((course) => course.id === selectedCourseId) || recommendedCourses[0]

    return (
        <div className="bg-[#070823] text-white min-h-screen">
            {/* Header Section */}
            <section className="pt-12 pb-6 md:pt-20 md:pb-10 bg-gradient-to-b from-[#84BC54]/20 to-transparent">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-[#84BC54] hover:bg-[#84BC54]/90 mb-4 mt-10">Course Recommendations</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert-Curated Learning Paths</h1>
                        <p className="text-xl text-[#7C7D87] mb-8">
                            Discover the best courses with our detailed analysis and guidance on how to maximize your learning
                            experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Sidebar - Course List */}
                        <div className="lg:col-span-3">
                            <div className="bg-[#1a1f4d] rounded-xl p-6 sticky top-6">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-[#84BC54]" />
                                    Recommended Courses
                                </h2>
                                <div className="space-y-2">
                                    {recommendedCourses.map((course) => (
                                        <button
                                            key={course.id}
                                            onClick={() => setSelectedCourseId(course.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${selectedCourseId === course.id
                                                    ? "bg-[#84BC54]/20 text-[#84BC54]"
                                                    : "hover:bg-white/10 text-white/80"
                                                }`}
                                        >
                                            <div className="font-medium">
                                                {course.title.length > 30 ? `${course.title.substring(0, 30)}...` : course.title}
                                            </div>
                                            <div className="text-sm flex items-center gap-2 mt-1">
                                                <User className="w-3 h-3" />
                                                <span>{course.instructor}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content - Course Details */}
                        <div className="lg:col-span-9">
                            {/* Course Header */}
                            <div className="bg-[#1a1f4d] rounded-xl overflow-hidden mb-8">
                                <div className="relative">
                                    <Image
                                        src={selectedCourse.image || "/placeholder.svg"}
                                        alt={selectedCourse.title}
                                        width={800}
                                        height={400}
                                        className="w-full object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className="bg-[#84BC54] hover:bg-[#84BC54]/90">{selectedCourse.category}</Badge>
                                                <Badge variant="outline" className="border-[#84BC54]/30 text-white/80">
                                                    {selectedCourse.level}
                                                </Badge>
                                            </div>
                                            <h1 className="text-2xl md:text-3xl font-bold">{selectedCourse.title}</h1>
                                            <p className="text-[#7C7D87] mt-2">{selectedCourse.description}</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-[#84BC54]">{selectedCourse.price}</div>
                                            <a href={selectedCourse.externalUrl} target="_blank" rel="noopener noreferrer">
                                                <Button className="mt-2 bg-[#84BC54] hover:bg-[#84BC54]/90 text-white">
                                                    View Course <ExternalLink className="w-4 h-4 ml-2" />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                                        <div className="flex flex-col">
                                            <span className="text-[#7C7D87] text-sm">Instructor</span>
                                            <span className="font-medium flex items-center gap-1">
                                                <User className="w-4 h-4 text-[#84BC54]" />
                                                {selectedCourse.instructor}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#7C7D87] text-sm">Duration</span>
                                            <span className="font-medium flex items-center gap-1">
                                                <Clock className="w-4 h-4 text-[#84BC54]" />
                                                {selectedCourse.duration}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#7C7D87] text-sm">Rating</span>
                                            <span className="font-medium flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                {selectedCourse.rating} ({selectedCourse.students.toLocaleString()} students)
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#7C7D87] text-sm">Schedule</span>
                                            <span className="font-medium flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-[#84BC54]" />
                                                {selectedCourse.schedule}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Our Take Section */}
                            <div className="bg-[#1a1f4d] rounded-xl p-6 mb-8">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#84BC54]">
                                    <LightbulbIcon className="w-6 h-6" />
                                    Our Take on the Course
                                </h2>

                                <div className="mb-6">
                                    <p className="text-lg mb-4">{selectedCourse.ourTake.summary}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-[#84BC54]/10 p-5 rounded-lg border border-[#84BC54]/20">
                                        <h3 className="font-semibold text-[#84BC54] mb-3 flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Course Strengths
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedCourse.ourTake.strengths.map((strength, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-[#84BC54] mt-1">•</span>
                                                    <span>{strength}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#1a1f4d] p-5 rounded-lg border border-white/10">
                                        <h3 className="font-semibold text-white/90 mb-3 flex items-center gap-2">
                                            <Layers className="w-5 h-5 text-[#7C7D87]" />
                                            Areas for Improvement
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedCourse.ourTake.weaknesses.map((weakness, index) => (
                                                <li key={index} className="flex items-start gap-2 text-[#7C7D87]">
                                                    <span className="mt-1">•</span>
                                                    <span>{weakness}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                        <Users2 className="w-5 h-5 text-[#84BC54]" />
                                        Ideal For
                                    </h3>
                                    <ul className="space-y-2">
                                        {selectedCourse.ourTake.idealFor.map((ideal, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-[#84BC54] flex-shrink-0 mt-0.5" />
                                                <span>{ideal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#070823] p-6 rounded-xl border border-[#84BC54]/20">
                                    <h3 className="font-semibold text-[#84BC54] mb-4 flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5" />
                                        How to Get the Most Out of This Course
                                    </h3>
                                    <ol className="space-y-4">
                                        {selectedCourse.ourTake.howToUse.map((tip, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="bg-[#84BC54]/20 text-[#84BC54] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    {index + 1}
                                                </div>
                                                <p>{tip}</p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            {/* Course Details Tabs */}
                            <div className="bg-[#1a1f4d] rounded-xl overflow-hidden">
                                <Tabs defaultValue="topics" className="w-full">
                                    <TabsList className="grid grid-cols-3 bg-[#070823]">
                                        <TabsTrigger value="topics">Topics Covered</TabsTrigger>
                                        <TabsTrigger value="prerequisites">Prerequisites</TabsTrigger>
                                        <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="topics" className="p-6">
                                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                            <ListChecks className="w-5 h-5 text-[#84BC54]" />
                                            Course Curriculum
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {selectedCourse.topics.map((topic, index) => (
                                                <div key={index} className="bg-[#070823] p-3 rounded-lg flex items-center gap-3">
                                                    <div className="bg-[#84BC54]/20 p-2 rounded-full">
                                                        <CheckCircle className="w-4 h-4 text-[#84BC54]" />
                                                    </div>
                                                    <span>{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="prerequisites" className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">Before You Start</h3>
                                        <ul className="space-y-3">
                                            {selectedCourse.prerequisites.map((prerequisite, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-[#84BC54] mt-1">•</span>
                                                    <span>{prerequisite}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>

                                    <TabsContent value="outcomes" className="p-6">
                                        <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {selectedCourse.outcomes.map((outcome, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-[#84BC54] flex-shrink-0 mt-0.5" />
                                                    <span>{outcome}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>

                            {/* Complementary Courses */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">Complementary Courses</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {selectedCourse.ourTake.complementaryCourses.map((course, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#1a1f4d] p-4 rounded-lg border border-white/10 hover:border-[#84BC54]/30 transition-colors"
                                        >
                                            <h4 className="font-medium mb-2">{course}</h4>
                                            <Button variant="link" className="text-[#84BC54] p-0 h-auto">
                                                Explore <ArrowRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-t from-[#84BC54]/20 to-transparent mt-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Learning?</h2>
                        <p className="text-[#7C7D87] mb-8">
                            Follow our expert recommendations and learning strategies to make the most of your educational journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-[#84BC54] hover:bg-[#84BC54]/90 text-white">
                                        Get Personalized Recommendations
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
                                        <p className="text-[#7C7D87]">
                                            We're working on a personalized recommendation system based on your skills, goals, and learning
                                            style. Join our waitlist to be the first to know when it's available.
                                        </p>
                                        <Button className="mt-6 bg-[#84BC54] hover:bg-[#84BC54]/90 text-white">Join Waitlist</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <a href="#courses">
                                <Button variant="outline" className="border-[#84BC54] text-[#84BC54] hover:bg-[#84BC54]/10">
                                    Browse All Courses
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

