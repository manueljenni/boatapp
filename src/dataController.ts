import { LogInRequest, LogInResponse } from "./types";

// Base url for the API - TODO: Should come from .env
export const baseURL = "http://localhost:8081/api/v1";

export async function login(logInDto: LogInRequest): Promise<LogInResponse> {
  const JSONdata = JSON.stringify(logInDto);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(`${baseURL}/auth/login`, options);
  const data = await response.json();
  if (!response.ok) {
    return {
      ok: false,
      error: {
        message: data.message,
        statusCode: response.status,
      },
    };
  }
  return {
    ok: true,
    value: data.accessToken,
  };
}

export async function signup(logInDto: LogInRequest): Promise<LogInResponse> {
  const JSONdata = JSON.stringify(logInDto);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };
  const response = await fetch(`${baseURL}/auth/signup`, options);
  const data = await response.json();
  if (!response.ok) {
    return {
      ok: false,
      error: {
        message: data.message,
        statusCode: response.status,
      },
    };
  }
  return {
    ok: true,
    value: data.accessToken,
  };
}

// Save access token - only works in client components!
export function saveAccessToken(accessToken: string) {
  document.cookie = `boatAppToken=${accessToken}; path=/; max-age=360000`;
}

export function getAccessToken(serverCookies?: any) {
  if (typeof window === "undefined") {
    // Server components
    const token = serverCookies.get("accessToken");
    return token.value;
  } else {
    // Client components
    const clientCookies = document.cookie.split(";");
    return clientCookies
      .find((cookie: any) => cookie.includes("accessToken"))
      ?.split("=")[1];
  }
}
