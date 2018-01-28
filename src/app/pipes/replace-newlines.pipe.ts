import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNewlines'
})
export class ReplaceNewlinesPipe implements PipeTransform {

  transform(content: string): string {
    return content.replace(new RegExp('\n', 'g'), '<br>');
  }

}
