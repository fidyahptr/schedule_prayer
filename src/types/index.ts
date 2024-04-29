export type TResponse<T1, T2> = {
    status: string,
    request: T1,
    data: T2
}

export type TRequestSholat = {
    path:string,
    year:string,
    month:string,
    date:string
}

export type TResponseSholat = {
    id: number,
    lokasi: string,
    daerah: string,
    jadwal: {
        tanggal: string,
        imsak: string,
        subuh: string,
        terbit: string,
        dhuha: string,
        dzuhur: string,
        ashar: string,
        maghrib: string,
        isya: string,
        date: string
    }
}

export type TRequestDoa = {
    path:string,
    id:number
}

export type TResponseDoa = {
    arab: string,
    indo: string,
    judul: string,
    source: string
}

export type TRequestCalender = {
    path: string,
    date:string,
    adj: number
}

export type TResponseCalender = {
    date: string[],
    num: number[]
}
