import { redirect } from 'next/navigation'

export default function Home() {
    // Inicialmente redirecionaremos todos para login, o middleware lidará com acesso mais tarde.
    redirect('/login')
}
