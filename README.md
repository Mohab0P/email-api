# 📧 Tareeqi Email API

A modern, secure email service API built with Next.js for handling beta registrations and contact form submissions. This API powers Tareeqi's communication system, managing beta program registrations and contact form submissions with automated email responses.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **📝 Dual Form System**
  - Beta Registration Form
  - Contact Form with Message Support
  
- **✨ Modern UI Components**
  - Responsive Design
  - Loading States
  - Success/Error Notifications
  - Form Validation

- **🔒 Security**
  - CORS Protection
  - Input Validation
  - Error Handling
  - Environment Variable Protection

- **📨 Email Features**
  - Automated Response System
  - Custom HTML Email Templates
  - Admin Notifications
  - Gmail SMTP Integration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Deployment**: Vercel
- **Type Safety**: TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/email-api.git
   cd email-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🔧 API Usage

### Beta Registration
```typescript
fetch('https://email-api-9y3z.vercel.app/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "User Name",
    email: "user@example.com",
    phone: "1234567890",
    type: "beta"
  })
});
```

### Contact Form
```typescript
fetch('https://email-api-9y3z.vercel.app/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "User Name",
    email: "user@example.com",
    phone: "1234567890",
    type: "contact",
    message: "Your message here"
  })
});
```

## 📱 Components

### BetaForm
A form component for beta program registration with:
- Name field
- Email field
- Phone number field
- Loading states
- Success/Error messages

### ContactForm
A contact form component with:
- Name field
- Email field
- Phone number field
- Message textarea
- Loading states
- Success/Error messages

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| EMAIL_USER | Gmail address for sending emails |
| EMAIL_PASS | Gmail app-specific password |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support,open an issue in the repository.

---

Made with ❤️ by [Mohab](https://github.com/Mohab0p)
