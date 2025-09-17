/* eslint-disable react/no-unescaped-entities */
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You\'re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank you for connecting with Garmani."
      intro="We appreciate your interest. We'll keep you informed about new opportunities and updates from our network. You can opt out at any time."
    />
  )
}
