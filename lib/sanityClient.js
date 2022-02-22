import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'eq28f7xu',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: false,  
    token: 'skMgZFCB95wdbsmzpB1qWZ0QGrwS7oo6BXdMZrm8mr10T2gDk07X6YdFrPKcgDaHQVBFmG774qCieK0tUaXH7PwAa5EPOQ8OgqLvThHXA4qren1lBCwwGXerADbc0u8xFr0YJCNiYejaJ8MnpmMFCRiTreGRCStTjHNEdcqFMx9MC2Adwu53'
})