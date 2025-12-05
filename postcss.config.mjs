// ESM PostCSS config — Next.js expects plugin names (strings) or an object mapping
// to plugin options. Provide plugin names as keys so Next can load them correctly.

// Check if RTL is enabled via the public environment variable
const enableRTL = process.env.NEXT_PUBLIC_ENABLE_RTL === 'true'

// Define the options for postcss-rtlcss in case it's enabled
const postcssRtlcssOptions = {}

// Log status for clarity during build
if (enableRTL) {
  console.log('INFO: Configuring postcss-rtlcss [ENABLED] via postcss.config.mjs')
} else {
  console.log('INFO: Configuring postcss-rtlcss [DISABLED] via postcss.config.mjs')
}

export default {
  plugins: {
    // Use plugin name strings so Next.js/PostCSS can resolve the package.
    '@tailwindcss/postcss': {},
    // Conditionally include postcss-rtlcss options when enabled
    ...(enableRTL ? { 'postcss-rtlcss': postcssRtlcssOptions } : {}),
  },
}
