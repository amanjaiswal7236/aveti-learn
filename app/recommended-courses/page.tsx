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
        {
            id: "postgresql-masterclass",
            title: "SQL and PostgreSQL: The Complete Developer's Guide",
            duration: "21 hours",
            description: "Become an expert with SQL and PostgreSQL! Master database design, administration, and performance while building real-world projects",
            image: "/courses/sql-postgreSQL.webp",
            instructor: "Stephen Grider",
            rating: 4.7,
            students: 53000,
            price: "$19.99",
            level: "All Levels",
            category: "Database",
            details:
                "The ultimate course for learning SQL and PostgreSQL, from basic queries to advanced features. Understand how databases work behind the scenes and learn to write efficient queries, design schemas, and implement custom functionality.",
            link: "/courses/postgresql-masterclass",
            externalUrl: "https://www.udemy.com/course/sql-and-postgresql/",
            topics: ["SQL Basics", "Table Design", "Joins", "Aggregations", "Common Table Expressions", "Indexes", "Performance Tuning", "Views", "Schemas", "Advanced PostgreSQL Features"],
            prerequisites: ["No prior SQL or database experience required", "Basic programming concepts helpful but not necessary"],
            outcomes: [
                "Write complex SQL queries with confidence",
                "Design and structure a database",
                "Implement PostgreSQL-specific features like materialized views and window functions",
                "Understand indexing and query optimization",
                "Use transactions and locking for data integrity",
                "Create internal validation rules to enforce data consistency"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An outstanding course that thoroughly covers both SQL fundamentals and PostgreSQL's unique features with practical, real-world examples.",
                strengths: [
                    "Exceptionally clear explanations with visual aids",
                    "Practical approach with real-world scenarios",
                    "Deep dive into PostgreSQL-specific features",
                    "Strong focus on performance optimization",
                    "Excellent coverage of database design principles"
                ],
                weaknesses: [
                    "Limited coverage of database administration topics",
                    "Could include more on cloud deployment considerations",
                    "Some advanced security topics could be expanded"
                ],
                idealFor: [
                    "Web developers needing database skills",
                    "Data analysts looking to improve query writing",
                    "Backend engineers working with PostgreSQL",
                    "Anyone transitioning to database-focused roles"
                ],
                howToUse: [
                    "Set up a local PostgreSQL environment to follow along",
                    "Write and test every query shown in the course",
                    "Create your own database project as you progress",
                    "Practice explaining query execution plans",
                    "Apply performance optimizations to your own queries"
                ],
                complementaryCourses: [
                    "Database Design and Normalization",
                    "Node.js with PostgreSQL Integration",
                    "Database DevOps and CI/CD",
                    "Advanced SQL for Data Analysis"
                ],
            },
        },
        {
            id: "linux-fundamentals",
            title: "Linux Administration: The Complete Linux Bootcamp",
            duration: "10 weeks",
            description: "Master Linux from basic commands to advanced system administration, shell scripting, and server management",
            image: "/courses/linux.webp",
            instructor: "Imran Afzal",
            rating: 4.8,
            students: 1850,
            price: "$19.99",
            level: "Beginner to Advanced",
            category: "System Administration",
            details:
                "A hands-on Linux course that covers everything from basic terminal commands to advanced system administration. Learn to manage servers, automate tasks with shell scripts, and configure secure Linux environments.",
            link: "/courses/linux-fundamentals",
            externalUrl: "https://www.udemy.com/course/linux-administration-bootcamp/",
            topics: ["Terminal Basics", "File System", "User Management", "Permissions", "Process Management", "Shell Scripting", "Package Management", "Networking", "Security", "Service Configuration"],
            prerequisites: ["Basic computer knowledge", "No prior Linux experience required"],
            outcomes: [
                "Navigate and manage Linux systems with confidence",
                "Write efficient shell scripts for automation",
                "Configure and secure Linux servers",
                "Implement system monitoring and maintenance",
                "Troubleshoot common Linux problems",
                "Deploy and manage web servers and databases"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An excellent practical introduction to Linux that builds progressively from basics to advanced administrative tasks.",
                strengths: [
                    "Practical, command-line focused approach",
                    "Comprehensive coverage of essential Linux skills",
                    "Excellent real-world scenarios and examples",
                    "Strong focus on security and best practices",
                    "Applicable across various Linux distributions"
                ],
                weaknesses: [
                    "Could include more on containerization with Docker",
                    "Limited coverage of advanced networking concepts",
                    "Some cloud-specific Linux topics could be expanded"
                ],
                idealFor: [
                    "Aspiring system administrators",
                    "Developers needing stronger Linux skills",
                    "IT professionals transitioning to Linux environments",
                    "DevOps engineers building their foundational knowledge"
                ],
                howToUse: [
                    "Set up a virtual machine or dual-boot to practice",
                    "Type every command yourself rather than copy-pasting",
                    "Create your own challenge scenarios to solve",
                    "Build a personal Linux server project as you learn",
                    "Document commands and configurations in your own cheat sheet"
                ],
                complementaryCourses: [
                    "Shell Scripting: Automation for System Administrators",
                    "Docker and Kubernetes on Linux",
                    "Linux Security Essentials",
                    "DevOps with Linux"
                ],
            },
        },
        {
            id: "nvidia-gpu-fundamentals",
            title: "Fundamentals of Accelerated Computing with CUDA Python",
            duration: "8 hours",
            description: "Learn the fundamentals of accelerating Python applications with NVIDIA GPUs and the CUDA programming model",
            image: "/courses/cuda.jpg",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.7,
            students: 2100,
            price: "Free",
            level: "Intermediate",
            category: "Programming",
            details:
                "Learn how to accelerate Python applications with NVIDIA GPUs using Numba, a just-in-time, accelerated Python compiler, and the CUDA programming model. Gain hands-on experience optimizing and accelerating Python code for high-performance computing.",
            link: "/courses/nvidia-gpu-fundamentals",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-07+V1",
            topics: ["GPU Programming", "CUDA Python", "Numba", "Parallel Computing", "Performance Optimization", "Accelerated Computing", "Scientific Computing"],
            prerequisites: ["Basic Python knowledge", "Understanding of programming fundamentals", "Familiarity with NumPy is helpful"],
            outcomes: [
                "Accelerate Python applications using NVIDIA GPUs",
                "Use Numba to compile Python code for the GPU",
                "Implement parallel algorithms with CUDA Python",
                "Understand and apply performance optimization techniques",
                "Solve real-world computational problems using GPU acceleration"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An excellent introduction to GPU programming with Python that makes parallel computing accessible without requiring C/C++ knowledge.",
                strengths: [
                    "Hands-on approach with practical exercises",
                    "Clear explanations of GPU computing concepts",
                    "Uses Python instead of lower-level languages for accessibility",
                    "Real-world performance comparisons between CPU and GPU implementations",
                    "Covers both basic and advanced optimization techniques"
                ],
                weaknesses: [
                    "Limited coverage of more advanced CUDA features",
                    "Could include more on multi-GPU programming",
                    "Some sections assume more mathematical background than stated"
                ],
                idealFor: [
                    "Data scientists looking to accelerate numerical computations",
                    "Python developers working with computation-heavy applications",
                    "Machine learning practitioners wanting to understand GPU acceleration",
                    "Scientific computing professionals seeking performance improvements"
                ],
                howToUse: [
                    "Complete all hands-on exercises on a system with an NVIDIA GPU",
                    "Compare performance benchmarks on your own hardware",
                    "Start with simple algorithms before moving to complex implementations",
                    "Create your own parallel versions of common algorithms as practice",
                    "Apply the techniques to your existing Python projects to measure gains"
                ],
                complementaryCourses: [
                    "CUDA C/C++ Fundamentals",
                    "Accelerating Data Science with GPU Computing",
                    "Deep Learning Fundamentals",
                    "High-Performance Python for Scientific Computing"
                ],
            },
        },
        {
            id: "nvidia-ai-for-all",
            title: "AI for All: From Basics to GenAI Practice",
            duration: "20 hours",
            description: "Learn the fundamentals of AI and gain practical experience with generative AI through hands-on labs",
            image: "/courses/nvidia.webp",
            instructor: "NVIDIA Academy",
            rating: 4.8,
            students: 3200,
            price: "Free",
            level: "Beginner to Intermediate",
            category: "Artificial Intelligence",
            details:
                "A comprehensive introduction to artificial intelligence that takes you from core concepts to practical applications in generative AI. Develop a strong foundation in AI principles and gain hands-on experience with cutting-edge generative models.",
            link: "/courses/nvidia-ai-for-all",
            externalUrl: "https://academy.nvidia.com/en/course/ai-for-all-from-basics-to-genai-practice/?cm=81220",
            topics: ["AI Fundamentals", "Machine Learning", "Deep Learning", "Neural Networks", "Generative AI", "LLMs", "Prompt Engineering", "AI Ethics"],
            prerequisites: ["Basic computer skills", "No prior AI experience required", "Basic programming concepts helpful but not necessary"],
            outcomes: [
                "Understand core AI and machine learning concepts",
                "Recognize different types of AI applications and their use cases",
                "Gain practical experience with generative AI models",
                "Apply effective prompt engineering techniques",
                "Create and deploy simple AI-powered applications",
                "Evaluate ethical considerations in AI development and deployment"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An accessible and comprehensive introduction to AI that balances theoretical foundations with practical applications in generative AI.",
                strengths: [
                    "Excellent progression from basic concepts to advanced applications",
                    "Hands-on labs that reinforce theoretical knowledge",
                    "Strong focus on generative AI and its practical uses",
                    "Clear explanations of complex topics for beginners",
                    "Up-to-date content covering the latest AI developments"
                ],
                weaknesses: [
                    "Some labs may require more computational resources than available",
                    "Could include more intermediate programming exercises",
                    "Limited coverage of MLOps and deployment considerations"
                ],
                idealFor: [
                    "Complete beginners to AI and machine learning",
                    "Business professionals seeking to understand AI capabilities",
                    "Students considering AI/ML career paths",
                    "Developers wanting to integrate generative AI into applications",
                    "Educators looking to incorporate AI concepts into curriculum"
                ],
                howToUse: [
                    "Complete all conceptual modules before attempting hands-on labs",
                    "Practice prompt engineering techniques with various models",
                    "Form study groups to discuss ethical considerations and applications",
                    "Create a personal project applying course concepts",
                    "Document your learning journey and build a portfolio of examples"
                ],
                complementaryCourses: [
                    "Practical Deep Learning for Coders",
                    "Prompt Engineering for Developers",
                    "Introduction to PyTorch",
                    "Ethics in Artificial Intelligence",
                    "Building Applications with LLMs"
                ],
            },
        },
        {
            id: "nvidia-jetson-nano",
            title: "Getting Started with AI on Jetson Nano",
            duration: "8 hours",
            description: "Learn how to build and deploy AI applications on the NVIDIA Jetson Nano platform for edge computing and robotics",
            image: "/courses/jetson.png",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.6,
            students: 2800,
            price: "Free",
            level: "Intermediate",
            category: "Edge Computing",
            details:
                "This hands-on course teaches you how to set up a Jetson Nano and use it for AI applications at the edge. Learn to build and deploy computer vision models, process real-time data from sensors, and create intelligent robotic applications.",
            link: "/courses/nvidia-jetson-nano",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-RX-02+V2",
            topics: ["Edge Computing", "Computer Vision", "Jetson Nano", "Deep Learning", "IoT", "Robotics", "Real-time AI", "Model Deployment"],
            prerequisites: ["Basic Python knowledge", "Understanding of Linux commands", "Familiarity with deep learning concepts", "Jetson Nano hardware (recommended)"],
            outcomes: [
                "Set up and configure a Jetson Nano for AI workloads",
                "Deploy pre-trained models for image classification and object detection",
                "Process real-time video streams for AI applications",
                "Optimize neural networks for edge performance",
                "Integrate sensors for real-world data collection",
                "Build end-to-end AI applications for edge use cases"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An excellent practical course for those interested in edge AI and robotics, providing hands-on experience with real hardware and software tools.",
                strengths: [
                    "Practical, project-based learning approach",
                    "Real-world applications in robotics and IoT",
                    "Hands-on experience with actual hardware",
                    "Excellent introduction to edge computing concepts",
                    "Clear progression from basic setup to complete applications"
                ],
                weaknesses: [
                    "Requires Jetson Nano hardware for optimal experience",
                    "Limited coverage of advanced deployment scenarios",
                    "Some projects would benefit from more troubleshooting guidance"
                ],
                idealFor: [
                    "Robotics enthusiasts and makers",
                    "IoT developers working on smart devices",
                    "Computer vision practitioners",
                    "Embedded systems engineers",
                    "Students exploring edge AI applications"
                ],
                howToUse: [
                    "Acquire a Jetson Nano device before starting the course",
                    "Set up a dedicated workspace for hardware experiments",
                    "Follow each project completely before moving to the next",
                    "Document challenges and solutions during the setup process",
                    "Extend the provided projects with your own sensors or use cases",
                    "Join the Jetson community forums for additional support"
                ],
                complementaryCourses: [
                    "Fundamentals of Deep Learning",
                    "Computer Vision with OpenCV",
                    "Embedded Linux Programming",
                    "ROS (Robot Operating System) Basics",
                    "TensorRT for Deep Learning Inference"
                ],
            },
        },
        {
            id: "nvidia-deep-learning-fundamentals",
            title: "Fundamentals of Deep Learning",
            duration: "8 hours",
            description: "Learn the foundations of deep learning and neural networks using PyTorch, from basic concepts to training your own models",
            image: "/courses/deep.jpg",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.8,
            students: 5600,
            price: "Free",
            level: "Beginner to Intermediate",
            category: "Artificial Intelligence",
            details:
                "A comprehensive introduction to deep learning that covers neural network fundamentals, training methodologies, and practical implementation using PyTorch. Build and train neural networks for image classification while understanding key concepts in modern AI.",
            link: "/courses/nvidia-deep-learning-fundamentals",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+T-FX-01+V1",
            topics: ["Neural Networks", "PyTorch", "Deep Learning", "Convolutional Neural Networks", "Model Training", "Image Classification", "Transfer Learning", "GPU Acceleration"],
            prerequisites: ["Basic Python programming", "Understanding of basic linear algebra", "Familiarity with machine learning concepts (helpful but not required)"],
            outcomes: [
                "Understand the fundamental concepts of deep learning",
                "Implement neural networks using PyTorch",
                "Train models for image classification tasks",
                "Apply transfer learning to improve model performance",
                "Utilize GPU acceleration for deep learning workflows",
                "Evaluate and improve model performance",
                "Deploy trained models for inference"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An excellent entry point to deep learning that balances theoretical understanding with practical implementation, providing a solid foundation for more advanced topics.",
                strengths: [
                    "Clear explanations of complex neural network concepts",
                    "Hands-on approach with PyTorch implementation",
                    "Well-structured progression from basics to practical applications",
                    "Effective use of visual aids to explain network architectures",
                    "Practical focus on GPU acceleration for performance"
                ],
                weaknesses: [
                    "Could include more coverage of recent architectures like transformers",
                    "Limited exploration of natural language processing applications",
                    "Some advanced optimization techniques are only briefly covered"
                ],
                idealFor: [
                    "Software developers new to AI and deep learning",
                    "Data scientists transitioning to deep learning",
                    "Computer science students specializing in AI",
                    "Technical professionals seeking practical deep learning skills",
                    "Researchers beginning work with neural networks"
                ],
                howToUse: [
                    "Set up a GPU-enabled environment before starting",
                    "Complete all coding exercises to reinforce concepts",
                    "Build the example models from scratch without looking at solutions first",
                    "Experiment with hyperparameter tuning to understand their effects",
                    "Apply the techniques to a personal project after completing the course",
                    "Revisit challenging concepts with supplementary resources"
                ],
                complementaryCourses: [
                    "Computer Vision with Deep Learning",
                    "Natural Language Processing with Transformers",
                    "Advanced PyTorch Techniques",
                    "Deep Learning for Time Series Data",
                    "MLOps: Deploying AI Models at Scale"
                ],
            },
        },
        {
            id: "nvidia-rapids-data-science",
            title: "Accelerating Data Science Workflows with RAPIDS",
            duration: "8 hours",
            description: "Learn how to accelerate end-to-end data science workflows using NVIDIA RAPIDS, enabling GPU acceleration for data preparation, model training, and visualization",
            image: "/courses/rapids.webp",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.7,
            students: 2400,
            price: "Free",
            level: "Intermediate",
            category: "Data Science",
            details:
                "This course teaches you how to accelerate your entire data science pipeline using NVIDIA's RAPIDS suite of open-source libraries. Learn to leverage GPU acceleration for data preprocessing, feature engineering, model training, and visualization to achieve orders of magnitude speedup over CPU-only workflows.",
            link: "/courses/nvidia-rapids-data-science",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-IV-02+V2",
            topics: ["RAPIDS", "GPU-Accelerated Data Science", "cuDF", "cuML", "Data Preprocessing", "Machine Learning", "XGBoost", "Data Visualization", "Big Data Processing"],
            prerequisites: ["Python programming experience", "Familiarity with pandas and scikit-learn", "Basic understanding of machine learning concepts", "Experience with data analysis workflows"],
            outcomes: [
                "Accelerate data preprocessing using GPU-based DataFrame operations",
                "Implement GPU-accelerated machine learning algorithms",
                "Leverage RAPIDS for end-to-end data science pipelines",
                "Visualize large datasets efficiently with GPU acceleration",
                "Process and analyze datasets too large for CPU memory",
                "Achieve significant speedups compared to CPU-only workflows",
                "Deploy optimized machine learning models for inference"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An excellent course for data scientists looking to overcome performance bottlenecks, offering practical techniques to accelerate every stage of the data science workflow.",
                strengths: [
                    "Comprehensive coverage of the entire data science pipeline",
                    "Impressive performance comparisons between CPU and GPU implementations",
                    "Practical focus on real-world, large-scale datasets",
                    "Seamless integration with familiar Python data science tools",
                    "Hands-on approach with reproducible examples"
                ],
                weaknesses: [
                    "Requires NVIDIA GPU hardware for practical implementation",
                    "Some advanced RAPIDS features are only briefly covered",
                    "Limited coverage of deployment strategies for production environments"
                ],
                idealFor: [
                    "Data scientists working with large datasets",
                    "Machine learning engineers facing performance bottlenecks",
                    "Data analysts needing faster exploratory data analysis",
                    "Organizations looking to optimize data science infrastructure",
                    "Researchers processing massive scientific or financial datasets"
                ],
                howToUse: [
                    "Ensure access to NVIDIA GPU hardware before starting",
                    "Benchmark your current workflows to measure improvements",
                    "Apply techniques incrementally to existing projects",
                    "Focus on the stages of your pipeline with the biggest bottlenecks",
                    "Document performance improvements for different operations",
                    "Create a migration plan for existing pandas/scikit-learn code"
                ],
                complementaryCourses: [
                    "Fundamentals of Accelerated Computing with CUDA Python",
                    "Distributed Data Processing with Dask",
                    "Deep Learning for Tabular Data",
                    "Big Data Processing with Apache Spark",
                    "Advanced Machine Learning Optimization Techniques"
                ],
            },
        },
        {
            id: "nvidia-deepstream-video-ai",
            title: "Building Video AI Applications at the Edge with NVIDIA DeepStream",
            duration: "8 hours",
            description: "Learn to build scalable video analytics applications using the NVIDIA DeepStream SDK for real-time AI inferencing at the edge",
            image: "/courses/rag.jpg",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.6,
            students: 1800,
            price: "Free",
            level: "Intermediate to Advanced",
            category: "Computer Vision",
            details:
                "This hands-on course teaches you how to develop efficient video analytics applications using NVIDIA's DeepStream SDK. Learn to deploy AI models for real-time video understanding, optimize performance on edge devices, and build end-to-end intelligent video analytics pipelines.",
            link: "/courses/nvidia-deepstream-video-ai",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1",
            topics: ["DeepStream SDK", "Video Analytics", "Edge AI", "Computer Vision", "Real-time Inferencing", "Multi-stream Processing", "AI Model Deployment", "Intelligent Video Analysis"],
            prerequisites: ["Programming experience in Python or C/C++", "Basic understanding of deep learning concepts", "Familiarity with computer vision applications", "Experience with Linux environments"],
            outcomes: [
                "Build end-to-end video analytics applications with DeepStream",
                "Deploy multiple AI models in a single efficient pipeline",
                "Process multiple video streams simultaneously in real-time",
                "Optimize AI inferencing for edge devices",
                "Integrate metadata and analytics into video processing workflows",
                "Develop custom plugins for specialized video processing needs",
                "Scale applications from edge devices to cloud deployments"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "An advanced and practical course that bridges the gap between computer vision models and production-ready video analytics applications at scale.",
                strengths: [
                    "Comprehensive coverage of the full DeepStream pipeline",
                    "Practical approach to real-world video analytics challenges",
                    "Focus on performance optimization for resource-constrained devices",
                    "Integration of multiple AI models in efficient pipelines",
                    "Emphasis on scalable, production-quality solutions"
                ],
                weaknesses: [
                    "Steep learning curve for those new to video processing",
                    "Requires NVIDIA GPU hardware for hands-on exercises",
                    "Some sections could provide more troubleshooting guidance",
                    "Limited coverage of custom model training integration"
                ],
                idealFor: [
                    "Computer vision engineers building production applications",
                    "Edge computing developers focusing on video analytics",
                    "IoT solution architects integrating intelligent video",
                    "Smart city and industrial vision system developers",
                    "Security and surveillance application developers"
                ],
                howToUse: [
                    "Set up a development environment with compatible NVIDIA hardware",
                    "Work through examples incrementally to understand the full pipeline",
                    "Create a personal project that solves a specific video analytics problem",
                    "Benchmark performance on your target deployment hardware",
                    "Experiment with different models to understand performance tradeoffs",
                    "Join the DeepStream community for ongoing support"
                ],
                complementaryCourses: [
                    "Getting Started with AI on Jetson Nano",
                    "Fundamentals of Deep Learning",
                    "Computer Vision with TensorRT Optimization",
                    "Edge AI Development with NVIDIA Triton",
                    "Real-time Streaming Analytics Architecture"
                ],
            },
        },
        {
            id: "nvidia-llm-applications",
            title: "Applications of Large Language Models",
            duration: "8 hours",
            description: "Learn to deploy, optimize, and integrate large language models (LLMs) into real-world applications",
            image: "/courses/llm.jpg",
            instructor: "NVIDIA Deep Learning Institute",
            rating: 4.8,
            students: 3100,
            price: "Free",
            level: "Intermediate",
            category: "Natural Language Processing",
            details:
                "This course provides hands-on experience with deploying and using large language models for various applications. Learn about model deployment, prompt engineering, fine-tuning, and integration of LLMs into practical applications across different domains.",
            link: "/courses/nvidia-llm-applications",
            externalUrl: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+T-DS-03+V1",
            topics: ["Large Language Models", "Prompt Engineering", "LLM Fine-tuning", "Retrieval-Augmented Generation", "NLP Applications", "LLM Optimization", "Inference Deployment", "Model Evaluation"],
            prerequisites: ["Python programming experience", "Basic understanding of deep learning concepts", "Familiarity with natural language processing", "Experience with PyTorch or similar framework (helpful)"],
            outcomes: [
                "Deploy large language models efficiently using NVIDIA technologies",
                "Design effective prompts for various LLM applications",
                "Implement retrieval-augmented generation for knowledge-intensive tasks",
                "Fine-tune models for specific domains and applications",
                "Optimize LLM inference for production environments",
                "Evaluate and benchmark LLM performance",
                "Build end-to-end applications leveraging LLMs"
            ],
            schedule: "Self-paced",
            ourTake: {
                summary:
                    "A practical and timely course that bridges the gap between theoretical understanding of LLMs and their real-world implementation across diverse applications.",
                strengths: [
                    "Hands-on approach to working with state-of-the-art language models",
                    "Strong focus on practical deployment and optimization techniques",
                    "Excellent coverage of prompt engineering methodologies",
                    "Real-world applications across multiple domains",
                    "Integration with NVIDIA's hardware acceleration stack"
                ],
                weaknesses: [
                    "Requires significant computational resources for some exercises",
                    "Limited coverage of newest model architectures",
                    "Could provide more depth on ethical considerations and limitations",
                    "Some advanced fine-tuning techniques are only briefly covered"
                ],
                idealFor: [
                    "NLP practitioners implementing LLM-based solutions",
                    "Software engineers building AI-powered applications",
                    "Data scientists exploring text-based machine learning",
                    "ML engineers responsible for model deployment",
                    "Product developers integrating conversational AI features"
                ],
                howToUse: [
                    "Set up a GPU-enabled environment before starting the course",
                    "Practice prompt engineering techniques across different use cases",
                    "Create a project applying RAG to a specific knowledge domain",
                    "Benchmark different optimization approaches on your hardware",
                    "Join LLM communities to stay current with rapidly evolving techniques",
                    "Document prompt templates that work well for different applications"
                ],
                complementaryCourses: [
                    "Fundamentals of Deep Learning",
                    "Building Applications with Generative AI",
                    "Natural Language Processing with Transformers",
                    "AI for All: From Basics to GenAI Practice",
                    "Model Deployment and MLOps"
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

