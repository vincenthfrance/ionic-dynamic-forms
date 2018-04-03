import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../common/forms/control-base';
import { ControlsService } from '../../common/forms/controls.service';
import { ConfigService } from '../../services/getConfig.service';
import 'rxjs/add/operator/map';


@Component({
	templateUrl: 'form2.html',
	providers: []
})
export class Form2Page {
	controls: ControlBase<any>[];
	form: FormGroup;

	constructor(public configService: ConfigService,
							public controlsService: ControlsService
						){
		this.form = new FormGroup({});
	}

	ionViewWillEnter() {
		this.configService.getConfig('form2-conf.json')
			.map(res => res.json())
			.subscribe(data => {
					this.controls = this.controlsService.getControls(data);
				});
	}

}