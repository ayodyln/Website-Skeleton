import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABSE } from '$env/static/public'

export const supabase = createClient('https://hmlttuindukakhxvqmlc.supabase.co', PUBLIC_SUPABSE)
