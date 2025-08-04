import { Dribbble, Facebook, Github, Instagram, Mail, MapPin, Phone, Twitter, Code } from "lucide-react"
import Link from "next/link"

const data = {
  facebookLink: "https://facebook.com/vishwadev",
  instaLink: "https://instagram.com/vishwadev",
  twitterLink: "https://twitter.com/vishwadev",
  githubLink: "https://github.com/vishwadev",
  dribbbleLink: "https://dribbble.com/vishwadev",
  services: {
    showcase: "/projects",
    community: "/community",
    subdomains: "/subdomains",
    nex10: "/nex10-labs",
  },
  about: {
    story: "/about",
    team: "/team",
    blog: "/blog",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    docs: "/docs",
  },
  contact: {
    email: "hello@vishwadev.tech",
    phone: "+91 9876543210",
    address: "Bangalore, Karnataka, India",
  },
  company: {
    name: "VishwaDev",
    description:
      "Empowering student developers to showcase their innovations and build meaningful careers in technology. Join our community of creators building the future.",
    logo: "/placeholder.svg?height=32&width=32",
  },
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink },
  { icon: Dribbble, label: "Dribbble", href: data.dribbbleLink },
]

const aboutLinks = [
  { text: "Our Story", href: data.about.story },
  { text: "Meet the Team", href: data.about.team },
  { text: "Blog", href: data.about.blog },
  { text: "Careers", href: data.about.careers },
]

const serviceLinks = [
  { text: "Project Showcase", href: data.services.showcase },
  { text: "Developer Community", href: data.services.community },
  { text: "Custom Subdomains", href: data.services.subdomains },
  { text: "Nex10 Labs", href: data.services.nex10 },
]

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Documentation", href: data.help.docs, hasIndicator: true },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export default function Footer4Col() {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-16 w-full">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 sm:justify-start items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold text-white">{data.company.name}</span>
            </div>
            <p className="text-white/60 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-white transition-colors">
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link className="text-white/60 hover:text-white transition-colors" href={href}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Platform</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link className="text-white/60 hover:text-white transition-colors" href={href}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Resources</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={`${
                        hasIndicator
                          ? "group flex justify-center gap-1.5 sm:justify-start"
                          : "text-white/60 hover:text-white transition-colors"
                      }`}
                    >
                      <span className="text-white/60 hover:text-white transition-colors">{text}</span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-blue-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-blue-400 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a className="flex items-center justify-center gap-1.5 sm:justify-start" href="#">
                      <Icon className="text-blue-400 size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-white/60 -mt-0.5 flex-1 not-italic">{text}</address>
                      ) : (
                        <span className="text-white/60 flex-1">{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white/60">
              <span className="block sm:inline">All rights reserved.</span>
            </p>
            <p className="text-white/50 mt-4 text-sm sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}. Built with ❤️ for the developer community.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
