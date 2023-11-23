import Nav from '@/components/Nav'
import PeerToPeer from '@/components/PeerToPeer'
import Head from 'next/head'
import React from 'react'

function peer() {
  return (
    <div>
        <Head title='peer to peer terapy'></Head>
        <Nav />
        <PeerToPeer />
    </div>
  )
}

export default peer