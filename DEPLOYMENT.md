# MaxVue Coming Soon Page - Deployment Guide

## 🚀 Netlify Deployment Instructions

### Step 1: Build and Test Locally

```bash
# Install dependencies (if not already done)
npm install

# Build the static site
npm run build

# Test the build locally (optional)
npx serve out
```

### Step 2: Deploy to Netlify

#### Option A: Deploy via Netlify CLI
```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Option B: Deploy via Git (Recommended)
1. Push your branch to GitHub:
   ```bash
   git add .
   git commit -m "feat: Add coming soon page with early access form"
   git push origin feat/coming-soon-home
   ```

2. In Netlify Dashboard:
   - Go to your site
   - Navigate to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**
   - Or merge your branch and it will auto-deploy

#### Option C: Drag and Drop
1. Build the site: `npm run build`
2. Go to Netlify Dashboard
3. Drag the `out` folder to deploy

### Step 3: Configure Netlify Forms

After deployment, Netlify will automatically detect the form. To verify:

1. Go to your Netlify site dashboard
2. Navigate to **Forms** tab
3. You should see the **early-access** form listed
4. Configure form notifications:
   - Go to **Forms** → **Form notifications**
   - Add email notification to receive submissions
   - Optional: Add Slack, webhook, or other integrations

### Step 4: Test Form Submissions

1. Visit your deployed site
2. Fill out the early access form
3. Submit the form
4. Check Netlify Dashboard → Forms → form submissions
5. Verify you received email notification (if configured)

## 📋 What's Included

### New Components
- **`/src/components/Section.tsx`** - Reusable section wrapper
- **`/src/components/JoinEarlyAccessForm.tsx`** - Early access form with Netlify Forms integration

### Updated Files
- **`/src/app/page.tsx`** - Coming Soon homepage
- **`/src/app/layout.tsx`** - Updated SEO metadata
- **`/netlify.toml`** - Netlify Forms configuration
- **`/public/forms/early-access.html`** - Static form for Netlify detection

### Features
✅ Coming Soon hero section
✅ Phone demo video integration
✅ Early access signup form
✅ Hardware waitlist checkbox
✅ Netlify Forms integration
✅ Spam protection (honeypot)
✅ Inline success/error messages
✅ Smooth scroll to form
✅ Responsive design
✅ SEO optimized

## 🎨 Form Features

### Primary CTA: "Join the Waitlist"
- Scrolls to form
- Standard email capture

### Secondary CTA: "Get Hardware Updates"
- Scrolls to form
- Pre-checks hardware waitlist checkbox

### Form Fields
- **Name** (required)
- **Email** (required, validated)
- **Hardware Waitlist** (optional checkbox)
- **Honeypot** (hidden spam protection)

## 🔒 Security Features

- ✅ Honeypot field for spam protection
- ✅ Client-side email validation
- ✅ Netlify spam filtering enabled
- ✅ Rate limiting via Netlify

## 📧 Form Notifications Setup

### Email Notifications
1. Netlify Dashboard → Forms → Form notifications
2. Click **Add notification** → **Email notification**
3. Enter your email address
4. Select **early-access** form
5. Customize email template (optional)

### Slack Notifications (Optional)
1. Create Slack webhook URL
2. Add Slack notification in Netlify
3. Select **early-access** form

### Webhook Integration (Optional)
Send form submissions to your CRM or database:
```
Webhook URL: https://your-api.com/webhook
Form: early-access
```

## 🧪 Testing Checklist

- [ ] Form displays correctly on desktop
- [ ] Form displays correctly on mobile
- [ ] "Join the Waitlist" button scrolls to form
- [ ] "Get Hardware Updates" button pre-checks hardware checkbox
- [ ] Form validation works (empty fields)
- [ ] Email validation works (invalid format)
- [ ] Success message appears after submission
- [ ] Form clears after successful submission
- [ ] Submissions appear in Netlify Dashboard
- [ ] Email notifications are received
- [ ] Honeypot prevents spam
- [ ] Header "Join Waitlist" button works
- [ ] Footer "Join Waitlist" button works

## 🎯 Next Steps After Deployment

1. **Set up analytics** (Google Analytics, Plausible, etc.)
2. **Configure email notifications** for form submissions
3. **Test form submissions** thoroughly
4. **Monitor Netlify Forms dashboard** for submissions
5. **Export form data** regularly (CSV available in dashboard)
6. **Set up auto-responder** (optional, via webhook + email service)
7. **A/B test CTAs** if needed

## 📊 Accessing Form Submissions

### Via Netlify Dashboard
1. Go to your site dashboard
2. Click **Forms** in the sidebar
3. Select **early-access** form
4. View, export (CSV), or delete submissions

### Via Netlify API (Advanced)
```javascript
// Example: Fetch form submissions via API
const response = await fetch(
  `https://api.netlify.com/api/v1/forms/${formId}/submissions`,
  {
    headers: {
      'Authorization': `Bearer ${NETLIFY_API_TOKEN}`
    }
  }
);
```

## 🐛 Troubleshooting

### Form Not Detected
- Ensure static form exists in `/public/forms/early-access.html`
- Rebuild and redeploy site
- Check build logs for form detection

### Form Submissions Not Working
- Check browser console for errors
- Verify form name matches: `early-access`
- Test with network throttling disabled
- Check Netlify Forms quota (100 submissions/month on free plan)

### Spam Issues
- Honeypot field is enabled
- Enable Netlify's built-in spam filtering
- Consider adding reCAPTCHA if spam continues

## 💰 Netlify Forms Limits

**Free Plan:**
- 100 form submissions per month
- Upgrade to Pro for 1,000+ submissions

**If you exceed limits:**
- Submissions will be rejected
- Consider upgrading or using alternative (Formspree, Mailchimp, etc.)

## 🔄 Migration Path (If Needed)

If you need to switch form providers later:

1. **API Route** - Create `/api/submit-form` endpoint
2. **Formspree** - Drop-in replacement
3. **ConvertKit** - Email marketing integration
4. **Mailchimp** - Email list building
5. **Custom Database** - Store in Supabase

Just update the `handleSubmit` function in `JoinEarlyAccessForm.tsx`.

## 📝 Notes

- Form submissions are stored in Netlify for 30 days
- Export data regularly for backup
- Hardware waitlist checkbox value: "yes" or "no"
- Honeypot field name: "company"
- Form is accessible and follows best practices

---

## 🆘 Need Help?

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Support](https://www.netlify.com/support/)
- Check Netlify build logs for issues
- Test locally before deploying

