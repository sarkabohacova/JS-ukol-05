const salary = (wage, hours, days) => {
  const salaryAmount = wage * hours * days

  return salaryAmount
}

const taxed = (amount, tax) => {
  const taxedSalary = amount - (amount * (tax / 100))

  return taxedSalary
}

const grossSalary = salary(650, 8, 21)
const netSalary = taxed(grossSalary, 15)

document.body.innerHTML = `
Vaše měsíční hrubá mzda je: ${grossSalary} Kč<br>
Vaše měsíční čistá mzda je: ${netSalary} Kč<br>
Gratulki
`
