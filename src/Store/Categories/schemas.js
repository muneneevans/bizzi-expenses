export const categorySchema = {
  name: "Category",
  primaryKey: "id",
  properties: {
    id: "int",
    name:"string",
    icon: "string",
    color: "string",
    synced: { type: "bool", default: false }
  }
};
