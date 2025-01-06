import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MailRequest {
    name: string;
    company: string;
    email: string;
    text: string;
    lang: string;
}

export async function POST(req: Request) {
    try {
        const { name, company, email, text, lang }: MailRequest = await req.json();

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
            },
        });

        // Send mail with defined transport object
        const info = await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `Message from ${name}`,
            text: `Email: ${email}. ${text}. Company : ${company}, language: ${lang}`,
        });

        return NextResponse.json({ message: 'Email sent successfully', info });
    } catch (error) {
        // Handle the error by ensuring its type is known
        let errorMessage = 'An unexpected error occurred';

        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
