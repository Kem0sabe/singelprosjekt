import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return getGame(req);
};

async function getGame(req: NextRequest) {
  const f = new FormData();

  const result = await fetch('https://ukenummer.no/json', {
    method: 'POST',
    body: f,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const text = await result.text();
  console.log(text);
  return new NextResponse(text);
}