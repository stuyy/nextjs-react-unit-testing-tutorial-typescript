import { NextResponse } from 'next/server';

export async function POST(req) {
  const json = await req.json();
  console.log(json.username);
  return NextResponse.json({});
}
