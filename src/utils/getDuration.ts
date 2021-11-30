import { formatDuration, intervalToDuration } from "date-fns";

export const getDuration = (start_date: string, end_date: string) => {
    const a = new Date(start_date);
    const b = new Date(end_date);
    const dur = intervalToDuration({ start: a, end: b });
    return formatDuration(dur);
};
