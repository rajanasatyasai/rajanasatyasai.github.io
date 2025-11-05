# Contact Form Setup Guide

## Current Implementation

The contact form currently uses a **mailto link** approach that:
- Opens the user's default email client
- Pre-fills the email with form data
- Works on all devices without requiring a backend server

### Pros:
- ✅ No backend server required
- ✅ Free and simple
- ✅ Works immediately
- ✅ No maintenance needed

### Cons:
- ❌ Requires user to have email client configured
- ❌ User must click "Send" in their email app
- ❌ Doesn't work well on some mobile browsers

---

## Option 1: Formspree (Recommended - Free & Easy)

**Formspree** is a free form backend service (up to 50 submissions/month).

### Setup Steps:

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email (free account)
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/xxxxxxxx`)
5. In `contact.html`, update line 233:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Update the JavaScript (lines 573-626) to use fetch API:
   ```javascript
   const response = await fetch(contactForm.action, {
     method: 'POST',
     body: formData,
     headers: { 'Accept': 'application/json' }
   });
   ```

### Benefits:
- ✅ Messages sent directly to your email
- ✅ Works on all devices/browsers
- ✅ No email client required
- ✅ Spam protection included
- ✅ 50 free submissions/month

---

## Option 2: Netlify Forms (If hosting on Netlify)

If you deploy to Netlify, you get free form handling.

### Setup:
1. Add `netlify` attribute to form tag:
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Add hidden field:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```
3. Deploy to Netlify

### Benefits:
- ✅ Built-in with Netlify hosting
- ✅ 100 free submissions/month
- ✅ View submissions in Netlify dashboard

---

## Option 3: EmailJS (Client-side email sending)

**EmailJS** sends emails directly from the browser.

### Setup:
1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Add EmailJS SDK to `contact.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
5. Initialize and send:
   ```javascript
   emailjs.send('service_id', 'template_id', formData)
   ```

### Benefits:
- ✅ 200 free emails/month
- ✅ No backend required
- ✅ Custom email templates

---

## Option 4: Google Forms (Alternative)

Replace the form with a Google Form embed.

### Setup:
1. Create a Google Form
2. Get embed code
3. Style to match your site

### Benefits:
- ✅ Completely free
- ✅ Unlimited submissions
- ✅ Responses in Google Sheets

### Cons:
- ❌ Loses custom styling
- ❌ Shows Google branding

---

## Recommendation

For **GitHub Pages deployment**:
- **Best option**: Formspree (free tier, easy setup, professional)
- **Alternative**: EmailJS (more customizable)
- **Quick fix**: Current mailto implementation (works but not ideal)

To upgrade to Formspree, you only need to:
1. Sign up and get your form endpoint
2. Add the `action` attribute to the form
3. The JavaScript is already set up to handle it!

Let me know if you want help setting up any of these options!
