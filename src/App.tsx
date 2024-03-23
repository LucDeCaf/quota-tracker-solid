import { Component, createSignal } from "solid-js";
import { Card, CardHeading } from "./components/Card";
import { QuotaRow } from "./components/QuotaRow";

export type Quota = {
  day1: number;
  day2: number;
  day3: number;
  sold: number;
};

function getTotalCollected(quotas: Quota[]) {
  let sum = 0;
  for (let i = 0; i < quotas.length; i++) {
    sum += quotas[i].day1;
    sum += quotas[i].day2;
    sum += quotas[i].day3;
  }
  return sum;
}

function getTotalSold(quotas: Quota[]) {
  let sum = 0;
  for (let i = 0; i < quotas.length; i++) {
    sum += quotas[i].sold;
  }
  return sum;
}

function getTotalOnShip(quotas: Quota[]) {
  let sum = 0;
  for (let i = 0; i < quotas.length; i++) {
    sum += quotas[i].day1;
    sum += quotas[i].day2;
    sum += quotas[i].day3;
    sum -= quotas[i].sold;
  }
  return sum;
}

function getAverage(quotas: Quota[]) {
  let sum = 0;
  for (let i = 0; i < quotas.length; i++) {
    sum += quotas[i].day1;
    sum += quotas[i].day2;
    sum += quotas[i].day3;
  }
  return quotas.length === 0 ? 0 : sum / quotas.length;
}

const TotalGridItem: Component<{ label: string; value: string }> = (props) => {
  return (
    <div class="px-2">
      <div class="-mb-1 text-gray-400">{props.label}</div>
      <div class="text-lg font-bold">{props.value}</div>
    </div>
  );
};

const App = () => {
  // Example quotas 
  const [quotas, setQuotas] = createSignal<Quota[]>([
    {
      day1: 201,
      day2: 30,
      day3: 102,
      sold: 214,
    },
    {
      day1: 304,
      day2: 219,
      day3: 233,
      sold: 321,
    },
    {
      day1: 566,
      day2: 457,
      day3: 599,
      sold: 704,
    },
  ]);

  return (
    <main class="p-8 font-sans flex flex-col gap-4 h-screen">
      <h1 class="text-xl font-light tracking-wider">Quota Tracker</h1>

      <Card class="h-max">
        <CardHeading>STATISTICS</CardHeading>

        <div class="p-4 grid grid-cols-2 gap-y-4">
          <TotalGridItem
            label="SHIP"
            value={getTotalOnShip(quotas()).toString()}
          />

          <TotalGridItem
            label="AVG / DAY"
            value={Math.round(getAverage(quotas())).toString()}
          />

          <TotalGridItem
            label="SOLD"
            value={getTotalSold(quotas()).toString()}
          />

          <TotalGridItem
            label="COLLECTED"
            value={getTotalCollected(quotas()).toString()}
          />
        </div>
      </Card>

      <Card class="h-full">
        <CardHeading>QUOTAS</CardHeading>

        <div class="flex flex-col h-full">
          {quotas().map(quota => <QuotaRow {...quota} setter={setQuotas} />)}
        </div>
      </Card>
    </main>
  );
};

export default App;
