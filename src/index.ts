type Resource = {
  permissions: { [key: string]: boolean }
}

type Permissions<T extends Resource> = keyof T["permissions"]

export const can = <T extends Resource>(
  resource: T,
  ...[permission]: T extends Resource ? [Permissions<T>] : []
): boolean => {
  if (typeof resource == "object" && "permissions" in resource && permission) {
    return resource.permissions[permission]
  }

  return false
}
