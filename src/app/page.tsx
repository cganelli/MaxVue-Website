import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Eye,
  Smartphone,
  Zap,
  Shield,
  Star,
  Download,
  Play,
  Monitor,
  Globe,
  Camera,
  Image,
  Mic,
  Check,
  Glasses,
  Gauge,
  ScanLine,
  Users,
  ChevronRight,
} from "lucide-react";
import NextImage from "next/image";
import JoinEarlyAccessForm from "@/components/JoinEarlyAccessForm";

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a href="#main-content"
         className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:rounded focus:z-50">
        Skip to main content
      </a>
      
      <div className="min-h-screen bg-[#eaf1fd]">
        <main id="main-content">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#eaf1fd] py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="flex justify-start mb-4">
                <NextImage
                  src="/maxvue_logo_transparent_bg.png"
                  alt="MaxVue - Digital Vision Correction for Mild Presbyopia"
                  width={540}
                  height={180}
                  className="h-36 w-auto"
                />
              </div>
              
              {/* App icons row */}
              <div className="flex justify-center lg:justify-start items-center space-x-3 mb-5" aria-hidden="true">
                <Eye className="w-8 h-8 text-[#3399FF]" strokeWidth={1.5} aria-hidden="true" />
                <Smartphone
                  className="w-8 h-8 text-[#3399FF]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <Monitor className="w-8 h-8 text-[#3399FF]" strokeWidth={1.5} aria-hidden="true" />
                <Globe className="w-8 h-8 text-[#3399FF]" strokeWidth={1.5} aria-hidden="true" />
                <Camera className="w-8 h-8 text-[#3399FF]" strokeWidth={1.5} aria-hidden="true" />
                <Image className="w-8 h-8 text-[#3399FF]" strokeWidth={1.5} aria-hidden="true" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <div className="text-[#1e1e1e]">Sharper screens.</div>
                <div className="text-[#1D4262]">Fewer squints.</div>
              </h1>

              <p className="text-xl text-gray-700 mb-5 max-w-2xl">
                MaxVue digitally tunes on-screen text to reduce near-vision blur for many people with mild presbyopia or multifocal contacts.
              </p>

              <div className="mb-5">
                <a href="#join-waitlist" 
                   className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-[#1D4262] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4262] hover:opacity-90 active:opacity-80">
                  Join the Waitlist
                </a>
              </div>
            </div>

            {/* Right content - SVG image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="/!FINAL _iphone _wiki _before_after.svg"
                alt="MaxVue before and after comparison showing iPhone screen"
                className="w-full max-w-lg h-auto scale-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">
              Why Not Just Use Built-In Zoom or Magnifier Apps?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* MaxVue Advantage */}
            <div className="bg-[#1D4262] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-8 h-8 mr-3" />
                MaxVue Advantage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#3399FF] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-white">Applies real optical correction</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#3399FF] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-white">Works automatically across all phone content without layout distortion</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#3399FF] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-white">Always available - your phone becomes your glasses</span>
                </li>
              </ul>
            </div>

            {/* Other Solutions */}
            <div className="bg-[#eaf1fd] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1e1e1e] mb-6 flex items-center">
                <Smartphone className="w-8 h-8 mr-3 text-gray-600" />
                Other Solutions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-gray-700">Phone zoom makes text bigger but doesn't fix blurry focus</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-gray-700">Accessibility features and magnifier apps cause text to fall off the page and need constant adjustment</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-xl text-gray-700">Reading glasses you forget, lose, or don't have when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What MaxVue Does Section */}
      <section className="py-16 bg-[#eaf1fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">
              What MaxVue Does
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#3399FF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                Personalized Screen Tuning
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Uses a proprietary calibration to optimize weight, spacing, and edge contrast for your eyes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#3399FF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                Comfort Boost for Users
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Less squinting and less pinch-to-zoom for everyday reading.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#3399FF] rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                Works Where You Read
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Email, messages, documents, articles, and most apps.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              Results vary. People with mild near-vision blur or multifocal contacts often see the most benefit.
            </p>
            <a href="#join-waitlist" 
               className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-[#1D4262] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4262] hover:opacity-90 active:opacity-80">
              Join The Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon (R&D) Section */}
      <section className="py-16 pb-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">
              Coming Soon (R&amp;D)
            </h2>
          </div>
          
          <div className="bg-[#eaf1fd] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4 text-center">
              Prescription Strength Screen Protectors
            </h3>
            <p className="text-xl text-gray-700 mb-3">
              We're exploring thin optical overlays to replace your phone screen protector that enhance clarity beyond software—aimed at users with stronger near-vision needs. 
              If you're interested in accessory hardware when it's ready, join the waitlist.
            </p>
            <div className="mb-4 text-center">
              <a href="#join-waitlist" 
                 className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-[#1D4262] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D4262] hover:opacity-90 active:opacity-80">
                Join the Waitlist
              </a>
            </div>
            <p className="text-lg text-gray-600">
              Note: We're testing options; availability and specs may change. We'll share honest results as we learn.
            </p>
          </div>
        </div>
      </section>

      {/* Real Optical Technology Section */}
      <section className="py-16 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">
              Real Optical Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Glasses className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  Prescription-Strength Correction
                </h3>
                <p className="text-lg text-gray-700">
                  0.00D to +3.5D range covering full presbyopia spectrum
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanLine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  Advanced Image Processing
                </h3>
                <p className="text-lg text-gray-700">
                  Edge enhancement and clarity optimization algorithms
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  System-Wide Overlay
                </h3>
                <p className="text-lg text-gray-700">
                  Preserves app layouts while correcting vision
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  Multiple Vision Conditions
                </h3>
                <p className="text-lg text-gray-700">
                  Works with presbyopia, myopia, and mild astigmatism
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  60+ FPS Performance
                </h3>
                <p className="text-lg text-gray-700">
                  Real-time processing without lag or battery drain
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#3399FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#1e1e1e] mb-2">
                  Universal App Support
                </h3>
                <p className="text-lg text-gray-700">
                  Works across all apps without individual setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-[#eaf1fd] hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">
              Perfect For
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-[#3399FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                      Adults 40+ with Presbyopia
                    </h3>
                    <p className="text-lg text-gray-700">
                      Struggling with age-related farsightedness that makes phone text blurry
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye className="w-6 h-6 text-[#3399FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                      Mild Prescription Wearers
                    </h3>
                    <p className="text-lg text-gray-700">
                      Anyone with mild prescriptions who doesn't want to wear glasses for phone use
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Glasses className="w-6 h-6 text-[#3399FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                      Forgetful Glass Wearers
                    </h3>
                    <p className="text-lg text-gray-700">
                      People who lose reading glasses or don't have them when needed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Smartphone className="w-6 h-6 text-[#3399FF] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e1e1e] mb-2">
                      Zoom Fatigue Sufferers
                    </h3>
                    <p className="text-lg text-gray-700">
                      Anyone tired of constantly zooming and adjusting text size
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Early Access Section */}
      <section id="join-waitlist" className="pt-8 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_1.25fr] gap-8 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#1e1e1e] mb-4">
                Get Early Access
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Be among the first to experience MaxVue.
              </p>
              <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">
                What you'll get when you sign up
              </h3>
              <ul className="space-y-3 text-xl text-gray-700">
                <li>• Early access to the MaxVue calibration beta</li>
                <li>• Priority updates on our Screen Protector Add-Ons<br />&nbsp;&nbsp;&nbsp;program (for higher prescriptions)</li>
                <li>• Launch pricing and exclusive invites</li>
              </ul>
            </div>
            <div>
              <JoinEarlyAccessForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#eaf1fd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1e1e1e] mb-8 text-center">FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">Will MaxVue replace my readers?</h3>
              <p className="text-gray-700">
                For many users with mild presbyopia, MaxVue reduces how often you need readers for phone tasks. 
                It won't fully replace readers for everyone—especially higher prescriptions or low-light, tiny text scenarios.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">How is this different from zooming?</h3>
              <p className="text-gray-700">
                Zoom makes text bigger and it falls of the edge of the screen. MaxVue doesn't require you to scroll side to side. It also optimizes rendering (weight, spacing, edge contrast) based on your 
                calibration to make text easier to resolve at typical phone distance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">What if my prescription is stronger?</h3>
              <p className="text-gray-700">
                Software alone has limits. Join the Waitlist for updates on future accessory options.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">Is this a medical device?</h3>
              <p className="text-gray-700">
                No. MaxVue doesn't diagnose, treat, or cure any condition. If your vision changes, see an eye-care professional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">Will MaxVue change my photos or videos?</h3>
              <p className="text-gray-700">
                We prioritize text clarity. Images and videos are minimally altered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 bg-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e1e1e] mb-4">
              What <span className="text-[#3399FF]">MaxVue fans</span> say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#3399FF] fill-current"
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "Finally, I can read emails without constantly searching for
                    my reading glasses. MaxVue has transformed how I use my
                    phone."
                  </p>
                </div>
                <div>
                  <div className="font-bold text-[#1e1e1e]">
                    Andrew B., Greenwich, CT
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#3399FF] fill-current"
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "I love when my kids send me texts with their photos. I love
                    it even more that I can see them without glasses."
                  </p>
                </div>
                <div>
                  <div className="font-bold text-[#1e1e1e]">
                    Viviana G.,
                    <br />
                    North Miami, FL
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#3399FF] fill-current"
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "MaxVue makes doing the NY Times Crossword puzzle on my
                    phone so much easier. The clarity is perfect for my
                    presbyopia."
                  </p>
                </div>
                <div>
                  <div className="font-bold text-[#1e1e1e]">
                    Kristen L., Scarsdale, NY
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        </main>

      {/* Footer */}
        <footer role="contentinfo" className="bg-[#1e1e1e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-2">
                <NextImage
                  src="/maxvue_logo_transparent_bg.png"
                  alt="MaxVue Logo"
                  width={270}
                  height={90}
                  className="h-24 w-auto filter brightness-0 invert"
                />
              </div>
            <p className="text-white mb-4 font-bold text-lg">
              Sharper screens. Fewer squints.
            </p>
            
            <p className="text-white mb-4 text-lg">
              Be one of the first to try MaxVue. Help shape what's next.
            </p>
            <a href="#join-waitlist" 
               className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold bg-white text-[#1D4262] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:opacity-90 active:opacity-80 mb-6">
              Join the Waitlist
            </a>
            
            <p className="text-gray-400 text-sm max-w-4xl">
              MaxVue is not a medical device and is not a replacement for an eye exam. Individual results vary. <span className="font-medium">Clarity Promise:</span> No hype. We'll share measured results and clear limits.
            </p>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-white font-bold mb-4">
              © 2026 MaxVue. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              <a href="/accessibility" className="text-white hover:text-[#3399FF] transition-colors underline underline-offset-4">
                Accessibility Statement
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Hidden static form so Netlify detects it at build time */}
      <form name="early-access" data-netlify="true" netlify-honeypot="company" hidden>
        <input type="hidden" name="form-name" value="early-access" />
        <input name="company" autoComplete="off" />
        <input name="first_name" autoComplete="given-name" />
        <input name="last_name" autoComplete="family-name" />
        <input name="email" type="email" autoComplete="email" />
        <select name="smartphone" autoComplete="off"><option>iPhone</option><option>Android</option></select>
        <select name="multifocal" autoComplete="off"><option>Yes</option><option>No</option></select>
        <input type="checkbox" name="hardware_interest" autoComplete="off" />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}
