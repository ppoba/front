import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';

export const metadata = {
  title: "뽀바줘",
  description:
    "뽀바줘",
  themeColor: "#FFF",
};


// Create a theme instance.
// const muiTheme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <ThemeProvider theme={muiTheme}> */}
        {/* <CssBaseline /> */}
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className={`fixed h-screen w-full}`} />
        {/* <Suspense fallback="...">*/}
          {/* @ts-expect-error Server Component */}
          {/* <Nav /> */}
        {/* </Suspense>  */}
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    {/* </ThemeProvider> */}
    </html>
  );
}
