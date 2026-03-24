import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, thought } = await request.json();

    if (!name || !thought) {
      return NextResponse.json({ error: 'Name and thought are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Archive <onboarding@resend.dev>',
      to: ['sebacontegrand@gmail.com'], // TODO: Replace with your actual email address
      subject: `New Archival Tribute from ${name.toUpperCase()}`,
      html: `
        <div style="font-family: serif; color: #000; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #eee;">
          <h1 style="font-style: italic; border-bottom: 1px solid #B65506; padding-bottom: 10px;">The Living Archive</h1>
          <p style="font-size: 18px; line-height: 1.6;">&ldquo;${thought}&rdquo;</p>
          <p style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 12px; color: #B65506;">— ${name}</p>
          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 10px; color: #999; text-transform: uppercase;">Roger Federer - Effortless success is a myth</p>
        </div>
      `,
    });

    if (error) {
      console.info("Resend Error Detail:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.info("API Route Exception:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
