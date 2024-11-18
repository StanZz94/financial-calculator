import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({ userInput }) {

    let resultData = calculateInvestmentResults(userInput)

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((yearData) => {

                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                const totalInvestment = yearData.valueEndOfYear - totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalInvestment)}</td>
                </tr>
            })}
        </tbody>
    </table>
}