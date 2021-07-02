import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroesService {
    constructor(private readonly superheroesService: SuperheroesService){}
}
