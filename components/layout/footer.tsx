import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#84BC54]">
              <Image
                src="/aveti-logo.png"
                alt="Aveti-Learning"
                width={150}
                height={40}
              />
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-[#7C7D87]">M-74, Ground Floor, Baramunda Housing Board Colony, Near KV-2, Bhubaneswar, Odisha - 751003</p>
            </div>
            <div>
              <p className="font-semibold">Contact:</p>
              <p className="text-[#7C7D87]">1800 123 456</p>
              <p className="text-[#7C7D87]">info@example.io</p>
            </div>
            <div className="flex gap-4">
              {["facebook", "instagram", "twitter", "linkedin", "youtube"].map((social) => (
                <Link key={social} href={`#${social}`} className="text-[#7C7D87] hover:text-[#84BC54]">
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-[#7C7D87]/20 rounded-full" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            {["About Us", "Courses", "Mentorship", "Success Stories", "Blog"].map((link) => (
              <Link key={link} href="#" className="block text-[#7C7D87] hover:text-[#84BC54]">
                {link}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            {["Documentation", "Tutorials", "Community", "FAQ", "Support"].map((link) => (
              <Link key={link} href="#" className="block text-[#7C7D87] hover:text-[#84BC54]">
                {link}
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((link) => (
              <Link key={link} href="#" className="block text-[#7C7D87] hover:text-[#84BC54]">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center">
          <p className="text-sm text-[#7C7D87]">© 2025 Aveti-learning. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}