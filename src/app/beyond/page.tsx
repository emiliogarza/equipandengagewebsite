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
import beyondPosterSquare from '@/images/beyond/beyond-poster-square-sm.png'
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
import imageBenitez from '@/images/team/Benitez.jpg'
import imageBounds from '@/images/team/Bounds.jpg'
import imageCashen from '@/images/team/Cashen.jpg'
import imageDiGiovanniJ from '@/images/team/DiGiovanni_J.jpg'
import imageDiGiovanniV from '@/images/team/DiGiovanni_V.jpg'
import imageDuty from '@/images/team/Duty.jpg'
import imageDykes from '@/images/team/Dykes.jpg'
import imageEwing from '@/images/team/Ewing.jpg'
import imageGarza from '@/images/team/Garza.jpg'
import imageJennings from '@/images/team/Jennings.jpg'
import imageKanhai from '@/images/team/Kanhai.jpg'
import imageKeith from '@/images/team/Keith.jpg'
import imageLibby from '@/images/team/Libby.jpg'
import imageMarxer from '@/images/team/Marxer.jpg'
import imageMcdonald from '@/images/team/mcdonald.jpg'
import imageOrianus from '@/images/team/Orianus.jpg'
import imageScott from '@/images/team/Scott.jpg'
import imageSmith from '@/images/team/Smith.jpg'
import imageKadee from '@/images/team/Sullivan_K.jpg'
import imageTyler from '@/images/team/Sullivan_T.jpg'

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
      <Container className="mt-24">
      <Accordion title="Objective">
          <p className="text-base leading-7 text-gray-600">We will be going BEYOND and traveling to Sydney, Australia, April 29 through May 8, 2024, to fulfill our mission statement by conducting a <strong>FREE</strong>, multi-day training event for those from surrounding cities, regions, and countries who desire to learn, advance, and progress BEYOND in their God-called ministry. By partnering with the amazing team in Sydney, and coming alongside their tremendous staff, we will be able to reach BEYOND and into the international church to help equip and engage the nations.</p> 
          <p className="text-base leading-7 text-gray-600 mt-6">Participants must receive their pastor&apos;s approval to attend and upon arrival will receive useable material for church teams, links to recorded instructional seminar videos, and specific resource handouts. Along with this training, we will produce a live, two-day recording at The Pentecostals of Sydney comprised of newly written material. It is also our goal to supply churches with needed equipment and resources. The initiative will conclude on Sunday with services taking place with the intent of reaching new souls.</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-6">
            The Need
          </h2>
          <p className="text-base leading-7 text-gray-600">This region consists of many nations and territories, thousands of islands, and 419 million people of various cultures, traditions, and dialects. There are over <strong>4,000 UPCI churches</strong> that make up over <strong>1.4 million constituents</strong> in the entire pacific region. With a population of over <strong>25 million people</strong>, Australia consists of over 60 churches and over 6,000 members.</p> 
          <p className="text-base leading-7 text-gray-600 mt-6"><strong>The need</strong> for <strong>material</strong>, <strong>practical training</strong>, <strong>one-on one interaction</strong>, and <strong>teaching</strong> is great. As this type of initiative would be one the <strong>first of its kind</strong> in Australia, it will help bring additional dynamic <strong>kingdom tools</strong> to churches and ministry groups. Those who attend will be able to obtain useable resources, receive recorded video sessions of the training, and glean from classes and team building initiatives that would assist in strengthening the local church and its leaders for years to come. They will also be able to be a part of a live recording and be able to observe the inner workings of the process.</p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-6">
            Why Syney?
          </h2>
          <p className="text-base leading-7 text-gray-600">In our desire to go BEYOND and have a kingdom-impact within a specific window of time, we chose Sydney because it is a center location that is easily accessible for many surrounding countries in the Pacific Region such as New Zealand, Fiji, Vanuatu, Tonga, and Samoa. This initiative would provide an open door for many from these countries to attend and would allow room for potential growth and a lasting impact for the future. It is also home to the largest airport in all of Australia and an easy access point to those who would desire to come and be a part of this multi-day event. The Pentecostals of Sydney provides a tremendous facility to execute a training/live recording and will allow room for multiple breakout sessions and classes.</p> 
      </Accordion>
      </Container>
    </div>
  )
}

