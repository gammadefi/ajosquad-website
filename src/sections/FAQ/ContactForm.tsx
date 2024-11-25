import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa6";
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import Spinner from '../../components/spinner/Spinner';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await axios.post('https://api.ajosquad.com/contact-us', values);
        toast.success('Message sent successfully');
        resetForm();
      } catch (error) {
        console.error('Error submitting the form', error);
        toast.error('Failed to send the message');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className='py-5 lg:py-16 space-y-4 lg:space-y-8 text-sm lg:text-base mx-auto lg:w-3/4'>
      <div className='flex flex-col md:flex-row md:gap-10'>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="firstName" className='font-medium'>First Name</label>
          <input
            id='firstName'
            type="text"
            {...formik.getFieldProps('firstName')}
            placeholder='First Name'
            className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none'
            required
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="lastName" className='font-medium'>Last Name</label>
          <input
            id='lastName'
            type="text"
            {...formik.getFieldProps('lastName')}
            placeholder='Last Name'
            className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none'
            required
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-10'>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="email" className='font-medium'>Email</label>
          <input
            id='email'
            type="email"
            {...formik.getFieldProps('email')}
            placeholder='linda@framcreative.com'
            className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none'
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="phoneNumber" className='font-medium'>Phone Number</label>
          <input
            id='phoneNumber'
            type='tel'
            {...formik.getFieldProps('phoneNumber')}
            placeholder='Phone Number'
            className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none'
            required
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
      </div>
      <textarea
        id='message'
        {...formik.getFieldProps('message')}
        placeholder='Your Message'
        rows={5}
        className='w-full lg:h-60 rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none resize-none'
        required
      ></textarea>
      {formik.touched.message && formik.errors.message ? (
        <div className="text-red-500 text-sm">{formik.errors.message}</div>
      ) : null}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="w-full lg:w-fit cursor-pointer mx-auto text-base flex items-center justify-center gap-2 font-semibold text-white rounded-lg py-3 px-4 lg:px-16 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]"
      >
        <span>Submit</span>
        {

          formik.isSubmitting ? <Spinner /> : <FaArrowRight />
        }
      </button>
    </form>
  );
};

export default ContactForm;
