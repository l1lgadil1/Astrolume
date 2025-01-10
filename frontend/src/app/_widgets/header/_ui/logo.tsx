import Link from 'next/link';

export function Logo() {
    return (
        <Link className="flex items-center space-x-2" href="/">
            {/* <LogoIcon className="h-7 w-7" /> */}
            <span className="font-semibold inline-block leading-none">
                evolution <br /> community
            </span>
        </Link>
    );
}
