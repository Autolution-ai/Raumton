import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, telefon, raumtyp, flaeche, herausforderung, nachricht } = body
    if (!name || !email || !raumtyp) return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) return NextResponse.json({ error: 'Konfigurationsfehler' }, { status: 500 })
    const emailBody = `Neue Anfrage über raumton.com\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || '—'}\nRaumtyp: ${raumtyp}\nRaumgröße: ${flaeche} m²\nHerausforderung: ${Array.isArray(herausforderung) ? herausforderung.join(', ') : '—'}\nNachricht:\n${nachricht || '—'}`
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: 'anfrage@raumton.com', to: 'info@raumton.com', reply_to: email, subject: `Neue Anfrage: ${raumtyp} – ${name}`, text: emailBody }),
    })
    if (!response.ok) return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 })
  }
}
