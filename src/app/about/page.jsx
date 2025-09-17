/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I\'m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About Garmani
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              Garmani is a unique business built on the power of connection. We are a two-person team dedicated to continuously growing and nurturing a vast, high-quality network of service and goods providers across a wide array of industries—farming, technology, legal, business, sports, entertainment, and more.
            </p>
            <p>
              Our mission is simple: to give our clients access to the best, most reliable professionals and suppliers, no matter the field. We pride ourselves on our personal approach, ensuring every connection is genuine and every recommendation is tailored to your needs.
            </p>
            <p>
              At Garmani, we believe that the right introduction can change everything. Our ongoing work is to keep our network fresh, relevant, and of the highest quality, so you can always count on us to open the right doors.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:magali@garmani.be"
              icon={MailIcon}
              className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              magali@garmani.be
            </SocialLink>
            <SocialLink
              href="mailto:gary@garmani.be"
              icon={MailIcon}
              className="mt-4 border-zinc-100 dark:border-zinc-700/40"
            >
              gary@garmani.be
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
