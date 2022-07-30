import SanityClientConstructor from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClientConstructor({
    projectId: "in3ne1tx",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-07-20",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: string) => builder.image(source)