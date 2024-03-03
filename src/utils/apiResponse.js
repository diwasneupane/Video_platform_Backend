class ApiResponse {
  constructor(statusCode, data, messag = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.messag = messag;
    this.success = statusCode < 400;
  }
}
