export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  public getName = (): string => {
    return this.name
  }

  public getAccountNumber = (): number => {
    return this.accountNumber
  }

  public deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
    }
  }

  public withdraw = (value: number): void => {
    if (this.validateStatus() && this.validateBalance(value)) {
      this.balance -= value
    }
  }

  public getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (value: number): void => {
    this.balance = value
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inativa !')
  }

  private validateBalance = (value: number): boolean => {
    if (this.balance - value >= 0) {
      return true;
    }

    throw new Error("Saldo insuficiente!")
  }
}
