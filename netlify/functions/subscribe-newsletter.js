// File: netlify/functions/subscribe-newsletter.js

// For Node.js versions older than 18, or if 'fetch' is not globally available
// in your Netlify function environment, you might need to install 'node-fetch'.
// In your project's root, run: npm install node-fetch
// Then uncomment the line below:
// const fetch = require('node-fetch'); // Or use import if your function environment supports ES modules for dependencies

exports.handler = async function(event, context) {
  // 1. Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ success: false, message: 'Only POST requests are allowed.' }),
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
    };
  }

  // 2. Get MailerLite API Key and Group ID from environment variables
  // These MUST be set in your Netlify site's environment variable settings.
  const { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } = process.env;

  if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
    console.error('Missing MailerLite API Key or Group ID in environment variables.');
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Server configuration error. Please contact support.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    // 3. Parse the email from the request body
    const { email } = JSON.parse(event.body);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return {
        statusCode: 400, // Bad Request
        body: JSON.stringify({ success: false, message: 'A valid email address is required.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // 4. Prepare data for MailerLite API
    // API Reference: https://developers.mailerlite.com/reference/subscribers#create-or-update-a-subscriber
    const subscriberData = {
      email: email,
      groups: [MAILERLITE_GROUP_ID],
      // You can add more fields here if your MailerLite form collects them, e.g.:
      // fields: {
      //   name: "John Doe", // if you collect name
      // },
      // status: 'active', // 'active' or 'unconfirmed' depending on your MailerLite group settings (double opt-in)
      // If your group has double opt-in, new subscribers will be 'unconfirmed' until they click the confirmation email.
      // Setting status to 'active' here might bypass double opt-in if MailerLite allows it via API for specific cases.
      // It's generally best to respect the group's double opt-in setting.
    };

    const mailerliteApiUrl = 'https://connect.mailerlite.com/api/subscribers';

    // 5. Make the API request to MailerLite
    const response = await fetch(mailerliteApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify(subscriberData),
    });

    const responseData = await response.json();

    // 6. Handle MailerLite's response
    if (response.ok && responseData.data && responseData.data.id) {
      // Successfully created or updated subscriber
      console.log(`Successfully subscribed/updated: ${email}`);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Subscription successful! Please check your email.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    } else if (response.status === 422 && responseData.errors) {
      // Validation errors (e.g., email already subscribed, invalid format)
      // Check if the error indicates the subscriber already exists.
      const emailExistsError = Object.values(responseData.errors).some(errArray => 
        errArray.some(errMsg => typeof errMsg === 'string' && (errMsg.toLowerCase().includes('already subscribed') || errMsg.toLowerCase().includes('member already exists')))
      );

      if (emailExistsError) {
         console.log(`Email ${email} already subscribed, treating as success.`);
         return {
           statusCode: 200, 
           body: JSON.stringify({ success: true, message: 'You are already subscribed!' }),
           headers: { 'Content-Type': 'application/json' },
         };
      }
      
      console.error('MailerLite validation error:', JSON.stringify(responseData.errors));
      return {
        statusCode: 422,
        body: JSON.stringify({ success: false, message: responseData.message || 'Invalid data provided.', errors: responseData.errors }),
        headers: { 'Content-Type': 'application/json' },
      };
    } else {
      // Other errors from MailerLite
      console.error(`MailerLite API error (Status: ${response.status}):`, JSON.stringify(responseData));
      return {
        statusCode: response.status,
        body: JSON.stringify({ success: false, message: responseData.message || `Failed to subscribe. Error: ${response.status}` }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

  } catch (error) {
    console.error('Internal server error in function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'An unexpected error occurred. Please try again.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
