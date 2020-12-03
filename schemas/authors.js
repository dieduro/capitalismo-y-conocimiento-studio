export default {
  name: "authors",
  title: "Autors",
  type: "array",
  of: [
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
  ],
};
