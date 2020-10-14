export default {
  name: "figure",
  type: "object",
  title: "Figure",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Texto Alternativo",
    },
    {
      name: "caption",
      type: "string",
      title: "Epígrafe",
    },
  ],
};