function Mission() {
  return (
    <div className="mt-12 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow=""
        title="Mission Statement"
        invert
      >
        <p>
        The mission of BEYOND is to challenge, equip, and train the international Apostolic church with material and knowledge that will assist in advancing God’s kingdom. We will reach BEYOND borders and into regions and nations where churches, ministries, leadership teams, and music groups can be impacted in their local field of harvest. It is our desire to accomplish this by partnering with the local church to help support the Great Commission of Jesus Christ being fulfilled in all the earth.
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
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Leslie Alexander',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageLeslieAlexander },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Partner & Business Relations',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'BEYOND Team',
    people: [
      {
        name: 'Tyler Sullivan',
        role: 'Coordinator',
        image: { src: imageTyler },
      },
      {
        name: 'Jonathan McDonald',
        image: { src: imageMcdonald },
      },
      {
        name: 'Aaron Bounds',
        image: { src: imageBounds },
      },
      {
        name: 'David Jennings',
        image: { src: imageJennings },
      },
      {
        name: 'Brittani Scott',
        image: { src: imageScott },
      },
      {
        name: 'Jessica DiGiovanni',
        image: { src: imageDiGiovanniJ },
      },
      {
        name: 'Kadee Sullivan',
        image: { src: imageKadee },
      },
      {
        name: 'Patrick Orianus',
        image: { src: imageOrianus },
      },
      {
        name: 'Pauline Benitez',
        image: { src: imageBenitez },
      },
      {
        name: 'Kurt Kanhai',
        image: { src: imageKanhai },
      },
      {
        name: 'Colton Duty',
        image: { src: imageDuty },
      },
      {
        name: 'Travis Dykes',
        image: { src: imageDykes },
      },
      {
        name: 'Austin Keith',
        image: { src: imageKeith },
      },
      {
        name: 'Matt Ewing',
        image: { src: imageEwing },
      },
      {
        name: 'Vito DiGiovanni',
        image: { src: imageDiGiovanniV },
      },
      {
        name: 'Emilio Garza',
        image: { src: imageGarza },
      },
      {
        name: 'Jordan Smith',
        image: { src: imageSmith },
      },
      {
        name: 'Benjamin Cashen',
        image: { src: imageCashen },
      },
      {
        name: 'Martin Libby',
        image: { src: imageLibby },
      },
      {
        name: 'Erica Marxer',
        image: { src: imageMarxer },
      },
    ],
  },
]

