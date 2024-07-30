import { router } from "expo-router";

export const delayNavigation = (path: string) => {
    const interval= setTimeout(() => {
      router.push(path)
    }, 2000);

    return () => clearTimeout(interval);

  }