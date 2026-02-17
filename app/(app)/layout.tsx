import { CartSheet } from '@/components/featuredSections/CartSheet'
import { Header } from '@/components/featuredSections/Header'
import { Toaster } from '@/components/ui/sonner'
import { CartStoreProvider } from '@/lib/store/cart-store-provider'
import { ChatStoreProvider } from '@/lib/store/chat-store-provider'
import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import { ChatSheet } from "@/components/app/ChatSheet";
import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
        <Header/>
    <main>{children}</main>
    <CartSheet/>
    <ChatSheet/>
    <Toaster position="top-center"/>
    <SanityLive/>
    </ChatStoreProvider>
    </CartStoreProvider>
    </ClerkProvider>
  )
}

export default Layout