import fetch from 'node-fetch';

export async function apiGet(url: string, token?: string) {
  const headers: any = { 'Accept': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(url, { headers });
  return res.json();
}
