import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Target, Globe, Award, Users,Facebook, X, Linkedin, Youtube } from 'lucide-react';
import { useForm } from 'react-hook-form';
import TeamSection from './TeamSection'; // adjust path as needed
import IntroductionSection from './IntroductionSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@kheobs.org",
    subContent: "research@kheobs.org"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+855 XX XXX XXX",
    subContent: "Office Hours: 8:00 AM - 5:00 PM"
  },
  {
    icon: MapPin,
    title: "Address",
    content: "KHEOBS Research Laboratory",
    subContent: "Phnom Penh, Cambodia"
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 8:00 AM - 5:00 PM",
    subContent: "Saturday: 8:00 AM - 12:00 PM"
  }
];

const reasons = [
  "General Inquiry",
  "Research Collaboration",
  "Data Access Request",
  "Partnership Opportunity",
  "Student Internship",
  "Media Inquiry",
  "Other"
];

const milestones = [
  { year: "2018", event: "KHEOBS Lab established" },
  { year: "2019", event: "First climate monitoring station deployed" },
  { year: "2020", event: "Partnership with international research institutions" },
  { year: "2021", event: "Major publication in Nature Climate Change" },
  { year: "2022", event: "Launched community engagement program" },
  { year: "2023", event: "Awarded National Environmental Excellence Award" },
  { year: "2024", event: "Expanded research to 5 provinces" }
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
};

const About: React.FC = () => {

   const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise(r => setTimeout(r, 2000));
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      
      <section>
        <IntroductionSection/>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-800 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To conduct cutting-edge research in climate science and environmental monitoring, 
                develop innovative tools for sustainable development, and build capacity within 
                Cambodia's research community to address environmental challenges through 
                evidence-based solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading center for climate and environmental research in Southeast Asia, 
                fostering sustainable development practices and building resilient communities 
                that can adapt to environmental changes while preserving natural resources 
                for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <TeamSection />
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to advance climate research in Cambodia.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-2xl font-bold text-blue-800 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-blue-800 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section aria-labelledby="contact-section-title" className="py-16 bg-gray-50" id="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visible section title */}
          <motion.h2
            id="contact-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Contact Us
          </motion.h2>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium">{info.content}</p>
                <p className="text-gray-500 text-sm mt-1">{info.subContent}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register('firstName', { required: 'First name is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.firstName ? 'border-red-600' : 'border-gray-300'}`}
                    />
                    {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register('lastName', { required: 'Last name is required' })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        ${errors.lastName ? 'border-red-600' : 'border-gray-300'}`}
                    />
                    {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email'
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    {...register('organization')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Contact *
                  </label>
                  <select
                    id="reason"
                    {...register('reason', { required: 'Please select a reason' })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${errors.reason ? 'border-red-600' : 'border-gray-300'}`}
                  >
                    <option value="">Select a reason</option>
                    {reasons.map(reason => (
                      <option key={reason} value={reason}>{reason}</option>
                    ))}
                  </select>
                  {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      ${errors.message ? 'border-red-600' : 'border-gray-300'}`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg mt-4"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mt-4"
                  >
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.section
  aria-label="Map and location information"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-white rounded-lg shadow-lg overflow-hidden"
>
  {/* Embedded Google Map */}
  <div className="h-64 sm:h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500303.1776173807!2d104.56052497083566!3d11.579177760136952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1753147809269!5m2!1sen!2skh"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map - Phnom Penh"
    ></iframe>
  </div>

  {/* Location Info */}
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Our Lab</h3>
    <div className="space-y-3">
      <div className="flex items-start">
        <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
        <div>
          <p className="font-medium text-gray-900">KHEOBS Research Laboratory</p>
          <p className="text-gray-600">Phnom Penh, Cambodia</p>
        </div>
      </div>
      <div className="flex items-start">
        <Clock className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
        <div>
          <p className="font-medium text-gray-900">Office Hours</p>
          <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
        </div>
      </div>
    </div>
    <button className="mt-6 w-full bg-blue-100 text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors">
      Get Directions
    </button>
  </div>

  {/* Social Media Links */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="px-6 pb-8 text-center border-t border-gray-200"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
    <div className="flex justify-center space-x-6">
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://x.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black transition-colors"
        aria-label="X (Twitter)"
      >
        <X className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://youtube.com/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800 transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="w-6 h-6" />
      </a>
    </div>
  </motion.div>
</motion.section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
