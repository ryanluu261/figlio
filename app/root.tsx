import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Sidebar from './components/sidebar';

import mainStyles from '~/styles/main.css';
import homeStyles from '~/styles/home.css';
import { Header } from './components/header';
import { DevModeProvider } from './contexts/devModeContext';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: mainStyles },
    { rel: 'stylesheet', href: homeStyles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <DevModeProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden mt-10">
              <Sidebar />
              <main className="flex-1 overflow-y-auto">
                <Outlet />
              </main>
            </div>
          </div>
        </DevModeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
