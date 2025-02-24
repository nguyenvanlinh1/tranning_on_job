import { Component } from '@angular/core';
import { CategoryService } from './service/category.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { Category, SecondMenu } from './types/DataCategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task_demo_angular';

  tabsData!: Category[];
  tabsMenuData!: SecondMenu[];
  selectedCategory!: string;

  constructor(private categoryService: CategoryService) {}

  query = injectQuery(() => ({
    queryKey: ['category'],
    queryFn: async () => {
      const data = await lastValueFrom(this.categoryService.getCategory());
      if (data) {
        this.tabsData = Array.isArray(data) ? data : [data];
        if (this.tabsData.length > 0) {
          this.selectedCategory = this.tabsData[0].firstMenuName;
          this.onCategorySelected(this.selectedCategory);
        }
      }
      return this.tabsData;
    },
  }));

  onCategorySelected(categoryName: string) {
    this.selectedCategory = categoryName;
    const selectedCategoryData = this.tabsData.find(
      (item) => item.firstMenuName === categoryName
    );
    this.tabsMenuData = selectedCategoryData
      ? selectedCategoryData.firstMenu
      : [];
    console.log(this.tabsMenuData);
  }
}
