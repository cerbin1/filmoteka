import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchOmdb } from "../utils/omdb";

export function useCatalogSearch(type) {
  const [params, setParams] = useSearchParams();
  const queryFromUrl = params.get("q") || "";
  const pageFromUrl = Math.max(1, Number(params.get("page")) || 1);
  const yearFromUrl = params.get("year") || "0";
  const [query, setQuery] = useState(queryFromUrl);
  const [yearKey, setYearKey] = useState(yearFromUrl);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);
  const requestIdRef = useRef(0);

  const run = useCallback(async (searchQuery, page, signal) => {
    const id = ++requestIdRef.current;
    setLoading(true);
    setError("");
    try {
      const result = await fetchOmdb({ type, s: searchQuery, page: String(page) }, signal);
      if (id === requestIdRef.current) setData(result);
    } catch (err) {
      if (id === requestIdRef.current && err.name !== "AbortError") {
        if (err.message === "Movie not found!") {
          setData({ Search: [], totalResults: "0" });
          setError("");
        } else {
          setError(err.message || "Nie udało się pobrać wyników.");
        }
      }
    } finally {
      if (id === requestIdRef.current) setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    setQuery(queryFromUrl);
    setYearKey(yearFromUrl);
    if (queryFromUrl.trim().length < 3) return undefined;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    run(queryFromUrl.trim(), pageFromUrl, controller.signal);
    return () => controller.abort();
  }, [queryFromUrl, pageFromUrl, yearFromUrl, run]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  const submit = (event) => {
    event.preventDefault();
    const normalized = query.trim();
    if (normalized.length < 3) {
      setError("Wpisz co najmniej 3 znaki.");
      return;
    }
    setParams((current) => {
      const next = new URLSearchParams(current);
      next.set("q", normalized);
      next.set("page", "1");
      if (yearKey === "0") next.delete("year");
      else next.set("year", yearKey);
      return next;
    });
  };
  const goToPage = (page) => setParams((current) => {
    const next = new URLSearchParams(current);
    next.set("page", String(page));
    return next;
  });
  const retry = () => {
    if (queryFromUrl.trim().length < 3) return;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    run(queryFromUrl.trim(), pageFromUrl, controller.signal);
  };

  return { query, setQuery, yearKey, setYearKey, data, loading, error, page: pageFromUrl, submit, goToPage, retry };
}
