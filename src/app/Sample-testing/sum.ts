import { of } from 'rxjs';

export function sum1() {
  return 1 + 1;
}

export function sum2(n1: number, n2: number) {
  return n1 + n2;
}

export async function sum3(n1: number, n2: number) {
  return n1 + n2;
}

export function obs_sum(n1: number, n2: number) {
  return of(n1 + n2);
}
