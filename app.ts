import { AccountWithAdditions } from './class/AccountWithAdditions'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Mateus', 10)
// console.log("PeopleAccount")
// console.log("Saldo: ", peopleAccount.getBalance())
// console.log("Nome do titular: ", peopleAccount.getName())
// console.log("Número da conta: ", peopleAccount.getAccountNumber())

// peopleAccount.deposit(200)
// console.log("Saldo depois do depósito ", peopleAccount.getBalance())

// peopleAccount.withdraw(199)
// console.log("Saldo depois do saque ", peopleAccount.getBalance())

// // Tentando sacar sem ter o valor necessário
// peopleAccount.withdraw(5)

// Para testar um bloco comente o outro
// Para testar a validação de status nos métodos coloque o status da conta para false
// --------------------------------------------------------------------------

// const companyAccount = new CompanyAccount("Mateus", 32)
// console.log("CompanyAccount")
// console.log("Saldo: ", companyAccount.getBalance())
// console.log("Nome do titular: ", companyAccount.getName())
// console.log("Número da conta: ", companyAccount.getAccountNumber())

// companyAccount.deposit(500)
// console.log("Saldo depois do depósito ", companyAccount.getBalance())

// companyAccount.withdraw(400)
// console.log("Saldo depois do saque ", companyAccount.getBalance())

// companyAccount.getLoan(2000)
// console.log("Saldo depois do empréstimo ", companyAccount.getBalance())

// Para testar um bloco comente o outro
// Para testar a validação de status nos métodos coloque o status da conta para false
// --------------------------------------------------------------------------

const accountWithAdditions = new AccountWithAdditions("Mateus", 20)
console.log("AccountWithAdditions")
console.log("Saldo: ", accountWithAdditions.getBalance())
console.log("Nome do titular: ", accountWithAdditions.getName())
console.log("Número da conta: ", accountWithAdditions.getAccountNumber())

accountWithAdditions.deposit(500)
console.log("Saldo depois do depósito ", accountWithAdditions.getBalance())

accountWithAdditions.withdraw(400)
console.log("Saldo depois do saque ", accountWithAdditions.getBalance())
