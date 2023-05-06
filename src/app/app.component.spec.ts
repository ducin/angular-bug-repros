import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SharedModule } from './shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        // NullInjectorError: R3InjectorError(DynamicTestModule)[GeoService -> HttpClient -> HttpClient]: NullInjectorError: No provider for HttpClient!
        HttpClientTestingModule,
        // Error: NG0304: 'router-outlet' is not a known element (used in the 'AppComponent' component template):        
        RouterTestingModule,
        // Error: NG0304: 'itcorpo-fadebox' [...] is not a known element (used in the 'AppComponent' component template):
        SharedModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title property 'IT Corpo Angular App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('IT Corpo Angular App');
  });

  it(`should display title 'IT Corpo Angular App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('strong')?.textContent).toContain('IT Corpo Angular App');
  });
});
