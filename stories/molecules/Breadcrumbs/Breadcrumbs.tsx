import React, { FC } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

export interface BreadcrumbsProps {
  pathnames: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ pathnames }) => {
  //   const router = useRouter();
  //   const pathnames = router.pathname.split("/").filter((x) => x);

  return (
    <nav
      aria-label="breadcrumb"
      className="p-10 pt-9 desktop:pt-[45px] h-[7px] desktop:px-[100px] desktop:py-[50px]"
    >
      <ol className="text-[9.8px] desktop:text-sm font-light flex justify-start items-center gap-[10px] desktop:gap-[12px] capitalize  desktop:tracking-[-0.15] leading-[13.3px] desktop:leading-[18.6px]">
        <li className="underline">
          <Link href="/">Home</Link>
        </li>
        <span>/</span>
        {pathnames.map((name, index) => {
          //   const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const routeTo = `/${name}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li className="" key={name}>
              {name}
            </li>
          ) : (
            <>
              <li className="underline" key={name}>
                <Link href={routeTo}>{name}</Link>
              </li>
              <span>/</span>
            </>
          );
        })}
      </ol>
    </nav>
  );
};
