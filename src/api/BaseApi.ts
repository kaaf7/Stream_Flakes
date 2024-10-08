export class BaseApi {
  headers: Record<string, string>

  constructor(token: string | null) {
    this.headers = {
      "Content-Type": "application/json",
      ...(token && { token: `Bearer ${token}` })
    }
  }
}
