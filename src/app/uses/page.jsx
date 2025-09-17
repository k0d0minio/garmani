/* eslint-disable react/no-unescaped-entities */
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Our Process',
  description: "How Garmani leverages charisma, compassion, and a growing network to help you in any situation.",
}

export default function Uses() {
  return (
    <SimpleLayout
      title="How We Work: The Garmani Process"
      intro="At Garmani, our strength lies in our natural charisma, compassion, and ever-expanding network. As a two-person team, we're constantly invited to a wide array of networking events, allowing us to connect with people from all walks of life and industries. Our ability to help grows with every new contact, making us uniquely positioned to assist in any situation—no matter how difficult or precarious."
    >
      <div className="space-y-20">
        <ToolsSection title="Our Process">
          <Tool title="Meet the Garmani Team">
            Once you meet us, you'll quickly see what sets us apart. Our approach is personal, genuine, and built on trust. Most of the time, you'll hit it off with us right away—it's just how we are.
          </Tool>
          <Tool title="Expanding Network, Expanding Solutions">
            Thanks to our ongoing presence at diverse events and our ever-growing pool of contacts, we can help with almost any challenge across a wide range of industries and businesses.
          </Tool>
          <Tool title="Tailored Help for Every Situation">
            If you have a need or find yourself in a difficult situation, just let us know. We're here to listen, understand, and connect you with the right people or resources.
          </Tool>
          <Tool title="Take the Next Step">
            If you feel a connection and want to move forward, simply fill out our form (link coming soon). Once we receive your details, we'll get back to you with a personalized plan of action tailored to your requirements.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
