import { LogInRequest, LogInResponse, MeResponse } from "./types";

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
    value: {
      accessToken: data.accessToken,
    },
  };
}

export function logout() {
  // Delete cookies
  document.cookie = "boatAppToken=null;";
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

export async function getMe(accessToken: string): Promise<MeResponse> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  const response = await fetch(`${baseURL}/user/me`, options);
  const data = await response.json();
  if (!response.ok) {
    return {
      ok: false,
      error: {
        message: data.message ?? "Internal server error",
        statusCode: response.status ?? "500",
      },
    };
  }
  return {
    ok: true,
    value: { email: data.email },
  };
}

// Save access token - only works in client components!
export function saveAccessToken(accessToken: string) {
  document.cookie = `boatAppToken=${accessToken}; path=/; max-age=360000`;
}

export function getAccessToken(serverCookies?: any) {
  if (serverCookies) {
    // Server components
    const token = serverCookies.get("boatAppToken");
    return token.value;
  } else {
    // Client components
    const clientCookies = document.cookie.split(";");
    return clientCookies
      .find((cookie: any) => cookie.includes("boatAppToken"))
      ?.split("=")[1];
  }
}
