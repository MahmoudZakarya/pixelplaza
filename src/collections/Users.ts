import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return "<p>Hello Verify</p>";
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      //   admin: {
      //     condition: ({ req }) => req.user.role === "Admin",
      //   },
      type: "select",
      options: [
        { label: "Admin", value: "Admin" },
        { label: "user", value: "user" },
      ],
    },
  ],
};
