import 'expo-router/entry'; // This renders the correct _layout file based on the specific platform...
// ...and starts with the index page
import './unistyles'; // The injects Unistyles for C++-native custom styling

// Initialise the Sentry SDK for performance and error logging..
// ..before Expo Router detects the Platform and renders the specific _layout file as its entry point
// Sentry.init({
//   dsn: 'https://c73380ff81478f5ab63ff2684293a3e7@o4510828122996736.ingest.de.sentry.io/4510828124962896',

//   // Adds more context data to events (IP address, cookies, user, etc.)
//   sendDefaultPii: false, // ONLY SET THIS TO TRUE IF THE APP IS IN A TESTING ENVIRONMENT!

//   // Enable Logs
//   enableLogs: false,
//   enableCaptureFailedRequests: false,
//   enableAppHangTracking: false,
//   enableAppStartTracking: false,
//   integrations: [Sentry.feedbackIntegration()]
// });
