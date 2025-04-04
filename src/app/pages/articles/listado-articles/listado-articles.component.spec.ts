import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArticlesComponent } from './listado-articles.component';

describe('ListadoArticlesComponent', () => {
  let component: ListadoArticlesComponent;
  let fixture: ComponentFixture<ListadoArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoArticlesComponent]
    });
    fixture = TestBed.createComponent(ListadoArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
