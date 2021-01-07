
export class ChartDataItem{
    
    constructor (
        public day: number,
        public idealValue: number,
        public realValue?: number | undefined,
    ) {}

}

export default class ChartData{
    public items: ChartDataItem[] = [];
}