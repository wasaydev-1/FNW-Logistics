# Namecheap Email Setup Guide

## Step 1: Configure Email Account in Namecheap

1. **Log into Namecheap Account**
   - Go to https://www.namecheap.com/
   - Sign in to your account

2. **Access Domain Management**
   - Go to "Domain List" in your dashboard
   - Click "Manage" next to your domain (fnw-logistics.com)

3. **Set up Email Hosting**
   - Go to "Advanced DNS" tab
   - Ensure MX records are set up (usually auto-configured)
   - If not, add these MX records:
     ```
     Type: MX Record
     Host: @
     Value: mail.privateemail.com
     Priority: 10
     ```

4. **Create Email Account**
   - Go to "Private Email" section
   - Click "Create New Account"
   - Email: wahab@fnw-logistics.com
   - Password: [create a strong password]
   - Note this password for SMTP_PASS

## Step 2: Configure Environment Variables

Create `.env.local` file in your project root with these settings:

```env
# Namecheap SMTP Configuration
SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false

# Your Email Credentials
SMTP_USER=wahab@fnw-logistics.com
SMTP_PASS=your-email-password-here
```

## Step 3: Alternative SMTP Settings (if above doesn't work)

If the default settings don't work, try these alternatives:

### Option A: SSL Configuration
```env
SMTP_HOST=mail.privateemail.com
SMTP_PORT=465
SMTP_SECURE=true
```

### Option B: Different Host
```env
SMTP_HOST=mail.fnw-logistics.com
SMTP_PORT=587
SMTP_SECURE=false
```

## Step 4: Test Configuration

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check if emails are received
4. Check server logs for any SMTP errors

## Troubleshooting

### Common Issues:
1. **Authentication Failed**: Double-check email and password
2. **Connection Timeout**: Try different port (587 vs 465)
3. **SSL Errors**: Toggle SMTP_SECURE between true/false
4. **Host Not Found**: Verify SMTP_HOST is correct

### Namecheap Support:
- Contact Namecheap support if email setup issues persist
- They can verify your MX records and email configuration
