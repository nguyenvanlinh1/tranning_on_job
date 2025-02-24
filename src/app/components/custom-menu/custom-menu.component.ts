import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TuiIcon } from '@taiga-ui/core';
import { TuiAccordion } from '@taiga-ui/kit';
import { SecondMenu } from 'src/app/types/DataCategory';
import { ConvertToSlugPipe } from '../pipe/convert-to-slug.pipe';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.css'],
  imports: [NgForOf, TuiAccordion, TuiIcon, NgIf],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CustomMenuComponent{

  constructor(private route: Router, private convertToSlug: ConvertToSlugPipe){}
  @Input() title! : string
  
  @Input() dataMenu! : SecondMenu[]

  handleClick(endPoint: string) {
    const slug = this.convertToSlug.transform(endPoint)
    this.route.navigate([`/${slug}`])
  }
}
