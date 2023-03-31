// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

export async function getMenu() {
  try {
    let response = await fetch('https://api-jollibee-menu.vercel.app/menu');
    let data = await response.json();
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}
