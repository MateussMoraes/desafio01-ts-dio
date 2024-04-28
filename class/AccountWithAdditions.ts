import { DioAccount } from "./DioAccount";

export class AccountWithAdditions extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  public deposit = (value: number): void => {
    if (this.validateStatus()) {
        this.setBalance(this.getBalance() + (value + 10))
    }
  }
}