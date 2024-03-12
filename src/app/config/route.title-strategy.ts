import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AxTaskTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`AX - ${title}`);
    } else {
      this.title.setTitle(`AX Task System`);
    }
  }
}

export const AXTitleStrategy = {
  provide: TitleStrategy,
  useClass: AxTaskTitleStrategy,
};
