
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
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(3, 'Postal code is required'),
  propertyType: z.enum(['detached', 'semi-detached', 'townhouse', 'condo'], {
    required_error: 'Please select your property type',
  }),
  yearBuilt: z.string().min(4, 'Year built is required'),
  squareFootage: z.string().min(1, 'Square footage is required'),
  homeValue: z.string().min(1, 'Home value is required'),
  additional: z.string().optional(),
  contactConsent: z.boolean().default(true),
});

const HomeInsurance = () => {
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
      address: '',
      city: '',
      postalCode: '',
      propertyType: undefined,
      yearBuilt: '',
      squareFootage: '',
      homeValue: '',
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
            <h1 className="text-4xl font-bold text-white mb-4">Home Insurance</h1>
            <p className="text-xl text-white">Protect your most valuable asset with comprehensive coverage</p>
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
                    We've received your home insurance information and will get back to you shortly.
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
                    To provide you with the most accurate home insurance quote, please enter your Ontario postal code below.
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
                  <CardTitle className="text-center text-2xl">Complete Your Home Insurance Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertDescription>
                      Please fill out the form below to receive your personalized home insurance quote. All fields are required unless marked optional.
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
                          name="address"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Property Address</FormLabel>
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
                        name="propertyType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Property Type</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="detached" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Detached Home
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="semi-detached" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Semi-Detached Home
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="townhouse" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Townhouse
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="condo" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Condominium
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={detailsForm.control}
                          name="yearBuilt"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year Built</FormLabel>
                              <FormControl>
                                <Input placeholder="1995" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="squareFootage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Square Footage</FormLabel>
                              <FormControl>
                                <Input placeholder="1500" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={detailsForm.control}
                          name="homeValue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estimated Home Value</FormLabel>
                              <FormControl>
                                <Input placeholder="$500,000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={detailsForm.control}
                        name="additional"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please provide any additional information that may be relevant to your home insurance quote"
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

export default HomeInsurance;
