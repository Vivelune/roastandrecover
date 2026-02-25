// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

const secret = process.env.SANITY_REVALIDATION_SECRET || ''

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME)
    const body = await req.text()
    
    // Check if signature exists
    if (!signature) {
      console.error('Missing signature header')
      return NextResponse.json({ message: 'Missing signature' }, { status: 401 })
    }

    // Verify the webhook signature
    const validSignature = await isValidSignature(body, signature, secret)
    if (!validSignature) {
      console.error('Invalid signature')
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    // Parse the payload
    let payload
    try {
      payload = JSON.parse(body)
    } catch (parseError) {
      console.error('Error parsing webhook payload:', parseError)
      return NextResponse.json({ message: 'Invalid payload' }, { status: 400 })
    }

    const documentType = payload._type
    console.log(`Revalidating for document type: ${documentType}`)
    
    // Revalidate different paths based on document type
    switch (documentType) {
      case 'product':
        // Revalidate product list
        revalidatePath('/')
        // Revalidate all product pages (this will revalidate the first layer)
        revalidatePath('/products/[slug]', 'page')
        
        // If you have a specific product slug, you could revalidate that too
        if (payload.slug?.current) {
          revalidatePath(`/products/${payload.slug.current}`)
        }
        break
        
      case 'category':
        revalidatePath('/')
        break
        
      case 'order':
        revalidatePath('/admin/orders')
        // Revalidate specific order if needed
        if (payload._id) {
          revalidatePath(`/admin/orders/${payload._id}`)
        }
        break
        
      default:
        // For any other type, just revalidate the home page
        revalidatePath('/')
    }

    console.log(`✅ Revalidated paths for ${documentType}`)
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      documentType 
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) }, 
      { status: 500 }
    )
  }
}