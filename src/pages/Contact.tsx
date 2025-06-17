import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number.' }).optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: any) {
    const formData = new URLSearchParams();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('message', data.message);
  
    fetch("https://script.google.com/macros/s/AKfycbzoDyEdWA02ssxlHR4bHkvMPKjXgfJBKoQ3Nylh82xtqk_Wsl6XABA5s9pmGMIDGrZEbQ/exec", {
      method: "POST",
      body: formData, // ✔️ Not JSON
    })
      .then((res) => res.json())
      .then(() => {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        form.reset();
      })
      .catch((err) => {
        console.error("Form submission error:", err);
        toast({
          title: "Error",
          description: "There was an issue submitting the form. Please try again.",
          variant: "destructive",
        });
      });
  }
  
  

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="ndur-container py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6">
            Get in <span className="text-ndur-red">Touch</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-urbanist">
            Have questions about our services, products, or how we can help optimize your performance? 
            Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Details */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-inter font-bold mb-8 text-white">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-ndur-red/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-ndur-red" />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-semibold">Email</h3>
                  <a href="mailto:info@ndur.ai" className="text-gray-300 hover:text-ndur-red transition-colors">
                    info@ndur.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ndur-red/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-ndur-red" />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-semibold">Phone</h3>
                  <a href="tel:+12345678901" className="text-gray-300 hover:text-ndur-red transition-colors">
                    +1 (234) 567-8901
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ndur-red/20 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-ndur-red" />
                </div>
                <div>
                  <h3 className="text-lg font-inter font-semibold">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-inter font-bold mb-8 text-white">Send us a message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-black/50 border-white/30 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" className="bg-black/50 border-white/30 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" className="bg-black/50 border-white/30 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="bg-black/50 border-white/30 text-white min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-ndur-red hover:bg-ndur-red/90 text-white font-inter font-medium">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
