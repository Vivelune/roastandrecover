export default function AdminTest() {
    return (
      <div>
        <h1>Admin Test Page</h1>
        <p>If you see this, admin routing works!</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('✅ Admin test page loaded')`,
          }}
        />
      </div>
    );
  }