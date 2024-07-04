import { accessToken, sessionId } from "@/hooks/useAuth";
import { refreshToken } from "./auth/refresh-token";
import { config } from "@/config";
import { redirect } from "next/navigation";
import { addLoginParam } from "@/components/login";

const APISERVICES = {
  //Cart
  cart: createApiFunction("cart"),
  wishlist: createApiFunction("wishlist"),
  address: createApiFunction("address"),

  //Auth
  home: createApiFunction("home"),
  login: createApiFunction("auth/login"),
  logout: createApiFunction("auth/logout"),
  loginOtp: createApiFunction("auth/login-otp"),
  refressToken: createApiFunction("auth/refresh-token"),

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
  allvariants: createApiFunction("products/allvariants"),
  relatedVariantsbyProductId: createApiFunction("products/variants/related"),

  lensType: createApiFunction("lens-power"),
  lensPackage: createApiFunction("lens-package"),

  order: createApiFunction("order"),
  verifyPayment: createApiFunction("order/verify-payment"),

  getAllFilters: createApiFunction("filter"),
};

export default APISERVICES;

async function fetchData(url, method, data) {
  // const { token } = await authClient.getUser();
  const token = await accessToken();
  const session = await sessionId();
  const headers = {
    Authorization: "Bearer " + token || "",
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

    let apiUrl = replaceAndRemoveTrailingSlash(url);
    const hasQuery = apiUrl?.includes("?");
    if (hasQuery) {
      apiUrl += "&sessionId=" + session;
    } else {
      apiUrl += "?sessionId=" + session;
    }

    const response = await fetch(config.site.apiBaseUrl + apiUrl, options);
    const res = await response.json();
    // if (response.status === 423) {
    //   addLoginParam();
    //   // const isValid = await refreshToken();
    //   // if (isValid) {
    //   //   fetchData(url, method, data);
    //   // } else {
    //   // }
    // } else if (!response.ok) {
    //   return res;
    // }
    return res;

    return res;
  } catch (error) {
    console.log(error, url);
    throw error;
  }
}

function createApiFunction(apiUrl) {
  return {
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
  };
}

function createRequestBody(data) {
  return data instanceof FormData ? data : JSON.stringify(data);
}

function replaceAndRemoveTrailingSlash(url) {
  const cleanedUrl = url.replace(/\/+/g, "/");
  const withoutTrailingSlash = cleanedUrl.replace(/\/+$/, "");

  const hasQuery = withoutTrailingSlash.includes("?");
  if (hasQuery) {
    const parts = withoutTrailingSlash.split("?");
    return `${replaceAndRemoveTrailingSlash(parts[0])}?${parts[1]}`;
  }

  return withoutTrailingSlash;
}
