import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, telefon, raumtyp, flaeche, herausforderung, nachricht } = body

    if (!name || !email || !raumtyp) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    console.log('=== Neue Anfrage ===')
    console.log(`Name:            ${name}`)
    console.log(`E-Mail:          ${email}`)
    console.log(`Telefon:         ${telefon || '-'}`)
    console.log(`Raumtyp:         ${raumtyp}`)
    console.log(`Raumgroesse:     ${flaeche} m2`)
    console.log(`Herausforderung: ${Array.isArray(herausforderung) ? herausforderung.join(', ') : '-'}`)
    console.log(`Nachricht:       ${nachricht || '-'}`)
    console.log('===================')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json({ error: 'Interner Fehler' }, { status: 500 })
  }
}
