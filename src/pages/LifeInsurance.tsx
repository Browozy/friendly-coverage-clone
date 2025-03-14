
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const postalCodeSchema = z.object({
  postalCode: z.string()
    .min(3, 'Postal code is required')
    .regex(/^[A-Za-z][0-9][A-Za-z]( )?[0-9][A-Za-z][0-9]$/, 'Please enter a valid Ontario postal code')
});

const detailsFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  birthDate: z.string().min(1, 'Birth date is required'),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select your gender',
  }),
  smoker: z.enum(['yes', 'no'], {
    required_error: 'Please indicate if you are a smoker',
  }),
  coverageAmount: z.string().min(1, 'Coverage amount is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
  healthConditions: z.array(z.string()).default([]),
  additional: z.string().optional(),
  contactConsent: z.boolean().default(true),
});

const LifeInsurance = () => {
  const [step, setStep] = useState<'postal' | 'form'>('postal');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  
  // Postal Code form
  const postalCodeForm = useForm<z.infer<typeof postalCodeSchema>>({
    resolver: zodResolver(postalCodeSchema),
    defaultValues: {
      postalCode: '',
    },
  });

  // Details form
  const detailsForm = useForm<z.infer<typeof detailsFormSchema>>({
    resolver: zodResolver(detailsFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: '',
      gender: undefined,
      smoker: undefined,
      coverageAmount: '',
      address: '',
      city: '',
      postalCode: '',
      healthConditions: [],
      additional: '',
      contactConsent: true,
    },
  });

  const onPostalCodeSubmit = (values: z.infer<typeof postalCodeSchema>) => {
    console.log(values);
    detailsForm.setValue('postalCode', values.postalCode);
    setStep('form');
  };

  const onDetailsSubmit = (values: z.infer<typeof detailsFormSchema>) => {
    console.log('Form submitted:', values);
    setSubmissionSuccess(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-insurance-primary to-insurance-secondary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-4">Life Insurance</h1>
            <p className="text-xl text-white">Secure your family's financial future with the right coverage</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {submissionSuccess ? (
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-insurance-primary">
                    <Check className="inline-block mr-2 h-8 w-8" />
                    Thank You for Your Submission
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4">
                    We've received your life insurance information and will get back to you shortly.
                  </p>
                  <p className="mb-6">
                    One of our insurance specialists will contact you within 24 hours to discuss your quote options.
                  </p>
                  <Button asChild>
                    <a href="/">Return to Home</a>
                  </Button>
                </CardContent>
              </Card>
            ) : step === 'postal' ? (
              <Card className="max-w-xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Enter Your Postal Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center mb-6">
                    To provide you with the most accurate life insurance quote, please enter your Ontario postal code below.
                  </p>
                  <Form {...postalCodeForm}>
                    <form onSubmit={postalCodeForm.handleSubmit(onPostalCodeSubmit)} className="space-y-6">
                      <FormField
                        control={postalCodeForm.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g. M5V 2H1" 
                                {...field} 
                                className="text-lg p-6"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-insurance-primary hover:bg-insurance-dark"
                        size="lg"
                      >
                        Continue <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">Complete Your Life Insurance Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertDescription>
                      Please fill out the form below to receive your personalized life insurance quote. All fields are required unless marked optional.
                    </AlertDescription>
                  </Alert>
                  
                  <Form {...detailsForm}>
                    <form onSubmit={detailsForm.handleSubmit(onDetailsSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={detailsForm.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john.smith@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(416) 555-1234" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={detailsForm.control}
                          name="birthDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date of Birth</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Gender</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Male
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Female
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="other" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Other
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={detailsForm.control}
                          name="smoker"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Do you smoke?</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex space-x-4"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="yes" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Yes
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="no" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      No
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="coverageAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Desired Coverage Amount</FormLabel>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select coverage amount" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="100000">$100,000</SelectItem>
                                    <SelectItem value="250000">$250,000</SelectItem>
                                    <SelectItem value="500000">$500,000</SelectItem>
                                    <SelectItem value="750000">$750,000</SelectItem>
                                    <SelectItem value="1000000">$1,000,000</SelectItem>
                                    <SelectItem value="2000000">$2,000,000+</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={detailsForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input placeholder="Toronto" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal Code</FormLabel>
                              <FormControl>
                                <Input placeholder="M5V 2H1" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={detailsForm.control}
                        name="healthConditions"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">Do you have any of the following health conditions? (select all that apply)</FormLabel>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {['High blood pressure', 'Diabetes', 'Heart disease', 
                                'Cancer', 'Respiratory conditions', 'None of the above'].map((condition) => (
                                <FormField
                                  key={condition}
                                  control={detailsForm.control}
                                  name="healthConditions"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={condition}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(condition)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, condition])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== condition
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {condition}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={detailsForm.control}
                        name="additional"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide any additional information that may be relevant to your life insurance quote"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={detailsForm.control}
                        name="contactConsent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I consent to be contacted about my insurance quote via email or phone
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-insurance-primary hover:bg-insurance-dark"
                        size="lg"
                      >
                        Submit Quote Request
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LifeInsurance;
