'use client'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ev => {
    const { name, value } = ev.target
    setForm({ ...form, [name]: value })
  }

  const checkValidation = () => {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))) {
      toast.error('You have entered an invalid email address!')
      return false
    }
    if(form.name.length < 2) {
      toast.error('You have entered an invalid name!')
      return false
    }
    if(form.message.length < 6) {
      toast.error('You have entered an invalid message!')
      return false
    }
    return true
  }

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      setLoading(true)
      if(!checkValidation()) {
        setLoading(false)
        return
      } 
      await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Idan',
          from_email: form.email,
          to_email: "idand2000@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setLoading(false)
      toast.success('Thank you. I will get back to you as soon as possible.')
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (err) {
      setLoading(false)
      console.error(err)
      toast.error('Ahh, something went wrong. Please try again.')
    }
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
     flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                   text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                   text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
                   text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white
                 font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact') 