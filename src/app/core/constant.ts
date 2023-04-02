export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum AuthEndPoints   {
    CHECK_SERVER = "/checkserver/",
    LOGIN = "/auth/token/login/",
    CURRENT_USER = "/auth/users/me/",
    LOGOUT_USER = "/auth/token/logout/",
    REGISTER = "/auth/users/"
}

export enum CustomErrorCodes {
    UN_KNOWN = 0,
}

export enum ServersError {
    HTTP_500_INERNAL_SERVER_ERROR = 500,
}
export enum SuccessCodes {
    HTTP_200_OK = 200,
    HTTP_201_CREATED = 201,
    HTTP_202_ACCEPTED = 202
}

export enum ClientError {
    HTTP_404_BAD_REQUEST = 400,
    HTTP_401_UNAUTHORIZED = 401,
}