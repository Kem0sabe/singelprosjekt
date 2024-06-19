import { NextResponse } from 'next/server';

export async function GET() { // Endpoint to quickly check if the API is working
  return new NextResponse('Connected to the API!');
};
