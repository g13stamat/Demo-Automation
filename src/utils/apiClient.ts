// apiClient.ts
import fetch from 'node-fetch'; // works with node-fetch@2 and esModuleInterop enabled

export async function apiGet(token: string): Promise<any> {
  const headers: Record<string, string> = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch('https://api.example.com/data', { headers });
  return res.json();
}