function Team() {
  return (
      <Accordion title='BEYOND Team'>
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
                        <div className="group relative overflow-hidden bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
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
      </Accordion>
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
    <Accordion title='Schedule'>
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
                <p>
                  <strong>Friday | May 3 | 2024</strong><br />
                  9:00am – Doors open and check-in begins.<br />
                  9:45am – Attendee meet and greet.<br />
                  10:00am – Devotion for all attendees (Pastor Aaron Bounds – main auditorium)<br />
                  10:30am – Devotion ends and training initiative begins.<br />
                  10:40am -11:25am – Session One<br />
                  1. Videography for Evangelism and Marketing – Jordan Smith (Session Room 1)<br />
                  2. Operating in Apostolic Authority – Jonathan McDonald (Session Room 2)<br />
                  3. Songwriting Technique – David Jennings, Brittani Scott, Kurt Kanhai (Main Auditorium)<br />
                  11:40am -12:25pm – Session Two<br />
                  1. Developing A Discipleship Culture – Tyler Sullivan (Session Room 1)<br />
                  2. Photography – Benjamin Cashen (Session Room 2)<br />
                  3. Vocal Technique – Jessica Di Giovanni, Kadee Sullivan (Main Auditorium)<br />
                  12:40pm -1:25pm – Session Three<br />
                  1. Power Through Prayer – Matt Ewing (Session Room 1)<br />
                  2. Team Continuity – Kurt Kanhai (Session Room 2)<br />
                  3. Drumming Technique – Austin Keith (Main Auditorium)<br />
                  1:30pm – Dismissal<br />
                  6:00pm – Doors open for early-bird ticket holders.<br />
                  6:30pm – Doors open for standard ticket holders.<br />
                  7:30pm – Live recording
                </p>
                <p className="mt-12">
                  <strong>Saturday | May 4 | 2024</strong><br />
                  9:00am – Doors open and check-in begins.<br />
                  9:45am – Attendee meet and greet.<br />
                  10:00am – Devotion for all attendees (Pastor Jonathan McDonald – main auditorium)<br />
                  10:30am – Devotion ends and training initiative begins.<br />
                  10:40am -11:25am – Session One<br />
                  1. Leading Worship – David Jennings, Brittani Scott, Pauline Benitez (Session Room 1)<br />
                  2. Advancing the Five-Fold Ministry – Aaron Bounds (Session Room 2)<br />
                  3. Local Church Sound Production – Vito Di Giovanni (Main Auditorium)<br />
                  11:40am -12:25pm – Session Two<br />
                  1. Building Your Volunteer Base / Ministry of Helps – Austin Keith (Session Room 1)<br />
                  2. Building A Creative Team – Benjamin Cashen, Emilio Garza (Session Room 2)<br />
                  3. Developing A Worship Culture – David Jennings, Patrick Orianus (Main Auditorium)<br />
                  12:40pm -1:25pm – Session Three<br />
                  1. Timing For Musicians – Matt Ewing (Session Room 1)<br />
                  2. Technology and Music – Kurt Kanhai (Session Room 2)<br />
                  3. Guitar and Bass Technique – Colton Duty, Travis Dykes (Main Auditorium)<br />
                  1:30pm – Dismissal<br />
                  6:00pm – Doors open for early-bird ticket holders.<br />
                  6:30pm – Doors open for standard ticket holders.<br />
                  7:30pm – Live recording
                </p>
                <p className="mt-12">
                  <strong>Sunday | May 5 | 2024</strong><br />
                  9:15am - First service begins<br />
                  11:15am - Second service begins
                </p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Tickets() {
  return (
    <Accordion title='Tickets'>
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
                <p>Training Initiative tickets go live on <strong>January 8, 2024</strong>.</p>
                <p className="mt-12">Live Recording tickets go live on <strong>February 8, 2024</strong>.</p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Volunteer() {
  return (
    <Accordion title='Volunteer'>
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Volunteer
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p>More information on how to volunteer coming soon!</p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Oversight() {
  return (
    <Accordion title='Oversight / Advisory Committee'>
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Oversight/Advisory Committee
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p>
                  Pastor Jonathan McDonald – Eureka, CA<br />
                  Pastor Travis Worthington – Arlington, VA<br />
                  Pastor Kenneth Sullivan – Citrus Heights, CA<br />
                  Pastor Joel McCoy – Porter, TX<br />
                  Rev. Nate Ludwig – Eureka, CA
                </p>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Location() {
  return (
    <Accordion title='Location'>
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Location
                </h2>
              </FadeIn>
              <FadeIn>
              <div className="lg:col-span-3">
                <p>The Pentecostals of Sydney <br />
                24-26 Harp St, Campsie NSW 2194, Australia<br />
                </p>
              </div>
              </FadeIn>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Accommodations() {
  return (
    <Accordion title='Accommodations'>
      <div className="space-y-24">
          <FadeInStagger>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  Accommodations
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <p>Holiday Inn Express – Sydney Airport<br />
                2-12 Sarah Street, Mascot, NSW 2020 Australia<br />
                Phone: 61-2-83649111<br />
                (7 miles from church)<br />
                <Button invert={false} href="https://www.ihg.com/holidayinnexpress/hotels/us/en/mascot/sydap/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-AU-_-SYDAP">Reserve</Button>
                </p>

                <p className="mt-12">Holiday Inn (Sydney Airport)<br />
                Corner of O&apos;Riordan Street, Mascot, NSW 2020 Australia
                Phone: 61-2-93300600
                (7 miles from church)
                </p>
                <Button invert={false} href="https://www.ihg.com/holidayinn/hotels/us/en/sydney/sydbr/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-AU-_-SYDBR">Reserve</Button>

                <p className="mt-12">
                Pullman Hotel (Sydney Airport)<br />
                191 O Riordan Street, Mascot, NSW 2020 Australia<br />
                61-2-83984600<br />
                (7 miles from church)
                </p>
                
                <Button invert={false} href="https://all.accor.com/hotel/9522/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps">Reserve</Button>

              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Sponsorship() {
  return (
    <Accordion title='Sponsorship'>
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
                <p className='mb-6'>Since the need for training is great, we appreciate any and all help to see this vision become a reality! Our goal is to make this training free for those able to attend.</p>
                <ol>
                  <li>1. Help by partnering with us in prayer. We ask that you partner with us by adding us to your daily prayer list. Pray specifically for maximum effectiveness, global reach, spiritual discernment, and that the mission of God is magnified.</li>
                  <li>2. Help by partnering with us monetarily. Please note: all funds allocated to this endeavor are tax deductible and can receive full missions giving credit through the United Pentecostal Church International.</li>
                </ol>
                <p className='mt-6'>There are several areas to which you can donate to help us achieve our mission. Your support would go towards sponsoring training resources, travel, lodging, transportation, instructors, and equipment</p>
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
                <Button href="/partner" invert={false} className='ml-3'>
                  Donate
                </Button>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
  )
}

function Resources() {
  return (
    <Accordion title='Resources'>
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
              <Link href="https://drive.google.com/file/d/1jeE1TaeKFc1xhnqjyTYP4fyw2KQ_g7Br/view?usp=share_link" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline">
                  <path fillRule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clipRule="evenodd" />
                  <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                </svg>
                <span className='align-text-top'>&nbsp;Beyond Packet</span>
              </Link>
              <Link href="https://drive.google.com/file/d/1LyZcaYid7TH-jLCg1EkV3qPA8Ih8E0Oe/view?usp=share_link" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline">
                  <path fillRule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clipRule="evenodd" />
                  <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                </svg>
                <span className='align-text-top'>&nbsp;Beyond Poster</span>
              </Link>
              <Link href="https://drive.google.com/file/d/1SUhVB0cHLQfT7Nzoxsb6CogKP3SitY0Y/view?usp=share_link" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline">
                  <path fillRule="evenodd" d="M9.75 6.75h-3a3 3 0 00-3 3v7.5a3 3 0 003 3h7.5a3 3 0 003-3v-7.5a3 3 0 00-3-3h-3V1.5a.75.75 0 00-1.5 0v5.25zm0 0h1.5v5.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V6.75z" clipRule="evenodd" />
                  <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
                </svg>
                <span className='align-text-top'>&nbsp;Partner Form</span>
              </Link>
              <Link href="https://drive.google.com/file/d/1m6Dnk4y4Y1BqtQP_BtWTchCau1SLL_tj/view?usp=share_link" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className='align-text-top'>&nbsp;Promotional Slide</span>
              </Link>
              <Link href="https://www.youtube.com/watch?v=zuzZ_RSOb2E" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className='align-text-top'>&nbsp;Beyond Promo Video 1</span>
              </Link>
              <Link href="https://www.youtube.com/watch?v=Ol1Lurn5BKg" target="_blank" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className='align-text-top'>&nbsp;Beyond Promo Video 2</span>
              </Link>
              </div>
            </div>
          </FadeInStagger>
      </div>
    </Accordion>
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
      <Image src={beyondPosterSquare} alt="Beyond Initiative 2024" className='rounded-3xl mx-auto max-w-auto sm:block md:hidden' />
      <Image src={beyondPoster} alt="Beyond Initiative 2024" className='rounded-3xl mx-auto max-w-auto hidden md:block' />
    </Container>

    <Mission />

    <IntroDetails />

    <Container>
      <Location />
    </Container>

    <Container>
      <Team />
    </Container>

    <Container>
      <Schedule />
    </Container>

    <Container>
      <Tickets />
    </Container>

    <Container>
      <Accommodations />
    </Container>

    <Container>
      <Sponsorship />
    </Container>

    <Container>
      <Oversight />
    </Container>
    
    <Container>
      <Volunteer />
    </Container>

    <Container>
      <Resources />
    </Container>

    </>
  )
}
