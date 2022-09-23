import { useRouter } from "next/router";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a
          onClick={(e) => {
            router.push("/signin");
          }}
        >
          You must be signed in to view this page
        </a>
      </p>
    </>
  );
};

export default index;
