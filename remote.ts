import { TV } from "./tv";
export class Remote {
  tv: TV;
  turnOn(string) {
    console.log("Tv is on from remote");
  }
  turnOff() {}
  switchChannel() {}
}
