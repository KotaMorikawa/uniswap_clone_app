import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '43mqqngt',
    dataset: 'production',
    apiVersion: 'v1',
    token:
        'skVbjSGWkEufCX9SwEYepf6FBj44QH41cOzTFqsCLiyiyestppqyPTglEQ4y8PxK1unDASiPWhk3eGU2jV8VXmXVsiIgUyaE4YdVwuJDZ2rSBe3kLYMZtyox0Pud9PbxzgrekwISklBpF1V2RzKWmFFOyjgSXRRVMybz7ohsdytrMmYTfZMK',
    useCdn: false,

})