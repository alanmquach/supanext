import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
  'https://zmuaegqtwialyzenrkjq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptdWFlZ3F0d2lhbHl6ZW5ya2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0ODQxNDgsImV4cCI6MjAwODA2MDE0OH0.aIOBWVpdpxc8EH7nLJwrWo0P1LhmsdXuk8bruOs0Aeg'
)

export default function Login() {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google']}
    />
  )
}
