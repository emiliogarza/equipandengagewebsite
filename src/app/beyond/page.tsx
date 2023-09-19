import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { Button } from '@/components/Button'
import beyondPoster from '@/images/beyond/beyond-poster.jpg'
import beyondTeam from '@/images/beyond/beyond-team.jpg'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { Accordion } from '@/components/Accordion'


function IntroDetails() {
  return (
    <div className={'relative pt-6'}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
      <Accordion title="Objective">
          <p className="text-base leading-7 text-gray-600">We will be going BEYOND and traveling to Sydney, Australia, April 29 through May 8, 2024, to fulfill our mission statement by conducting a <strong>FREE</strong>, multi-day training event for those from surrounding cities, regions, and countries who desire to learn, advance, and progress BEYOND in their God-called ministry. By partnering with the amazing team in Sydney, and coming alongside their tremendous staff, we will be able to reach BEYOND and into the international church to help equip and engage the nations.</p> 
          <p className="text-base leading-7 text-gray-600">Participants must receive their pastor&apos;s approval to attend and upon arrival will receive useable material for church-teams, links to recorded instructional seminar videos, and specific resource handouts. Along with this training, we will produce a live, two-day recording at The Pentecostals of Sydney comprised of newly written material. It will include local singers and musicians from surrounding churches and areas in Australia and other nations. It will conclude on Sunday with a crusade-style service taking place at the church with the intent of reaching new souls.</p>
      </Accordion>

      <Accordion title='The Need'>
        <p>The need for material, practical training, one-on one interaction, and teaching is great. As this type of initiative would be the first of its kind in this area, it will help bring additional dynamic kingdom-tools to churches and regions. Those who attend would be able to obtain useable resources, receive recorded video sessions of the training, and glean from classes and team building initiatives that would help strengthen the local church and its leaders for years to come. They will also be able to be a part of a live recording and see the inner workings of the team. No one will be able to attend without the permission of their pastor. Each member of the selected team has a burden to further the gospel and will offer practical instruction in their field of expertise.</p> 
      </Accordion>

      <Accordion title='Why Sydney?'>
        <p>In our desire to go BEYOND and have a kingdom-impact within a specific window of time, Sydney is ideal because it is a center location that is easily accessible for many surrounding countries in the Pacific Region. This would be a first-of-its-kind event for many places and would allow room for potential growth and a lasting impact in the future. It is also home to the largest airport in all of Australia and an easy access-point to those who would desire to come and be a part of this multi-day event. The Pentecostals of Sydney provides a tremendous facility to execute a training/live recording and will allow room for multiple breakout sessions and classes.</p> 
      </Accordion>
      </Container>
    </div>
  )
}

function Mission() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow=""
        title="Mission Statement"
        invert
      >
        <p>
        The mission and dream of BEYOND is to challenge, equip, and train the international Apostolic church with material and knowledge that will advance and impact music groups, various church ministries, and leadership teams in local assemblies, regions, and nations. By partnering with the local churches, we can reach BEYOND borders and into areas where a lasting impact can be formed, and the Great Commission of Jesus Christ can be fulfilled; to go into all the world.
        </p>
      </SectionIntro>
      {/* <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container> */}
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

function Instructors() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Beyond Team
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
              <Image src={beyondTeam} alt="Beyond Team 2024" className='rounded-3xl mx-auto max-w-auto' />
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}

function Schedule() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Schedule
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p><strong>Event Dates April 29 - May 8, 2024</strong></p>
                <p>Full Schedule will be available soon.</p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}

function Tickets() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Tickets
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p>Tickets will be available soon.</p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}

function Logistics() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Logistics
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p>Logistic Information will be available soon.</p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}

function Sponsorship() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Sponsorship
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Partner with the Mission
                </h2>
                <p className='mb-6'>Since the need for training is great, we greatly appreciate all help to see this vision become a reality! Our goal is to make this training free for those able to attend.</p>
                <ol>
                  <li>1. Help by partnering with us in prayer. We ask that you partner with us by adding us to your daily prayer list. Pray specifically for maximum effectiveness, global reach, spiritual discernment, and that the mission of God is magnified.</li>
                  <li>2. Help by partnering with us monetarily. Please note: all funds allocated to this endeavor are tax deductible and can receive full missions giving credit through the United Pentecostal Church International.</li>
                </ol>
                <p className='mt-6'>There are several areas to which you can donate to help us achieve our mission. Your support would go towards sponsoring our Training Resources, Travel, Logding, Transportation, Instructors and Equipment</p>
                <Container className="my-12">
                  <GridList>
                    <GridListItem title="Church Sponsors">
                      Churches that partner with the mission will have their church name advertised on material distributed at BEYOND. Churches that partner will receive a downloadable link with session notes and limited videos to use in your local church. (All above based on approval)
                    </GridListItem>
                    <GridListItem title="Personal of Corporate Sponsors">
                      Personal or corporate sponsors that partner with the mission will have their name, website, and logo advertised on training material distributed at BEYOND (upon approval).
                    </GridListItem>
                    <GridListItem title="Sponsor a Song">
                      A person, church, or corporation can sponsor a song or half of a song (upon approval) and will receive recognition the day the song is recorded and will be credited upon the release of the project. They will also receive a live link to watch the live recording day-of.
                    </GridListItem>
                  </GridList>
                </Container>
                <Button href="/contact" invert={false}>
                  Become a Sponsor
                </Button>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}

function Resources() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Resources
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
              <Link href="https://drive.google.com/file/d/1QlHz2s-Hl_Mmb5vRywtXhiii7GyzSqNj/view?usp=share_link" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline">
                  <path fillRule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clipRule="evenodd" />
                  <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                </svg>
                <span className='align-text-top'>&nbsp;Beyond Packet</span>
              </Link>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Container>
  )
}


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function Beyond() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <Image src={beyondPoster} alt="Beyond Initiative 2024" className='rounded-3xl mx-auto max-w-auto' />
    </Container>

    <Mission />

    <IntroDetails />

    <Instructors />

    <Sponsorship />

    <Schedule />

    <Tickets />

    {/* <Logistics /> */}

    <Resources />

    </>
  )
}
