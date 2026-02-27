"use client";
import { useEffect, useMemo, useState } from "react";

function Page() {
  const [query, setQuery] = useState("");
  const filter = useMemo(() => ({ role: "admin" }), []);

  useEffect(() => {
    console.log("🔍 Фільтруємо користувачів:", query, filter);
    // Тут умовно буде fetch користувачів з query + filter
  }, [query, filter]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Пошук користувачів"
      />
    </div>
  );
}

export default Page;
