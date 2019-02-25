import moment from 'moment';

const getVisibleEntries = (entries, {text, year, month}) => {
    return entries.filter((entry) => {
        const createdAtMoment = moment(entry.createdAt);
        const content = entry.content.toLowerCase();
        const yearMatch = createdAtMoment.year() === year || year === undefined;
        const monthMatch = createdAtMoment.month() === month || month === undefined || month === 13;
        const textMatch = text === undefined || content.includes(text.toLowerCase());
        
        return yearMatch && monthMatch && textMatch;
    });
}

export default getVisibleEntries;