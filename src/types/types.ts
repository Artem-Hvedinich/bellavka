export type ResponseCardsType = {
    brand: {}
    brandId: number
    category: {}
    categoryId: number
    collections: []
    colors: ColorsType[]
    date: {}
    description: string
    fabricText: string
    fabrics: []
    favorite: boolean
    fullName: string
    heights: SizesType[]
    id: number
    isActive: boolean
    isCotton: boolean
    isFitting: boolean
    isForsale: boolean
    isLinen: boolean
    isNew: boolean
    isOutlet: boolean
    kits: KitsType[]
    name: string
    photos: []
    price: PriceType
    promocode: null
    questionsCount: number
    reviewsCount: number
    salePercent: number
    season: {}
    seasonId: number
    sizes: SizesType[]
    slug: string
    status: string
    styles: []
    url: string
    videos: VideoType[]
    videosCount: number
}

type VideoType = {
    '240p': string
    '360p': string
    '540p': string
    '720p': string
    adaptive: string
    preview: string
}
type KitsType = {
    id: number
    value: string
}

type PriceType = {
    retail: number
    retailOld: number
    wholesale: number
    wholesaleOld: number
}
type SizesType = {
    id: number
    isActual?: true
    value: string
}

type ColorsType = {
    id: number
    hex: string
    value: string
}

