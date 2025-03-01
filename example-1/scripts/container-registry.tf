
resource "azurerm_container_registry" "container_registry" {
  name                = var.app_name
  resource_group_name = azurerm_resource_group.chapter9.name
  location            = var.location
  admin_enabled       = true
  sku                 = "Basic"
}

output "registry_hostname" {
  sensitive = true
  value = azurerm_container_registry.container_registry.login_server
}

output "registry_un" {
  sensitive = true
  value = azurerm_container_registry.container_registry.admin_username
}

output "registry_pw" {
  sensitive = true
  value = azurerm_container_registry.container_registry.admin_password
}
