import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-svh items-center bg-muted flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/logos/logo.svg" alt="Weavr" width={30} height={30} />
          Weavr
        </Link>
        {children}
      </div>
    </div>
  );
};
