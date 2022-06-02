export type ResponseCommentType = {
    data: DataType[]
    links: LinksType
    message: string
    meta: Meta
    statistics: Statistics
}

export type DataType = {
    answers: Answers[]
    brandId: NullableType<number>
    categoryId: NullableType<number>
    characteristics: string[]
    createdDate: string
    id: number
    isJustForUser: boolean
    photos: string[]
    placementCommon: boolean
    placementModel: boolean
    productId: 57791673
    rating: 3
    user: UserDataType
    value: string
    videos: []
}
type UserDataType = {
    name: 'User',
    photo: NullableType<string>
}
type Answers = {
    createdDate: string
    feedbackId: number
    id: number
    photos: string[]
    value: string
    videos: []
}
type LinksType = {
    first: UndefType<string>
    last: UndefType<string>
    next: UndefType<string>
    prev: UndefType<string>
}
type Meta = {
    current_page: number
    from: number
    last_page: number
    links: LinkMetaType[]
    length: number
    path: string
    per_page: string
    to: number
    total: number
}
type LinkMetaType = {
    url: NullableType<string>,
    label: string,
    active: boolean
}
type Statistics = {
    rating: StatisticsRating
    size: StatisticsSize[]
}
type StatisticsRating = {
    rating: string
    total: number
}
type StatisticsSize = {
    name: string
    percent: string
}

type NullableType<T> = null | T
type UndefType<T> = undefined | T