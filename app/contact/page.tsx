"use client";
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const metadata = {
  title: 'Contact',
  description: 'Contact us for more information',
}



// The following interface if you want to use TypeScript for form data validation without Zod

// interface FormData {
//   name: string;
//   email: string;
//   phone: number;
//   subject: string;
//   message: string;
// }

// The following type is used to infer the form data from the Zod schema
type FormData = z.infer<typeof schema>;

// The following schema is used to validate the form data using Zod 
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email(),
  phone: z.string().regex(/^0\d{10}$/, {
    message: "Phone number must be 11 digits and start with 0",
  }),
  subject: z.string().min(2, "subject must be at least 2 characters").max(100, "subject must be less than 100 characters"),
  message: z.string().min(2, "message must be at least 2 characters").max(500, "message must be less than 500 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export default function page() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a network request
    console.log(data);
  }


  return (
    <div className='flex w-full justify-center items-center bg-white font-josefin my-10'>
      <div className=' w-[90%] md:w-[50%] flex flex-col mx-auto  mb-16 h-fit p-6 bg-blue-100 gap-6 shadow-xl rounded-md'>
        <h1 className='text-black font-bold text-center text-xl'>Get in touch with us</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 "
          />
          {errors.name && <div className='text-red-500 text-sm'>{errors.name.message}</div>}
          <div className='flex flex-col gap-4 justify-between w-full'>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="w-full px-4 py-3 focus:outline-none focus:ring-2 "
            />
            {errors.email && <div className='text-red-500 text-sm'>{errors.email.message}</div>}
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full px-4 py-3 focus:outline-none focus:ring-2 "
            />
            {errors.phone && <div className='text-red-500 text-sm'>{errors.phone.message}</div>}
          </div>
          <input
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className="w-full px-4 py-3 focus:outline-none focus:ring-2 "
          />
          {errors.subject && <div className='text-red-500 text-sm'>{errors.subject.message}</div>}
          <textarea
            placeholder="Write your message"
            rows={5}
            {...register("message")}
            className="w-full px-4 py-3 focus:outline-none focus:ring-2 "
          />
          {errors.message && <div className='text-red-500 text-sm'>Message is required and must be less than 500 characters</div>}
          <div>
            <input
              type="checkbox"
              className="mr-2"
              {...register("terms")}
            />
            <label className='text-black'>I agree to the terms and conditions</label>
          </div>
          {errors.terms && <div className='text-red-500 text-sm'>{errors.terms.message}</div>}
          <div className='text-sm text-gray-500'>By submitting this form, you agree to our <a href="#" className='text-blue-500'>terms and conditions</a>.</div>
          <button disabled={isSubmitting} className='bg-black text-white mx-auto px-16 py-4 rounded-md hover:bg-slate-900'> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

