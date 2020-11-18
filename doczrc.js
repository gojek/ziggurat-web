export default {
  title: 'Ziggurat',
  description: 'Redefining how you work with real time events, powering more than 250 applications at Gojek.',
  repository: 'https://github.com/gojek/ziggurat',
  ignore: ['README.md'],
  menu: [
    'Home',
    'Getting Started',
    'Concepts',
    'Middleware',
    'Retries and Queues',
    'Streaming Frameworks Comparison',
    'Upgrade Guide',
    'Release Notes',
    { name: 'Use-Cases', menu: ['Nearby Driver Service'] }
  ],
  themeConfig: {
    initialColorMode: 'dark',
  },
}