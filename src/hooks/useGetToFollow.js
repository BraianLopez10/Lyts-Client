import React, { useEffect, useState } from "react";
import api from "../services/api";
export default function UseGetToFollow() {
  const [toFollow, setToFollow] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let result = await api.userToFollow();
        setToFollow(result.data);
      } catch {}
    }
    getData();
  }, []);

  return [toFollow];
}
