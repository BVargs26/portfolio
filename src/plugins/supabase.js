import { supabase } from '@/lib/supabase'

export default {
  install: (app) => {
    app.config.globalProperties.$supabase = supabase
  }
}