// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

export async function getMenu() {
  try {
    const res = await fetch('https://api-jollibee-menu.vercel.app/menu');
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await res.json();
    return data;
  } catch(e) {
    throw new Error('Failed to fetch data:' + e);
  }
}

