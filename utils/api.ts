export async function postMail(
    name: string,
    company: string,
    email: string,
    text: string,
    lang: string
): Promise<Response> {
    return await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            company,
            email,
            text,
            lang,
        }),
    });
}
