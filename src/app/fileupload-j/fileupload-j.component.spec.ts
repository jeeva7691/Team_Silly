import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadJComponent } from './fileupload-j.component';

describe('FileuploadJComponent', () => {
  let component: FileuploadJComponent;
  let fixture: ComponentFixture<FileuploadJComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploadJComponent]
    });
    fixture = TestBed.createComponent(FileuploadJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
