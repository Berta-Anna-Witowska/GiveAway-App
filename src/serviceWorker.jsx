import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://mypddshoatfdacyierks.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const emailJS_serviceKEY = import.meta.env.VITE_EMAILJS_SERVICEKEY;
export const template = "template_mail";
export const publicKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;
