# Tareeqi Email API

This is a Next.js API service that handles email functionality for the Tareeqi application. It provides endpoints for handling beta registrations and contact form submissions.

## Features

- Beta registration email handling
- Contact form email handling
- Admin notifications
- TypeScript support
- Error handling and validation

## Deployment Instructions

1. Fork this repository to your GitHub account
2. Connect your GitHub repository to Vercel
3. Configure the following environment variables in your Vercel project settings:
   - `EMAIL_USER`: Your Gmail address (e.g., tareeqiapp@gmail.com)
   - `EMAIL_PASS`: Your Gmail app password

### Getting a Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App Passwords
5. Generate a new app password for "Mail"
6. Use this password as your `EMAIL_PASS` environment variable

## API Endpoint

The API endpoint will be available at:
```
https://your-vercel-domain.vercel.app/api/register
```

### Request Format

```typescript
{
  name: string;
  email: string;
  phone: string;
  type: 'beta' | 'contact';
  message?: string; // Required for contact form submissions
}
```

### Response Format

Success Response:
```json
{
  "success": true,
  "message": "Registration successful! 🎉 Please check your email..."
}
```

Error Response:
```json
{
  "success": false,
  "error": "Error message",
  "message": "User-friendly error message"
}
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with your environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```

## License

ISC # email-apii
