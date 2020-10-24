const ejes = [
  { title: "Materialismo - Capitalismo", value: "AB" },
  { title: "Capitalismo - Propiedad", value: "BC" },
  { title: "Propiedad - Materialismo", value: "AC" },
  { title: "Materialismo - Centro", value: "AD" },
  { title: "Propiedad - Centro", value: "CD" },
];

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "description",
      title: "Descripción",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "ejeConceptual",
      title: "Eje Conceptual",
      type: "string",
      description: "Seleccioná un eje conceptual",
      options: {
        list: ejes,
        layout: "select",
      },
    },
    {
      name: "valorVector",
      title: "Valor Vector",
      type: "number",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      date: "date",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
