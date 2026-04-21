enum UserResponse {
    No = 0,
    Yes = 1
}

function respondeEmail (recipient: string, userResponse: UserResponse): void {
    // ... salvar no banco se o usuário respondeu ou não
}

respondeEmail("Henrique", UserResponse.Yes)