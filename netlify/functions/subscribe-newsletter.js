// Example for Netlify: save this as netlify/functions/subscribe-newsletter.js
// Example for Vercel: save this as api/subscribe-newsletter.js

// You'll need to install node-fetch if you're using an older Node.js version
// or if your serverless environment doesn't have fetch built-in.
// For Node.js 18+, fetch is typically available globally.
// If needed: npm install node-fetch
// const fetch = require('node-fetch'); // Or import fetch from 'node-fetch';

exports.handler = async function(event, context) {
  // 1. Check if it's a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  // 2. Get environment variables (API Key and Group ID)
  // These MUST be set in your hosting provider's environment variable settings
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Your Group ID: 156222500098803117

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    console.error("MailerLite API Key or Group ID is not set in environment variables.");
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Server configuration error.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    // 3. Parse the incoming request body (email address from frontend)
    const body = JSON.parse(event.body);
    const email = body.email;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Invalid email address provided.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // 4. Construct the payload for MailerLite API
    const subscriberData = {
      email: email,
      groups: [MAILERLITE_GROUP_ID], // Add subscriber to this group
      // You can add more fields here if needed, e.g., name, custom fields
      // status: 'active', // 'active' or 'unconfirmed' depending on your MailerLite settings (double opt-in)
    };

    // 5. Make the API call to MailerLite
    const mailerliteApiUrl = 'https://connect.mailerlite.com/api/subscribers';
    
    console.log(`Sending data to MailerLite: ${JSON.stringify(subscriberData)}`);

    const response = await fetch(mailerliteApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(subscriberData),
    });

    // 6. Handle MailerLite's response
    const responseData = await response.json();
    
    console.log(`MailerLite response status: ${response.status}`);
    console.log(`MailerLite response data: ${JSON.stringify(responseData)}`);

    if (response.ok && responseData.data && responseData.data.id) {
      // Successfully added or updated subscriber
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
        headers: { 'Content-Type': 'application/json' },
      };
    } else if (response.status === 422 && responseData.errors) {
      // Validation errors (e.g., email already subscribed, invalid format if not caught earlier)
      // MailerLite often returns 422 for existing subscribers if you try to re-add them without an update flag.
      // For simplicity, we can treat this as a success if the email already exists.
      // Check if the error indicates the subscriber already exists.
      const emailExistsError = Object.values(responseData.errors).some(errArray => 
        errArray.some(errMsg => errMsg.toLowerCase().includes('already subscribed') || errMsg.toLowerCase().includes('member already exists'))
      );

      if (emailExistsError) {
         console.log("Email already subscribed, treating as success.");
         return {
           statusCode: 200, // Or 201 if you prefer for existing but now confirmed
           body: JSON.stringify({ success: true, message: 'You are already subscribed!' }),
           headers: { 'Content-Type': 'application/json' },
         };
      }
      
      console.error('MailerLite validation error:', responseData.errors);
      return {
        statusCode: 422,
        body: JSON.stringify({ success: false, message: responseData.message || 'Validation error from MailerLite.', errors: responseData.errors }),
        headers: { 'Content-Type': 'application/json' },
      };
    } else {
      // Other errors from MailerLite
      console.error('MailerLite API error:', responseData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ success: false, message: responseData.message || 'Failed to subscribe via MailerLite API.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

  } catch (error) {
    console.error('Error in serverless function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Internal server error.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
