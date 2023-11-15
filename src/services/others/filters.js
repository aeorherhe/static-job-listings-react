export function filters(item, FILTERS) {
  if (item === "roles") return FILTERS.BY_ROLE;
  if (item === "levels") return FILTERS.BY_LEVEL;
  if (item === "languages") return FILTERS.BY_LANGUAGES;
  if (item === "tools") return FILTERS.BY_TOOLS;
  return "";
}
