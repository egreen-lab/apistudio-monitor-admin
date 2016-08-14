import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {
  httpTotalRequests: any;
  constructor(private http: Http, private _baConfig: BaThemeConfigProvider) {

  }

  private extractData(res: Response) {


    console.log("Response " + res);
    let body = res.json();

    return {};
  }


  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;

  console.log(this.http)

    this.http.get('http://localhost:4545/api/monitor/request/total')
      .map((res:Response) => console.log(res))
      .subscribe(
        data => { console.log(data)},
        err => console.log(err),
        () => console.log('done')
      );




    return [
      {
        color: pieColor,
        description: 'Sessions',
        stats: '' + this.httpTotalRequests,
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Requests',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Unique',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
