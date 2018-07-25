import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	
	constructor(public toastr: ToastsManager, vrc: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vrc);
	}
	showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
	}
	showError() {
        this.toastr.error('This is not good!', 'Oops!');
	}
    
	showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
	}
    
	showInfo() {
        this.toastr.info('Just some information for you.');
	}
      
	showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
	}

	ngOnInit() {
	}
  

}
