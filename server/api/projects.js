import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabaseUrl = 'https://zijjsosvaqkglpwbnczd.supabase.co'
console.log(config.supabase_key)
const supabase = createClient(supabaseUrl, config.supabase_key)

export default defineEventHandler(async (event) => {

    const { data } = await supabase
    .from('projects')
    .select('*')

    console.log("sup", supabase)
    console.log("projects", data)
    return (data);
  })
  