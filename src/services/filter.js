export const FILTER_ALL = 'all'
export const FILTER_ACTIVE = 'active'
export const FILTER_COMPLETED = 'completed'

export function getFilterOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    }
}

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true)
        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true)
        default:
            return list
    }
}

export function search(list, query) {
    const str = query.trim().toLowerCase()
    return list.filter((item) => item.text.toLowerCase().indexOf(str) !== -1)
}