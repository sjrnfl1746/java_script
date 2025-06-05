/*
        다음 조건에 따라 은행 계좌를 관리하는 생성자 함수를 작성하세요.
        1.	생성자 함수 이름: BankAccount
        2.	프로퍼티:
        •	accountHolder: 계좌 소유자 이름 (생성자 함수 호출 시 전달받음)
        •	balance: 계좌 잔액 (초기값 0)
        •	transactions: 거래 내역을 저장하는 배열 (초기값 빈 배열)
        3.	메서드:
        •	deposit(amount): amount만큼 계좌에 입금하고, 거래 내역에 "Deposit: <amount>" 형식으로 추가합니다.
        •	withdraw(amount): amount만큼 계좌에서 출금하고, 거래 내역에 "Withdraw: <amount>" 형식으로 추가합니다.
        단, 잔액이 부족하면 "Insufficient balance!" 메시지를 출력하고 거래를 취소합니다.
        •	getBalance(): 현재 계좌 잔액을 반환합니다.
        •	getTransactions(): 모든 거래 내역을 반환합니다.

        * 요구사항:
        1.	BankAccount 생성자 함수를 사용하여 새로운 은행 계좌 객체를 생성하세요.
        •	계좌 소유자: "홍길동"
        2.	deposit 메서드를 호출하여 1000원 입금하세요.
        3.	withdraw 메서드를 호출하여 500원 출금하세요.
        4.	withdraw 메서드를 호출하여 1000원 출금을 시도하세요. (잔액 부족 메시지가 출력되어야 합니다)
        5.	getBalance 메서드를 호출하여 현재 잔액을 출력하세요.
        6.	getTransactions 메서드를 호출하여 거래 내역을 출력하세요.
 */
'use strict'
// 생성자
function BankAccount(accountHolder) {
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
}

// 메서드
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    this.transactions.push(`Deposit: ${amount}`);
}
BankAccount.prototype.withdraw = function (amount) {
    if (this.balance < amount) {
        console.log("Insufficient balance!");
        this.transactions.push(`Withdraw: Insufficient balance!`);
        return;
    }
    this.balance -= amount;
    this.transactions.push(`Withdraw: ${amount}`);
}
BankAccount.prototype.getBalance = function () {
    console.log(this.balance);
}
BankAccount.prototype.getTransactions = function () {
    this.transactions.forEach(transaction => console.log(transaction));
}


// main
const bankAccount = new BankAccount('홍길동')
bankAccount.deposit(1000);
bankAccount.withdraw(500);
bankAccount.withdraw(1000);
bankAccount.getBalance();
bankAccount.getTransactions();
