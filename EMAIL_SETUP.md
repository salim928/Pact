# Email Setup for Contact Form

Your contact form is ready to receive emails! You just need to connect it to an email service.

## Option 1: Formspree (Recommended - Free & Easy)

**Steps:**

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account using your email (hello@pactium.africa)
3. Create a new form
4. Copy your Form ID (looks like `xpznqoqr`)
5. Open `app/contact/page.tsx`
6. Replace `YOUR_FORM_ID` with your actual Form ID (line 29)
   ```typescript
   const FORMSPREE_FORM_ID = 'xpznqoqr' // Your actual ID here
   ```
7. Done! You'll receive emails at the email you signed up with

**Formspree Features:**
- ✅ Free tier: 50 submissions/month
- ✅ Spam filtering
- ✅ Email notifications
- ✅ No backend code needed

---

## Option 2: Alternative Services

### A. Web3Forms
1. Visit [https://web3forms.com](https://web3forms.com)
2. Get your free access key
3. Update the form to use their endpoint

### B. EmailJS
1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Setup your email service
3. Get your service ID, template ID, and public key

---

## Option 3: Build Your Own API (Advanced)

If you want full control, create a Next.js API route:

1. Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Setup email transporter (using Gmail example)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASSWORD, // App password
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hello@pactium.africa',
      subject: `New Contact Form: ${body.interest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Interest:</strong> ${body.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

2. Install nodemailer: `npm install nodemailer`

3. Add to `.env.local`:
```
EMAIL_USER=hello@pactium.africa
EMAIL_PASSWORD=your_app_password
```

4. Update contact form to use `/api/contact` instead of Formspree

---

## Recommended: Use Formspree

For your use case, **Formspree (Option 1)** is the best choice because:
- No backend code needed
- No server setup
- Free for moderate traffic
- Professional spam protection
- Easy setup (5 minutes)

Just sign up, get your Form ID, and replace it in the code!
