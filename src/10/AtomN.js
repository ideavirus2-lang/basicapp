import { atom } from "jotai";

export const AtomN = atom(0);

export const AtomN2 = atom((get) => get(AtomN) * 2);