import { ExtraPower } from './ExportPower.model';
let countsByDate = [{date: '10', count: 30}, 
    {date: '10', count: 20}, 
    {date: '15', count: 30},
    {date: '20', count: 28},
    {date: '25', count: 32},
    {date: '30', count: 34},
    {date: '35', count: 40},
    {date: '40', count: 30},
    {date: '45', count: 25},
    {date: '50', count: 35},
    {date: '55', count: 45},
    {date: '60', count: 50},
    {date: '65', count: 25},
    {date: '70', count: 29},
    {date: '75', count: 30},
    {date: '75', count: 55}, ];
export function fetchExtraPowerDetails() {
  return new Promise<{ data: ExtraPower[]}>((resolve) =>
    setTimeout(() => resolve({ data: countsByDate }), 500)
  );
}
