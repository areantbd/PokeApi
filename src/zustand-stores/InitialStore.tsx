/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"

interface Initial {
  charmander: any
  squirtle: any
  bulbasaur: any
  primary: string,
  secondary: string,
  background: string,
}

export const useInitialStore = create<Initial>(( set ) => ({
  primary: "", 
  secondary: "",
  background: "",
  charmander: () => set(() => ({primary: "#ffad52", secondary: "#de5239", background: "#ff9441"})),
  squirtle: () => set(() => ({primary: "#F5EC9E", secondary: "#D8B859", background: "#A1D9EF"})),
  bulbasaur : () => set(() => ({primary: "#92D1B3", secondary: "#49896F", background: "#89C893"}))
}))

  // function SelectCharmander() {
  //   const charmander = useInitialStore((state) => state.charmander)
  //   return <button onClick={charmander}>Charmander</button>
  // }
