export interface CookieOptions {
  expires?: Date | number;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
}
class CookieServiceClient {
  getItem(key: string): string | null {
    if (typeof window === "undefined") {
      return null;
    }
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${key}=`));
    if (!cookies) {
      return null;
    }
    return decodeURIComponent(cookies.split("=")[1]);
  }
  setItem(key: string, value: string, options: CookieOptions = {}): void {
    if (typeof window === "undefined") {
      return;
    }
    const {
      expires,
      maxAge,
      path = "/",
      domain,
      secure,
      httpOnly,
      sameSite = "lax",
    } = options;
    let cookieString = `${key}=${encodeURIComponent(value)}`;
    if (expires) {
      if (typeof expires === "number") {
        const date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieString += `; expires=${date.toUTCString()}`;
      } else {
        cookieString += `; expires=${expires.toUTCString()}`;
      }
    }
    if (maxAge !== undefined) {
      cookieString += `; max-age=${maxAge}`;
    }
    if (path) {
      cookieString += `; path=${path}`;
    }
    if (domain) {
      cookieString += `; domain=${domain}`;
    }
    if (secure) {
      cookieString += "; secure";
    }
    if (httpOnly) {
      cookieString += "; httponly";
    }
    if (sameSite) {
      cookieString += `; samesite=${sameSite}`;
    }
    document.cookie = cookieString;
  }
  removeItem(
    key: string,
    options: Pick<CookieOptions, "path" | "domain"> = {}
  ): void {
    this.setItem(key, "", {
      ...options,
      expires: new Date(0),
      maxAge: -1,
    });
  }
  has(key: string): boolean {
    return this.getItem(key) !== null;
  }
  getAll(): Record<string, string> {
    if (typeof window === "undefined") {
      return {};
    }
    const cookies: Record<string, string> = {};
    document.cookie.split(";").forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      if (key && value) {
        cookies[key] = decodeURIComponent(value);
      }
    });
    return cookies;
  }
  clear(): void {
    const cookies = this.getAll();
    Object.keys(cookies).forEach((key) => {
      this.removeItem(key);
    });
  }
}
export const cookieService = new CookieServiceClient();
