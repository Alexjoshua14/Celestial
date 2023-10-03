module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["internal", "parent", "sibling", "index"], ["unknown"]],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: '^(react$|next$|next/**)',
            group: "external",
            position: "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react$", "next$", "next/**"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
