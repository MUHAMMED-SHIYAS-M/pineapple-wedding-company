import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

function InstagramIcon({ size = 18, className = 'text-gold-400' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const EVENT_TYPES = [
  'Wedding',
  'Reception',
  'Engagement',
  'Birthday',
  'Corporate Event',
  'Other',
];

const WA_NUMBER = '917510523602';
const WA_MESSAGE = encodeURIComponent(
  "Hello Pineapple Wedding Company, I'm interested in your event management services. I would like to discuss my event."
);

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  venue: '',
  guests: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid 10-digit phone number';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.eventType) e.eventType = 'Please select an event type';
    if (!form.message.trim()) e.message = 'Please tell us about your event';
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send enquiry');
      }

      setSubmitted(true);
      setForm(INITIAL);
    } catch (error) {
      console.error('Enquiry error:', error);

      alert(
        "Sorry, we couldn't send your enquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-py bg-burgundy-950"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label mb-4 block">Contact Us</span>
          <h2
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Let's Talk About<br />
            <span className="italic font-light text-gold-400">Your Event</span>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">

          {/* Contact Info — left */}
          <div className="lg:col-span-2 reveal-left">
            <div className="mb-10">
              <h3 className="font-serif text-3xl text-white mb-2">
                Pineapple <span className="text-gold-400 italic font-light">Wedding Company</span>
              </h3>
              <div className="gold-divider-left mt-4 mb-6" />
              <p className="font-sans text-white/50 text-sm leading-relaxed">
                Based in Kerala, we bring your dream celebrations to life across Edappal,
                Malappuram and Tirur.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone 1 */}
              <a
                href="tel:7510523602"
                className="flex items-start gap-4 group"
                aria-label="Call us at 75105 23602"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <Phone size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">Phone</div>
                  <div className="font-sans text-white group-hover:text-gold-400 transition-colors">75105 23602</div>
                </div>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:7560907841"
                className="flex items-start gap-4 group"
                aria-label="Call us at 75609 07841"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <Phone size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">Phone</div>
                  <div className="font-sans text-white group-hover:text-gold-400 transition-colors">75609 07841</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                aria-label="WhatsApp us"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-[#25D366] transition-colors">
                  <MessageCircle size={16} className="text-gold-400 group-hover:text-[#25D366] transition-colors" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">WhatsApp</div>
                  <div className="font-sans text-white group-hover:text-[#25D366] transition-colors">75105 23602</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:pineappleevents08@gmail.com"
                className="flex items-start gap-4 group"
                aria-label="Email us"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <Mail size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">Email</div>
                  <div className="font-sans text-white group-hover:text-gold-400 transition-colors break-all">
                    pineappleevents08@gmail.com
                  </div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pineapple_wedding_company/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                aria-label="Follow us on Instagram"
              >
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  <InstagramIcon size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">Instagram</div>
                  <div className="font-sans text-white group-hover:text-gold-400 transition-colors">
                    @pineapple_wedding_company
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 border border-gold-400/30 flex items-center justify-center">
                  <MapPin size={16} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-sans text-xs text-white/40 tracking-widest uppercase mb-0.5">Locations</div>
                  <div className="font-sans text-white">Edappal | Malappuram | Tirur</div>
                  <div className="font-sans text-white/40 text-xs">Kerala, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form — right */}
          <div className="lg:col-span-3 reveal-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 size={56} className="text-gold-400 mb-6" />
                <h3 className="font-serif text-3xl text-white mb-4">Enquiry Received!</h3>
                <div className="gold-divider mb-6" />
                <p className="font-sans text-white/60 text-base leading-relaxed max-w-md">
                  Thank you! Your enquiry has been received. We'll review your details and
                  get in touch with you soon to discuss your event.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(INITIAL); }}
                  className="btn-gold mt-8"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                aria-label="Event enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your full name"
                      className="form-field"
                      autoComplete="name"
                    />
                    {errors.name && <p className="font-sans text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="10-digit mobile number"
                      className="form-field"
                      autoComplete="tel"
                    />
                    {errors.phone && <p className="font-sans text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="your@email.com"
                      className="form-field"
                      autoComplete="email"
                    />
                    {errors.email && <p className="font-sans text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="eventType" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={form.eventType}
                      onChange={onChange}
                      className="form-field bg-transparent appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-burgundy-900">Select event type</option>
                      {EVENT_TYPES.map(t => (
                        <option key={t} value={t} className="bg-burgundy-900">{t}</option>
                      ))}
                    </select>
                    {errors.eventType && <p className="font-sans text-xs text-red-400 mt-1">{errors.eventType}</p>}
                  </div>

                  {/* Event Date */}
                  <div>
                    <label htmlFor="eventDate" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={onChange}
                      className="form-field"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Number of Guests
                    </label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      value={form.guests}
                      onChange={onChange}
                      placeholder="Approximate guest count"
                      className="form-field"
                      min="1"
                    />
                  </div>

                  {/* Venue */}
                  <div className="sm:col-span-2">
                    <label htmlFor="venue" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Venue / Location
                    </label>
                    <input
                      id="venue"
                      name="venue"
                      type="text"
                      value={form.venue}
                      onChange={onChange}
                      placeholder="Preferred venue or location"
                      className="form-field"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="font-sans text-xs text-white/50 tracking-widest uppercase block mb-2">
                      Tell Us About Your Event *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Share your vision, ideas, theme, budget or any special requirements..."
                      className="form-field resize-none"
                    />
                    {errors.message && <p className="font-sans text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-gold-filled mt-6 w-full justify-center hover:shadow-lg hover:shadow-gold-400/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending Enquiry...
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send size={16} />
                      Send Enquiry
                    </span>
                  )}
                </button>

                <p className="font-sans text-xs text-white/30 text-center mt-4">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
