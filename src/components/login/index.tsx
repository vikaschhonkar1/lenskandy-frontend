"use client";
export { LoginDialog } from "./login-dialog";
export { LoginForm } from "./login-form";

export function addLoginParam() {
  const url = window.location.href;
  // Check if there's already a query string
  const hasQuery = url.includes("?");

  // Separate URL and existing query string
  const baseUrl = hasQuery ? url.slice(0, url.indexOf("?")) : url;
  const queryString = hasQuery ? url.slice(url.indexOf("?") + 1) : "";

  // Create the new query string with "login=true"
  const newQueryString = queryString
    ? `${queryString}&login=true`
    : "login=true";

  // Combine the base URL and new query string
  const newUrl = `${baseUrl}?${newQueryString}`;
  window.location.replace(newUrl);
}


export function removeLoginParam() {
  const url = window.location.href;
  const hasQuery = url.includes("?");

  // Separate URL and existing query string
  const baseUrl = hasQuery ? url.slice(0, url.indexOf("?")) : url;
  const queryString = hasQuery ? url.slice(url.indexOf("?") + 1) : "";

  // Use URLSearchParams to manipulate query parameters
  const params = new URLSearchParams(queryString);

  // Remove the "login" parameter
  params.delete("login");

  // Rebuild the query string from remaining parameters
  const newQueryString = params.toString();

  // Combine the base URL and (potentially empty) new query string
  const newUrl = `${baseUrl}${newQueryString ? "?" + newQueryString : ""}`;
  window.location.replace(newUrl);
}
