import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FeatureServiceService } from '../service/feature-service.service';
import { AlertService } from 'ngx-alerts';
import { environment } from '../../../environments/environment';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();

  title_1: any = '';
  title_2: any = '';
  title_3: any = '';
  title_4: any = '';
  rcd_ID: any = '';
  search: any = '';
  audo_path: any = '';
  options: any = [];
  allWords: any = [];
  constructor(private router: Router, private srvc: FeatureServiceService, private alert: AlertService) { }

  ngOnInit(): void {
    this.getRandomWord();
    this.selectAll();

  }
  getRandomWord() {
    this.srvc.getRandomRcd().subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.alert.danger(res.error);
          return false;
        }
        this.title_1 = res.data[0].title_one;
        this.title_2 = res.data[0].title_two;
        this.title_3 = res.data[0].title_three;
        this.title_4 = res.data[0].title_four;
        this.rcd_ID = res.data[0].id;
        this.audo_path = res.data[0].audio_file;

      },
      error: (e) => {
        this.alert.danger(e);
      }
    })
  }
  getNextWord() {
    this.srvc.getNxtWord(this.rcd_ID).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.alert.danger(res.error);
          return false;
        }
        this.title_1 = res.data[0].title_one;
        this.title_2 = res.data[0].title_two;
        this.title_3 = res.data[0].title_three;
        this.title_4 = res.data[0].title_four;
        this.rcd_ID = res.data[0].id;
        this.audo_path = res.data[0].audio_file;


      },
      error: (e) => {
        this.alert.danger(e);
      }
    })
  }
  getPrvcWord() {
    this.srvc.getPrvcWord(this.rcd_ID).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.alert.danger(res.error);
          return false;
        }
        this.title_1 = res.data[0].title_one;
        this.title_2 = res.data[0].title_two;
        this.title_3 = res.data[0].title_three;
        this.title_4 = res.data[0].title_four;
        this.rcd_ID = res.data[0].id;
        this.audo_path = res.data[0].audio_file;
      },
      error: (e) => {
        this.alert.danger(e);
      }
    })
  }
  playAudio() {
    var audioElement = new Audio(environment.audioPath + '/' + this.audo_path);
    audioElement.play();

  }
  onSearch() {
    console.log(this.search);
    // this.search=event.target.value;
    this.srvc.getSearchWord(this.search).subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.alert.danger(res.error);
          return false;
        }
        if (res.msg) {
          //this.alert.warning(res.msg);
        }
        this.title_1 = res.data[0].title_one;
        this.title_2 = res.data[0].title_two;
        this.title_3 = res.data[0].title_three;
        this.title_4 = res.data[0].title_four;
        this.rcd_ID = res.data[0].id;
        this.audo_path = res.data[0].audio_file;


      },
      error: (e) => {
        this.alert.danger(e);
      }
    })

  };
  public updated() {
    this.options = [];
    if (this.myControl.value.length > 0) {
      let searchedWord = this.myControl.value
      for (let key in this.allWords) {
        let r = this.allWords[key].search(new RegExp(searchedWord, "i"));
        if (r != -1) {
          this.options.push(this.allWords[key])
        }
      }
    } else {
      this.options = []
    }
  }

  selectAll() {
    this.srvc.getAllWord().subscribe({
      next: (res: any) => {
        if (!res.success) {
          this.alert.danger(res.error);
          return false;
        }

        this.allWords = res.data;


      },
      error: (e) => {
        this.alert.danger(e);
      }
    })

  };

}
