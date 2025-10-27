// import type { Actions } from './$types';
// import { supabase } from '$lib/supabaseClient';

// // server action
// export const actions: Actions = {
//   default: async ({ request }) => {
//     const form = await request.formData();
//     const team = String(form.get('team') ?? '');
//     const model = String(form.get('model') ?? '');
//     const file = form.get('file') as File | null;

//     let filePath: string | null = null;

//     if (file && file.size > 0) {
//       // pick a unique filename
//       const filename = `${Date.now()}_${file.name}`;
//       const buffer = Buffer.from(await file.arrayBuffer());

//       const { error: uploadError } = await supabase.storage
//         .from('submissions')
//         .upload(filename, buffer, { contentType: file.type });

//       if (uploadError) {
//         console.error('upload error', uploadError);
//         return { success: false, error: 'upload_failed' };
//       }

//       filePath = filename;
//     }

//     const { error: insertError, data } = await supabase
//       .from('submissions')
//       .insert([{ team, model, file_path: filePath }])
//       .select();

//     if (insertError) {
//       console.error('db insert error', insertError);
//       return { success: false, error: 'db_failed' };
//     }

//     return { success: true, row: data?.[0] ?? null };
//   }
// };