// export interface LeaderboardRow {
//   id?: number;
//   team: string;
//   model: string;
//   val_f1?: number;
//   val_mse?: number;
//   submitted?: string;
// }

export interface LeaderboardRow {
  id?: number;
  rank: number;
  name: string;
  fgd?: number;
  fd_g?: number;
  fd_k?: number;
  ba?: number;
  srgr?: number;
  div_pose?: number;
  div_sample?: number;
  paper_venue: string;
  elo_hl?: number;
  mismatch?: number;
  link?: string;
}

export const PUBLIC_SUPABASE_URL = "https://ctwfyjhvheylawtxrvdq.supabase.co";
export const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0d2Z5amh2aGV5bGF3dHhydmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNzg3NzQsImV4cCI6MjA3NDc1NDc3NH0.6nWRea_ELVrVXPuu4sRDdgF5tH-YD0h7c105x7zzCJg";
