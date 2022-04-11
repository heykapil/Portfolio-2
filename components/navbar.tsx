import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { useTheme } from 'next-themes';

import useTranslation from '@/lib/useTranslation';
import MobileMenu from '@/components/mobile-menu';
import ThemeToggleIcon from './icons/theme-icon';

const Navbar = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { locale } = router;

  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <nav className="sticky z-50 flex items-center justify-between w-full max-w-4xl p-4 mx-auto my-0 text-gray-900 md:p-8 bg-gray-50 sticky-nav md:my-8 dark:bg-gray-800 dark:text-gray-100">
      <div>
        <MobileMenu />
        <div>
          <Link href="/">
            <a
              id="nav-home"
              className="invisible m-1 text-gray-900 sm:m-4 dark:text-gray-100 md:visible">
              <span className="py-1 dark:link-underline link-underline-black">
                {t('home')}
              </span>
            </a>
          </Link>
          <Link href="/#about">
            <a
              id="nav-about"
              className="invisible m-1 text-gray-900 sm:m-4 dark:text-gray-100 md:visible">
              <span className="py-1 dark:link-underline link-underline-black">
                {t('about')}
              </span>
            </a>
          </Link>
          <Link href="/#projects">
            <a
              id="nav-projects"
              className="invisible m-1 text-gray-900 sm:m-4 dark:text-gray-100 md:visible">
              <span className="py-1 dark:link-underline link-underline-black">
                {t('projects')}
              </span>
            </a>
          </Link>
          <Link href="/blog">
            <a
              id="nav-blog"
              className="hidden m-1 text-gray-900 sm:m-4 dark:text-gray-100 md:inline">
              <span className="py-1 dark:link-underline link-underline-black">
                Blog
              </span>
            </a>
          </Link>
          {/* <Link href="/guestbook">
            <a
              id="nav-guestbook"
              className="invisible m-1 text-gray-900 sm:m-4 dark:text-gray-100 md:visible">
              <span className="py-1 dark:link-underline link-underline-black">
                {t('guestbook.title')}
              </span>
            </a>
          </Link> */}
        </div>
      </div>
      <div>
        <button
          id="dark-mode-toggle"
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 p-3 mr-1 bg-gray-200 rounded-lg dark:bg-gray-700 md:mr-3 ring-gray-300 hover:ring-4"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          {mounted && <ThemeToggleIcon theme={resolvedTheme} />}
        </button>
        <Link
          href={router.asPath}
          scroll={false}
          shallow={true}
          locale={locale === 'de' ? 'en' : 'de'}>
          <a
            id="switch-lang"
            className="pb-1 mx-3 text-lg tracking-wide md:dark:link-underline md:link-underline-black">
            {locale === 'de' ? 'EN' : 'DE'}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
