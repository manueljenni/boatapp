import {
  BoatResponse,
  BoatsResponse,
  CreateBoatRequest,
  ErrorMessage,
  LogInRequest,
  LogInResponse,
  MeResponse,
  Result,
} from "./types";

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
    value: { accessToken: data.accessToken },
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
        message: data.message,
        statusCode: response.status,
      },
    };
  }
  return {
    ok: true,
    value: { email: data.email },
  };
}

export async function getMyBoats(accessToken: string): Promise<BoatsResponse> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  const response = await fetch(`${baseURL}/boat/allBoats`, options);
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
    value: { boats: data },
  };
}

export async function getBoatById(
  id: number,
  accessToken: string
): Promise<BoatResponse> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  const response = await fetch(`${baseURL}/boat/${id}`, options);
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
    value: data,
  };
}

export async function createBoat(
  createBoatRequest: CreateBoatRequest,
  accessToken: string
): Promise<BoatResponse> {
  const JSONdata = JSON.stringify(createBoatRequest);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSONdata,
  };
  const response = await fetch(`${baseURL}/boat/create`, options);
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
    value: data.value,
  };
}

export async function updateBoat(
  createBoatRequest: CreateBoatRequest,
  boatId: number,
  accessToken: string
): Promise<BoatResponse> {
  const JSONdata = JSON.stringify(createBoatRequest);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSONdata,
  };
  const response = await fetch(`${baseURL}/boat/${boatId}/update`, options);
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
    value: data.value,
  };
}

export async function deleteBoat(
  boatId: number,
  accessToken: string
): Promise<Result<boolean, ErrorMessage>> {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  const response = await fetch(`${baseURL}/boat/${boatId}/delete`, options);
  const data = await response.json();
  if (!response.ok) {
    return {
      ok: false,
      error: data,
    };
  }
  return {
    ok: true,
    value: true,
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
