import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container flex-grow py-80 leading-9 flex flex-col justify-center items-center gap-y-4">
            <h1 className="font-bold text-8xl xl:text-9xl text-blue">404</h1>
            <h2 className="text-3xl font-normal">Page Not Found</h2>
            <Link href="/" className="text-xl font-normal text-blue">
                Go back home
            </Link>
        </div>
    );
}
