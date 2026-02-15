import { CartStoreProvider } from '@/lib/store/cart-store-provider'
import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
    <main>{children}</main>
    <SanityLive/>
    </CartStoreProvider>
    </ClerkProvider>
  )
}

export default Layout