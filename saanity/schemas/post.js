export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
   {
    name: "name",
    type: "string",
    title: "Restaurant name",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "short_description",
    type: "string",
    title: "short description",
    validation: (Rule) => Rule.required(),
   },
   {
    name: "image",
    type: "image",
    title: "image of the restaaurant",
   },
   {
    name: "lat",
    type: "number",
    title: "latitude of the restaurant",
   },
   {
    name: "long",
    type: "number",
    title: "longitude of the restaurant",
   },
   {
    name: "address",
    type: "string",
    title: "Restaurant address",
    validation: (Rule) => Rule.required(),
   },

  ],
} 
