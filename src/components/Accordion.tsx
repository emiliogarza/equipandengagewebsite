'use client'

import { Disclosure } from '@headlessui/react'


export function Accordion({
    title,
    children,
  }: {
    title: string
    children: React.ReactNode
  }) {

    return (
        <Disclosure as="div" className="bg-white p-6 rounded-2xl drop-shadow-md mb-6">
        {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{title}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                              </svg>                      
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                              </svg>
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        {children}
                      </Disclosure.Panel>
                    </>
                  )}
        </Disclosure>
    )
}

