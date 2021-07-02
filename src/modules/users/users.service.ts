import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers(): string[] {
        return ["user 1", "user 2"];
    }

    getUserById(userId: number): string {
        return "user"+userId;
    }
}
