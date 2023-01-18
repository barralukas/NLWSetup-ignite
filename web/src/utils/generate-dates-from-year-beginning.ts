import dayjs from 'dayjs'

export function generateDatesFromYearBeginning() {
    const firstDayOfTherYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayOfTherYear

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}