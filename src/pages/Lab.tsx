import React, { useEffect, useRef, useState } from 'react';
import TestCarousel from '../components/TestCarousel';
import { Check, ArrowRight, ChevronRight, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { useIsMobile, useScreenWidth } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

// Import GSAP for animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface FormValues {
  activityLevel: string;
  primaryGoal: string;
  trainingEvent: string;
  injuries: string;
  customPlan: string;
}

const Lab: React.FC = () => {
  const testingPackagesRef = useRef<HTMLDivElement>(null);
  const notSureRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const screenWidth = useScreenWidth();
  
  // Form state
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [recommendedPackage, setRecommendedPackage] = useState('performance');
  const [totalScore, setTotalScore] = useState(0);
  
  const form = useForm<FormValues>({
    defaultValues: {
      activityLevel: '',
      primaryGoal: '',
      trainingEvent: '',
      injuries: '',
      customPlan: '',
    },
  });
  
  // Check if current step has a selection
  const hasSelection = () => {
    const values = form.getValues();
    switch (step) {
      case 1:
        return !!values.activityLevel;
      case 2:
        return !!values.primaryGoal;
      case 3:
        return !!values.trainingEvent;
      case 4:
        return !!values.injuries;
      case 5:
        return !!values.customPlan;
      default:
        return false;
    }
  };
  
  const calculateScore = () => {
    let score = 0;
    const activityLevel = form.getValues('activityLevel');
    const primaryGoal = form.getValues('primaryGoal');
    const trainingEvent = form.getValues('trainingEvent');
    const injuries = form.getValues('injuries');
    const customPlan = form.getValues('customPlan');
    
    // Activity Level scoring
    if (activityLevel === 'occasional') score += 1;
    else if (activityLevel === 'regular') score += 2;
    else if (activityLevel === 'intense') score += 3;
    
    // Primary Goal scoring
    if (primaryGoal === 'general') score += 1;
    else if (primaryGoal === 'improve') score += 2;
    else if (primaryGoal === 'optimize') score += 3;
    
    // Training Event scoring
    if (trainingEvent === 'no') score += 0;
    else if (trainingEvent === 'short') score += 1;
    else if (trainingEvent === 'long') score += 2;
    
    // Injuries scoring
    if (injuries === 'no') score += 0;
    else if (injuries === 'sometimes') score += 1;
    else if (injuries === 'frequent') score += 2;
    
    // Custom Plan scoring
    if (customPlan === 'not-needed') score += 0;
    else if (customPlan === 'maybe') score += 1;
    else if (customPlan === 'yes') score += 2;
    
    return score;
  };
  
  const handleNextStep = () => {
    if (!hasSelection()) {
      toast.error("Please select an option before continuing");
      return;
    }
    
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Calculate score and determine recommended package
      const score = calculateScore();
      setTotalScore(score);
      
      if (score <= 4) {
        setRecommendedPackage('beginner');
      } else if (score <= 8) {
        setRecommendedPackage('performance');
      } else {
        setRecommendedPackage('elite');
      }
      
      setShowResults(true);
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const resetForm = () => {
    form.reset();
    setStep(1);
    setShowResults(false);
    setTotalScore(0);
  };
  
  const scrollToPackages = () => {
    if (testingPackagesRef.current) {
      testingPackagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Animation for "Not sure what you need" section only
    if (notSureRef.current) {
      gsap.from(notSureRef.current.querySelectorAll('.fade-in'), {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: notSureRef.current,
          start: "top 85%"
        }
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen animated-bg">
      <main className="overflow-x-hidden">
        {/* Tests Carousel Section */}
        <TestCarousel />
        
        {/* Testing Packages Section */}
        <section ref={testingPackagesRef} id="packages" className="py-10 md:py-16 lg:py-24 bg-black scroll-mt-[100px]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 md:mb-4">Our Testing Packages</h2>
            <p className="text-center text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto px-2 text-sm sm:text-base">
              Choose the right package based on your training level and goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Basic Athlete Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border border-white/10 transition-all hover:border-ndur-red/50">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Basic Athlete Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  For casual runners, gym enthusiasts, or anyone starting their fitness journey.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">VO₂ Max Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Lactate Threshold Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Body Composition Analysis (BIA)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Foot Pressure Scanner</span>
                  </li>
                </ul>
                
                <Button className="w-full group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Advanced Performance Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border-2 border-[#e23636] relative">
                <div className="absolute -top-3 md:-top-4 right-3 md:right-8 bg-[#e23636] text-white text-xs md:text-sm font-bold px-2 md:px-4 py-1 rounded-full">
                  Recommended
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Advanced Performance Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  Designed for marathoners, triathletes, and competitive endurance athletes.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">VO₂ Max Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Lactate Threshold Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Gait Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Force Deck Testing</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-[#e23636] hover:bg-[#e23636]/90 group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Elite Endurance Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border border-white/10 transition-all hover:border-[#e23636]/50">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Elite Endurance Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  Built for serious athletes seeking a complete performance roadmap.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">All Tests Included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Custom Training Plan for Marathon</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Marathon Coaching & Recovery Strategy</span>
                  </li>
                </ul>
                
                <Button className="w-full group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Not Sure What You Need Section */}
        <section ref={notSureRef} id="calculator" className="py-10 md:py-16 lg:py-24 bg-[#1a1f2e] scroll-mt-[100px]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
              {/* Left Column */}
              <div className="fade-in">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Not Sure <span className="text-[#e23636]">What You Need?</span></h2>
                
                <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-10">
                  Our Lab Test Calculator helps determine exactly which lab services and performance tests are best for you — based on your running experience, goals, and current challenges.
                </p>
                
                <div className="bg-black/30 rounded-xl p-4 sm:p-5 md:p-8 mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">How It Works</h3>
                  
                  <div className="space-y-4 md:space-y-6 text-white text-sm md:text-base">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e23636] flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm md:text-base">1</span>
                      </div>
                      <p className="pt-1">Answer a few questions about your running experience, training goals, and any issues you face.</p>
                    </div>
                    
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e23636] flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm md:text-base">2</span>
                      </div>
                      <p className="pt-1">Our smart algorithm analyzes your responses based on our scoring system (0-12 points).</p>
                    </div>
                    
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#e23636] flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-sm md:text-base">3</span>
                      </div>
                      <p className="pt-1">Get a personalized recommendation with the most suitable package for your needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Test Calculator Interface */}
              <div className="fade-in">
                <div className="bg-black/20 rounded-xl p-4 sm:p-5 md:p-8 border border-white/10">
                  {/* Progress Steps */}
                  <div className="flex mb-4 md:mb-8 gap-1 sm:gap-2">
                    <div className="flex-1">
                      <div className={`h-8 md:h-10 rounded flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ${step === 1 ? 'bg-[#e23636] text-white' : 'bg-white/10 text-white/60'}`}>
                        Q1
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`h-8 md:h-10 rounded flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ${step === 2 ? 'bg-[#e23636] text-white' : 'bg-white/10 text-white/60'}`}>
                        Q2
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`h-8 md:h-10 rounded flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ${step === 3 ? 'bg-[#e23636] text-white' : 'bg-white/10 text-white/60'}`}>
                        Q3
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`h-8 md:h-10 rounded flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ${step === 4 ? 'bg-[#e23636] text-white' : 'bg-white/10 text-white/60'}`}>
                        Q4
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`h-8 md:h-10 rounded flex items-center justify-center text-xs sm:text-sm md:text-base font-medium ${step === 5 ? 'bg-[#e23636] text-white' : 'bg-white/10 text-white/60'}`}>
                        Q5
                      </div>
                    </div>
                  </div>
                  
                  {/* Form Content */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleNextStep)} className="space-y-4 md:space-y-6">
                      {/* Step 1: Activity Level */}
                      {step === 1 && !showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 text-white">What best describes your current activity level?</h3>
                          
                          <FormField
                            control={form.control}
                            name="activityLevel"
                            render={({ field }) => (
                              <FormItem className="space-y-2 md:space-y-3">
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2 md:space-y-3"
                                >
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="occasional" id="occasional" />
                                      </FormControl>
                                      <FormLabel htmlFor="occasional" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        I occasionally run/work out (1 point)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="regular" id="regular" />
                                      </FormControl>
                                      <FormLabel htmlFor="regular" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        I train 3–5 times a week (2 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="intense" id="intense" />
                                      </FormControl>
                                      <FormLabel htmlFor="intense" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        I train daily and participate in races (3 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-6 md:mt-8 flex justify-end">
                            <Button 
                              type="submit" 
                              className={`${hasSelection() ? 'bg-[#e23636] hover:bg-[#e23636]/90' : 'bg-gray-500 cursor-not-allowed'} flex items-center gap-2`}
                              disabled={!hasSelection()}
                            >
                              Next Question 
                              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 2: Primary Goal */}
                      {step === 2 && !showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 text-white">What is your primary goal?</h3>
                          
                          <FormField
                            control={form.control}
                            name="primaryGoal"
                            render={({ field }) => (
                              <FormItem className="space-y-2 md:space-y-3">
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2 md:space-y-3"
                                >
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="general" id="general" />
                                      </FormControl>
                                      <FormLabel htmlFor="general" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        General fitness & health (1 point)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="improve" id="improve" />
                                      </FormControl>
                                      <FormLabel htmlFor="improve" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Improve endurance & running technique (2 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="optimize" id="optimize" />
                                      </FormControl>
                                      <FormLabel htmlFor="optimize" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Optimize race performance (3 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-6 md:mt-8 flex justify-between">
                            <Button type="button" variant="outline" onClick={handlePrevStep} size={isMobile ? "sm" : "default"}>
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              className={`${hasSelection() ? 'bg-[#e23636] hover:bg-[#e23636]/90' : 'bg-gray-500 cursor-not-allowed'} flex items-center gap-2`}
                              disabled={!hasSelection()}
                              size={isMobile ? "sm" : "default"}
                            >
                              Next Question
                              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 3: Training for an event */}
                      {step === 3 && !showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 text-white">Are you currently training for an event?</h3>
                          
                          <FormField
                            control={form.control}
                            name="trainingEvent"
                            render={({ field }) => (
                              <FormItem className="space-y-2 md:space-y-3">
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2 md:space-y-3"
                                >
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="no" id="no-event" />
                                      </FormControl>
                                      <FormLabel htmlFor="no-event" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        No (0 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="short" id="short-event" />
                                      </FormControl>
                                      <FormLabel htmlFor="short-event" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        5K / 10K / Half Marathon (1 point)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="long" id="long-event" />
                                      </FormControl>
                                      <FormLabel htmlFor="long-event" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Full Marathon / Triathlon / Ironman (2 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-6 md:mt-8 flex justify-between">
                            <Button type="button" variant="outline" onClick={handlePrevStep} size={isMobile ? "sm" : "default"}>
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              className={`${hasSelection() ? 'bg-[#e23636] hover:bg-[#e23636]/90' : 'bg-gray-500 cursor-not-allowed'} flex items-center gap-2`}
                              disabled={!hasSelection()}
                              size={isMobile ? "sm" : "default"}
                            >
                              Next Question
                              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 4: Injuries */}
                      {step === 4 && !showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 text-white">Do you experience recurring injuries or imbalances?</h3>
                          
                          <FormField
                            control={form.control}
                            name="injuries"
                            render={({ field }) => (
                              <FormItem className="space-y-2 md:space-y-3">
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2 md:space-y-3"
                                >
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="no" id="no-injuries" />
                                      </FormControl>
                                      <FormLabel htmlFor="no-injuries" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        No (0 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" id="sometimes-injuries" />
                                      </FormControl>
                                      <FormLabel htmlFor="sometimes-injuries" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Sometimes (1 point)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="frequent" id="frequent-injuries" />
                                      </FormControl>
                                      <FormLabel htmlFor="frequent-injuries" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Frequently (2 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-6 md:mt-8 flex justify-between">
                            <Button type="button" variant="outline" onClick={handlePrevStep} size={isMobile ? "sm" : "default"}>
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              className={`${hasSelection() ? 'bg-[#e23636] hover:bg-[#e23636]/90' : 'bg-gray-500 cursor-not-allowed'} flex items-center gap-2`}
                              disabled={!hasSelection()}
                              size={isMobile ? "sm" : "default"}
                            >
                              Next Question
                              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 5: Custom Training */}
                      {step === 5 && !showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 text-white">Would you benefit from a custom training plan or 1-on-1 coaching?</h3>
                          
                          <FormField
                            control={form.control}
                            name="customPlan"
                            render={({ field }) => (
                              <FormItem className="space-y-2 md:space-y-3">
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="space-y-2 md:space-y-3"
                                >
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="not-needed" id="not-needed" />
                                      </FormControl>
                                      <FormLabel htmlFor="not-needed" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Not really (0 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="maybe" id="maybe-plan" />
                                      </FormControl>
                                      <FormLabel htmlFor="maybe-plan" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Maybe / I'm curious (1 point)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                  <div className="w-full p-2 md:p-3 border border-white/20 rounded-md hover:border-[#e23636] transition-colors">
                                    <FormItem className="flex items-center space-x-2 md:space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="yes" id="yes-plan" />
                                      </FormControl>
                                      <FormLabel htmlFor="yes-plan" className="text-white cursor-pointer flex-1 text-xs sm:text-sm md:text-base">
                                        Yes, I want a personalized plan (2 points)
                                      </FormLabel>
                                    </FormItem>
                                  </div>
                                </RadioGroup>
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-6 md:mt-8 flex justify-between">
                            <Button type="button" variant="outline" onClick={handlePrevStep} size={isMobile ? "sm" : "default"}>
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              className={`${hasSelection() ? 'bg-[#e23636] hover:bg-[#e23636]/90' : 'bg-gray-500 cursor-not-allowed'} flex items-center gap-2`}
                              disabled={!hasSelection()}
                            >
                              Get Results
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Results */}
                      {showResults && (
                        <div className="fade-in">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 md:mb-6 flex items-center text-white">
                            <span className="text-[#e23636]">Your Personalized Recommendation</span>
                          </h3>
                          <p className="mb-2 text-white/80 text-xs sm:text-sm md:text-base">Your Score: <span className="font-bold text-white">{totalScore}/12</span></p>
                          <p className="mb-4 md:mb-8 text-white text-xs sm:text-sm md:text-base">Based on your responses, here's what we recommend:</p>
                          
                          <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                            {recommendedPackage === 'beginner' ? (
                              <>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Basic Athlete Package</h4>
                                    <p className="text-xs md:text-sm text-white/70">Perfect for your experience level (0-4 points)</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">VO₂ Max Test</h4>
                                    <p className="text-xs md:text-sm text-white/70">For endurance planning</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Body Composition Analysis</h4>
                                    <p className="text-xs md:text-sm text-white/70">To establish your baseline</p>
                                  </div>
                                </div>
                              </>
                            ) : recommendedPackage === 'elite' ? (
                              <>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Elite Endurance Package</h4>
                                    <p className="text-xs md:text-sm text-white/70">For serious athletes (9-12 points)</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Full Testing Suite</h4>
                                    <p className="text-xs md:text-sm text-white/70">All performance tests included</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Custom Training Plan</h4>
                                    <p className="text-xs md:text-sm text-white/70">Personalized for your goals</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Coaching & Recovery Strategy</h4>
                                    <p className="text-xs md:text-sm text-white/70">For optimizing your performance</p>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Advanced Performance Package</h4>
                                    <p className="text-xs md:text-sm text-white/70">For intermediate athletes (5-8 points)</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">VO₂ Max Test</h4>
                                    <p className="text-xs md:text-sm text-white/70">For endurance planning</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Lactate Threshold</h4>
                                    <p className="text-xs md:text-sm text-white/70">To target optimal training zones</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2 md:gap-3">
                                  <Check className="text-[#e23636] mt-0.5 h-4 w-4 md:h-5 md:w-5" />
                                  <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">Gait Analysis</h4>
                                    <p className="text-xs md:text-sm text-white/70">To improve form and efficiency</p>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                          
                          <div className="flex flex-col gap-3 mt-6 md:mt-8">
                            <Button 
                              className="bg-[#e23636] hover:bg-[#e23636]/90 order-1 rounded-full"
                              onClick={scrollToPackages}
                            >
                              Book a Session
                              <CalendarIcon className="ml-2 h-4 w-4" />
                            </Button>
                            <Button onClick={resetForm} variant="outline" className="order-2 mt-2 md:mt-4">
                              Start Over
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lab;
