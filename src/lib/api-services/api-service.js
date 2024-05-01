import { accessToken } from "@/lib/hooks/use-auth";
import { config } from "@/lib/api-services/config";
import { redirect } from "next/navigation";
import { refreshToken } from "@/lib/auth/refresh-token";

const fetchData = async (url, method, data) => {
  const headers = {
    Authorization: "Bearer " + accessToken() || "",
    "Access-Control-Allow-Origin": "*",
  };

  if (!(data instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const options = {
      method,
      headers,
      body: data ? createRequestBody(data) : undefined,
    };

    const response = await fetch(
      config.site.apiBaseUrl + replaceAndRemoveTrailingSlash(url),
      options
    );
    const res = await response.json();
    if (response.status === 423) {
      const isValid = await refreshToken();
      if (isValid) {
        await fetchData(url, method, data);
      } else {
        // redirect('/')
      }
    } else if (!response.ok) {
      return res;
    }

    return res;
  } catch (error) {
    console.log(error, url);
    throw error;
  }
};

const createApiFunction = (apiUrl) => ({
  get: (id) => {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    return fetchData(url, "GET");
  },
  post: (data, id = "") => {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    return fetchData(url, "POST", data);
  },
  patch: (id, data) => {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    return fetchData(url, "PATCH", data);
  },
  put: (id, data) => {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    return fetchData(url, "PUT", data);
  },
  delete: (id) => {
    const url = id ? `${apiUrl}/${id}` : apiUrl;
    return fetchData(url, "DELETE");
  },
});

const createRequestBody = (data) =>
  data instanceof FormData ? data : JSON.stringify(data);

const replaceAndRemoveTrailingSlash = (url) => {
  const cleanedUrl = url.replace(/\/+/g, "/");
  const withoutTrailingSlash = cleanedUrl.replace(/\/+$/, "");

  const hasQuery = withoutTrailingSlash.includes("?");
  if (hasQuery) {
    const parts = withoutTrailingSlash.split("?");
    return `${replaceAndRemoveTrailingSlash(parts[0])}?${parts[1]}`;
  }

  return withoutTrailingSlash;
};

const APISERVICES = {
  // Cart
  cart: createApiFunction("cart"),
  address: createApiFunction("address"),

  // Auth
  home: createApiFunction("home"),
  login: createApiFunction("auth/login"),
  logout: createApiFunction("auth/logout"),
  loginOtp: createApiFunction("auth/login-otp"),
  refreshToken: createApiFunction("auth/refresh-token"),

  category: createApiFunction("category"),
  brand: createApiFunction("brand"),
  collection: createApiFunction("collection"),
  material: createApiFunction("material"),
  frameMaterial: createApiFunction("material"),
  frameType: createApiFunction("frame-type"),
  frameSize: createApiFunction("frame-size"),
  frameShape: createApiFunction("frame-shape"),
  country: createApiFunction("country"),
  color: createApiFunction("color"),
  gender: createApiFunction("gender"),

  product: createApiFunction("products"),
  productVariants: createApiFunction("products/variants"),
  allVariants: createApiFunction("products/allvariants"),
};

export default APISERVICES;
