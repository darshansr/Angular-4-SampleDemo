import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'convertToSpace'
})
export class IPipetoSpace implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }
}