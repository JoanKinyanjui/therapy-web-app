import Nav from '@/components/Nav'
import Schedule from '@/components/Schedule'
import Head from 'next/head'
import React from 'react'

function SchedulePage() {
  return (
    <div>
        <Head title='Schedule'></Head>
        <Nav />
        <Schedule />
    </div>
  )
}

export default SchedulePage