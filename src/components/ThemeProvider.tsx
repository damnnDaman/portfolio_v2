// src/components/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: 'class' | 'data-theme' | 'data-mode';
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ 
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  return (
	// @ts-ignore
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
}