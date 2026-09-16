// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
  // Напишите код здесь
  // Алгоритм:
  // 1. Если from === to, вернуть amount
  // 2. Иначе конвертировать from -> RUB, потом RUB -> to
    if (from === to) {
        return amount;
    }
    if (from === "RUB") {
        if (to === "USD") {
            return amount / 90;
        } else if (to === "EUR") {
            return amount / 100;
        }
    } else if (from === "USD") {
        if (to === "RUB") {
            return amount * 90;
        } else if (to === "EUR") {
            return (amount * 90) / 100;
        }
    } else if (from === "EUR") {
        if (to === "RUB") {
            return amount * 100;
        } else if (to === "USD") {
            return (amount * 100) / 90;
        }
    }
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  // Напишите код здесь
  return amount + " " + currency;
}