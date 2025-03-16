import { NextResponse } from 'next/server';

const API_BASE_URL = 'http://localhost:5005';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/receive_data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });
    
    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${responseText}`);
    }

    const data = JSON.parse(responseText);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders
    });

  } catch (error: any) {
    console.error('POST request failed:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Request failed',
        message: error.message
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const submissionId = searchParams.get('submissionId') || '4';
    
    const response = await fetch(`${API_BASE_URL}/get_result/${submissionId}`);
    const responseText = await response.text();
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${responseText}`);
    }

    const data = JSON.parse(responseText);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders
    });

  } catch (error: any) {
    console.error('GET request failed:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Request failed',
        message: error.message
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders
  });
} 