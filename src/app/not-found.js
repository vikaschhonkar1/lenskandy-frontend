
"use client"
import React from 'react';

export default function Page() {
  const currentUrl = window.location.href;
  const nonWwwUrl = currentUrl.replace('www.', '');

  window.location.href = nonWwwUrl;


  return (
    <div>redirecting....</div>
  );
}
