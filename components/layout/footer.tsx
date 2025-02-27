import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Image
              src="/aveti-logo.png"
              alt="Aveti Learning"
              width={150}
              height={40}
            />
            <p className="text-sm text-[#7C7D87]">
              M-74, Ground Floor, Baramunda Housing Board Colony, Near KV-2, Bhubaneswar, Odisha - 751003
            </p>
            <p className="text-sm text-[#7C7D87]">+91 78940 40614</p>
            <p className="text-sm text-[#7C7D87]">hr@shikhya.org</p>
            <div className="flex gap-4 mt-4">
              <Link href="https://www.facebook.com/AvetiLearningEducation/" className="text-[#7C7D87] hover:text-[#84BC54]">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-[#7C7D87] hover:text-[#84BC54]">
                <Instagram size={24} />
              </Link>
              <Link href="https://x.com/avetilearning" className="text-[#7C7D87] hover:text-[#84BC54]">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-[#7C7D87] hover:text-[#84BC54]">
                <Linkedin size={24} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCmOVzW5J5FONqnC_iOb49uw" className="text-[#7C7D87] hover:text-[#84BC54]">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            {[
              { name: "About Us", href: "#about" },
              { name: "Courses", href: "#courses" },
              { name: "Our Team", href: "#team" },
              { name: "Success Stories", href: "#success" },
              { name: "Join Us", href: "#join-us" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="block text-[#7C7D87] hover:text-[#84BC54] text-sm">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Legal</h3>
            {[
              { name: "Privacy Policy", href: "#privacy" },
              { name: "Terms of Service", href: "#terms" },
              { name: "Cookie Policy", href: "#cookies" },
            ].map((link) => (
              <Link key={link.name} href={link.href} className="block text-[#7C7D87] hover:text-[#84BC54] text-sm">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center">
          <p className="text-sm text-[#7C7D87]">© 2025 Aveti Learning. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#privacy" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-sm text-[#7C7D87] hover:text-[#84BC54]">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
