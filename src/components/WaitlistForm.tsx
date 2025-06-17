import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const waitlistFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(6, { message: 'Please enter a valid phone number.' }).optional(),
});

const WaitlistForm = () => {
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(data: any) {
    // Open Google Form in a new tab
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfzZ4GjwCBs-zbz4EkefzFr_R3i-wZBJK6sRp12g8_rAgFD9Q/viewform?usp=pp_url';
    const formWindow = window.open(formUrl, '_blank');
    
    if (formWindow) {
      toast({
        title: "Waitlist Form Opened",
        description: "Please fill out the form in the new tab to join our waitlist.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Please allow popups for this website to join the waitlist.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl md:text-3xl font-inter font-bold mb-8 text-white">Join Our Waitlist</h2>
      
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

          <Button type="submit" className="w-full bg-ndur-red hover:bg-ndur-red/90 text-white font-inter font-medium">
            Join Waitlist
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WaitlistForm; 