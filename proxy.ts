import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';


// ProtectedRoutes
const isProtectedRoutes = createRouteMatcher (
    [
        "/checkout",
        "/orders",
        "/orders/[id]",
        "/checkout/success",
        "/admin",        // Add admin routes to protected routes
        "/admin/:path*", // Protect all admin sub-routes
    ]
)

export default clerkMiddleware(
    async (auth, req) =>{
        if(isProtectedRoutes(req)) 
            {
            await auth.protect();
        }
    }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};